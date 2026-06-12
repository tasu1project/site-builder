window.BLD = window.BLD || {};
(function (B) {
  // HTML-escape
  B.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  // escape + newlines to <br/>
  B.ml = function (s) { return B.esc(s).replace(/\n/g, '<br />'); };
  // wrap first occurrence of `accent` inside escaped text with <span class="u">
  B.accent = function (s, accent) {
    var e = B.esc(s);
    if (accent) {
      var ea = B.esc(accent);
      var i = e.indexOf(ea);
      if (i >= 0) e = e.slice(0, i) + '<span class="u">' + ea + '</span>' + e.slice(i + ea.length);
    }
    return e.replace(/\n/g, '<br />');
  };
  B.get = function (o, path) {
    return path.split('.').reduce(function (a, k) { return a == null ? undefined : a[k]; }, o);
  };
  B.set = function (o, path, val) {
    var ks = path.split('.'); var t = o;
    for (var i = 0; i < ks.length - 1; i++) { if (t[ks[i]] == null) t[ks[i]] = {}; t = t[ks[i]]; }
    t[ks[ks.length - 1]] = val; return o;
  };
  B.clone = function (o) { return JSON.parse(JSON.stringify(o)); };
  // array of strings -> chip spans
  B.chips = function (arr, cls) {
    return (arr || []).map(function (t) { return '<span class="' + (cls || 'chip') + '">' + B.esc(t) + '</span>'; }).join('');
  };
  B.lis = function (arr) {
    return (arr || []).map(function (t) { return '<li>' + B.esc(t) + '</li>'; }).join('');
  };
})(window.BLD);
