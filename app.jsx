/* サイトビルダー — React app */
const { useState, useEffect, useRef, useCallback } = React;
const B = window.BLD;

/* ---------------- field controls ---------------- */
function Field({ def, value, onChange }) {
  const k = def.kind;
  if (k === 'image') {
    const onFile = (e) => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = () => onChange(r.result); r.readAsDataURL(f);
    };
    return (
      <div className="field">
        <label>{def.label}</label>
        <div className="img-field">
          {value ? <img className="img-prev" src={value} alt="" /> : <div className="img-empty">なし</div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label className="btn small" style={{ cursor: 'pointer' }}>
              画像を選ぶ<input type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
            </label>
            {value ? <button className="btn small danger" onClick={() => onChange('')}>削除</button> : null}
          </div>
        </div>
        {def.hint ? <div className="hint">{def.hint}</div> : null}
      </div>
    );
  }
  if (k === 'select') {
    return (
      <div className="field">
        <label>{def.label}</label>
        <select value={value || ''} onChange={(e) => onChange(e.target.value)}>
          {def.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    );
  }
  if (k === 'accent') {
    return (
      <div className="field">
        <label>{def.label}</label>
        <div className="swatches">
          {def.options.map((o) => (
            <button key={o.value} className={'swatch' + (value === o.value ? ' on' : '')}
              style={{ background: o.color }} onClick={() => onChange(o.value)} aria-label={o.value} />
          ))}
        </div>
      </div>
    );
  }
  if (k === 'seg') {
    return (
      <div className="field">
        <label>{def.label}</label>
        <div className="seg">
          {def.options.map((o) => (
            <button key={o.value} className={value === o.value ? 'on' : ''} onClick={() => onChange(o.value)}>{o.label}</button>
          ))}
        </div>
      </div>
    );
  }
  if (k === 'tags') {
    const text = Array.isArray(value) ? value.join('\n') : (value || '');
    return (
      <div className="field">
        <label>{def.label}</label>
        <textarea value={text} rows={Math.min(10, Math.max(2, text.split('\n').length))}
          onChange={(e) => onChange(e.target.value.split('\n').map((s) => s).filter((s, i, a) => !(s === '' && i === a.length - 1)))}
          onBlur={(e) => onChange(e.target.value.split('\n').map((s) => s.trim()).filter((s) => s !== ''))} />
        {def.hint ? <div className="hint">{def.hint}</div> : null}
      </div>
    );
  }
  if (k === 'textarea') {
    return (
      <div className="field">
        <label>{def.label}</label>
        <textarea value={value || ''} onChange={(e) => onChange(e.target.value)} />
        {def.hint ? <div className="hint">{def.hint}</div> : null}
      </div>
    );
  }
  return (
    <div className="field">
      <label>{def.label}</label>
      <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} />
      {def.hint ? <div className="hint">{def.hint}</div> : null}
    </div>
  );
}

/* ---------------- repeat group ---------------- */
function Repeat({ def, items, onItems }) {
  const arr = items || [];
  const update = (i, key, val) => { const a = B.clone(arr); a[i][key] = val; onItems(a); };
  const add = () => {
    const blank = {}; def.fields.forEach((f) => { blank[f.key] = (f.kind === 'tags') ? [] : ''; });
    onItems(arr.concat([blank]));
  };
  const del = (i) => { const a = B.clone(arr); a.splice(i, 1); onItems(a); };
  const move = (i, dir) => {
    const j = i + dir; if (j < 0 || j >= arr.length) return;
    const a = B.clone(arr); const t = a[i]; a[i] = a[j]; a[j] = t; onItems(a);
  };
  return (
    <div className="repeat">
      <div className="rlabel">{def.itemLabel}（{arr.length}）</div>
      {arr.map((it, i) => (
        <div className="rcard" key={i}>
          <div className="rtools">
            <button className="rtool" onClick={() => move(i, -1)} title="上へ">↑</button>
            <button className="rtool" onClick={() => move(i, 1)} title="下へ">↓</button>
            <button className="rtool del" onClick={() => del(i)} title="削除">✕</button>
          </div>
          <div className="rnum">{def.itemLabel} {i + 1}</div>
          {def.fields.map((f) => (
            <Field key={f.key} def={f} value={it[f.key]} onChange={(v) => update(i, f.key, v)} />
          ))}
        </div>
      ))}
      <button className="add-btn" onClick={add}>{def.addLabel || '＋ 追加'}</button>
    </div>
  );
}

/* ---------------- section accordion ---------------- */
function Section({ sec, idx, open, onToggle, data, setPath }) {
  return (
    <div className={'f-section' + (open ? ' open' : '')}>
      <button className="f-head" onClick={onToggle}>
        <span className="ix">{('0' + (idx + 1)).slice(-2)}</span>
        {sec.title}
        <span className="chev">›</span>
      </button>
      <div className="f-body">
        {(sec.fields || []).map((f) => (
          <Field key={f.path} def={f} value={B.get(data, f.path)} onChange={(v) => setPath(f.path, v)} />
        ))}
        {(sec.repeats || []).map((r) => (
          <Repeat key={r.path} def={r} items={B.get(data, r.path)} onItems={(v) => setPath(r.path, v)} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- editor ---------------- */
const SIZES = { full: '100%', tablet: '834px', phone: '390px' };

function Editor({ tpl, data, setData, onBack, toast }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [size, setSize] = useState('full');
  const [html, setHtml] = useState('');
  const stageRef = useRef(null);
  const [stageW, setStageW] = useState(900);

  useEffect(() => { setHtml(tpl.generate(data)); }, [data, tpl]);
  useEffect(() => {
    const measure = () => { if (stageRef.current) setStageW(stageRef.current.clientWidth - 44); };
    measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure);
  }, []);

  const setPath = useCallback((path, val) => {
    setData((prev) => { const n = B.clone(prev); B.set(n, path, val); return n; });
  }, [setData]);

  const download = () => {
    const blob = new Blob([tpl.generate(data)], { type: 'text/html;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'index.html'; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('index.html をダウンロードしました');
  };
  const reset = () => { if (confirm('入力内容をサンプルの初期値に戻します。よろしいですか？')) setData(B.clone(tpl.defaults)); };

  // scale preview to fit when full
  let frameW = size === 'full' ? tpl.previewW : parseInt(SIZES[size]);
  let scale = Math.min(1, stageW / frameW);
  if (size !== 'full') scale = Math.min(1, stageW / frameW);
  const frameH = 760 / scale;

  return (
    <div className="editor">
      <div className="form-pane">
        {tpl.schema.map((sec, i) => (
          <Section key={i} sec={sec} idx={i} open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} data={data} setPath={setPath} />
        ))}
        <div style={{ padding: '18px 20px 40px' }}>
          <button className="btn ghost small" onClick={reset}>サンプルの初期値に戻す</button>
        </div>
      </div>

      <div className="preview-pane">
        <div className="pv-bar">
          <span className="dot" style={{ background: '#ff5f57' }}></span>
          <span className="dot" style={{ background: '#febc2e' }}></span>
          <span className="dot" style={{ background: '#28c840' }}></span>
          <span className="label">ライブプレビュー</span>
          <span className="spacer"></span>
          <div className="pv-sizes">
            {['full', 'tablet', 'phone'].map((s) => (
              <button key={s} className={'pv-size' + (size === s ? ' on' : '')} onClick={() => setSize(s)}>
                {s === 'full' ? 'PC' : s === 'tablet' ? 'タブレット' : 'スマホ'}
              </button>
            ))}
          </div>
        </div>
        <div className="pv-stage" ref={stageRef}>
          <div className="pv-frame-wrap" style={{ width: frameW * scale, height: 760 }}>
            <iframe title="preview" srcDoc={html}
              style={{ width: frameW, height: frameH, transform: 'scale(' + scale + ')', transformOrigin: 'top left' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- genre select ---------------- */
function GenreSelect({ onPick }) {
  const tpls = Object.values(window.TEMPLATES);
  return (
    <div className="genre-screen">
      <div className="genre-inner">
        <div className="genre-kicker">Site Builder</div>
        <h1>どんなサイトを作りますか？</h1>
        <p className="sub">種類を選ぶと、その業種に合わせた入力フォームとサンプルが用意されます。入力するとプレビューが更新され、HTMLとして書き出せます。</p>
        <div className="genre-grid">
          {tpls.map((t) => (
            <div key={t.key} className="genre-card enabled" onClick={() => onPick(t.key)}>
              <div className="gico" style={{ background: t.iconBg }} dangerouslySetInnerHTML={{ __html: t.icon }} />
              <h3>{t.label}</h3>
              <p>{t.desc}</p>
              <div className="go">このテンプレートで作る →</div>
            </div>
          ))}
          <div className="genre-card soon">
            <span className="soon-tag">準備中</span>
            <div className="gico" style={{ background: '#7a4ea8' }}>
              <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /><path d="M9 13h6" /></svg>
            </div>
            <h3>飲食店・教室・サロン…</h3>
            <p>テンプレートは順次追加予定。ご要望のジャンルがあれば教えてください。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- root ---------------- */
const LS_KEY = 'tasuichi_builder_v1';

function App() {
  const [genre, setGenre] = useState(null);
  const [store, setStore] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  });
  const [toastMsg, setToastMsg] = useState('');
  const toastTimer = useRef(null);
  const toast = (m) => {
    setToastMsg(m);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(''), 1800);
  };

  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {}
  }, [store]);

  const tpl = genre ? window.TEMPLATES[genre] : null;
  const data = (tpl && store[genre]) ? store[genre] : (tpl ? tpl.defaults : null);
  const setData = (updater) => {
    setStore((prev) => {
      const cur = prev[genre] || B.clone(tpl.defaults);
      const next = (typeof updater === 'function') ? updater(cur) : updater;
      return Object.assign({}, prev, { [genre]: next });
    });
  };
  const pick = (g) => {
    setGenre(g);
    setStore((prev) => prev[g] ? prev : Object.assign({}, prev, { [g]: B.clone(window.TEMPLATES[g].defaults) }));
  };

  const download = () => {
    const blob = new Blob([tpl.generate(data)], { type: 'text/html;charset=utf-8' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = 'index.html'; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('index.html をダウンロードしました');
  };

  return (
    <React.Fragment>
      <div className="topbar">
        <div className="logo"><span className="mk">S</span>サイトビルダー</div>
        {tpl ? (
          <div className="crumb">／ <b>{tpl.label}</b></div>
        ) : null}
        <div className="spacer"></div>
        {tpl ? (
          <div className="tb-actions">
            <button className="btn ghost" onClick={() => setGenre(null)}>← 種類を変える</button>
            <button className="btn primary" onClick={download}>HTMLをダウンロード ↓</button>
          </div>
        ) : null}
      </div>

      {tpl
        ? <Editor tpl={tpl} data={data} setData={setData} onBack={() => setGenre(null)} toast={toast} />
        : <GenreSelect onPick={pick} />}

      <div className={'toast' + (toastMsg ? ' show' : '')}>{toastMsg}</div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
