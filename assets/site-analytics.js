// Shared visitor analytics for k-wheeler.github.io (GoatCounter).
// Loaded in <head> on every page. Privacy-friendly: no cookies, no consent
// banner needed. Counts show at the ENDPOINT's dashboard (e.g.
// https://k-wheeler.goatcounter.com). Change ENDPOINT if the site code changes.
(function () {
  var ENDPOINT = 'https://k-wheeler.goatcounter.com/count';

  // Don't count local previews / dev work — only real visits to the live site.
  var h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h === '') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', ENDPOINT);
  document.head.appendChild(s);
})();
