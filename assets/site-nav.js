// Shared top navigation for k-wheeler.github.io.
// Injected into <div id="site-nav-root"></div> on every site page and on the
// phenology page (served from the same origin at /phenology/). Editing the
// NAV_ITEMS list here updates the nav everywhere without touching each page.
(function () {
  var NAV_ITEMS = [
    { title: 'About',                       href: '/index.html',       match: /^\/(index\.html)?$/ },
    { title: 'Resume',                      href: '/resume.html',      match: /^\/resume\.html$/ },
    { title: 'Previous Research',           href: '/research.html',    match: /^\/research\.html$/ },
    { title: 'Appalachian Trail Phenology', href: '/phenology/',       match: /^\/phenology\/(index\.html)?$/ },
    { title: 'Publications',                href: '/publications.html', match: /^\/publications\.html$/ },
    { title: 'News',                        href: '/news.html',        match: /^\/news\.html$/ }
  ];

  var path = window.location.pathname;

  var links = NAV_ITEMS.map(function (item) {
    var active = item.match.test(path);
    var cls = active
      ? 'no-underline px-3 py-1.5 rounded text-sm font-medium bg-forest-50 text-forest-600'
      : 'no-underline px-3 py-1.5 rounded text-sm text-gray-600 hover:bg-gray-100';
    return '<a href="' + item.href + '" class="' + cls + '">' + item.title + '</a>';
  }).join('\n        ');

  var html =
    '<nav class="sticky top-0 z-50 bg-white border-b-2 border-forest-400 shadow-sm">' +
    '  <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">' +
    '    <div>' +
    '      <div class="font-semibold text-gray-900 text-base leading-tight">Kathryn I. Wheeler</div>' +
    '      <div class="text-xs text-gray-500">Environmental &amp; Geospatial Data Scientist</div>' +
    '    </div>' +
    '    <div class="flex items-center gap-1 flex-wrap justify-end">' +
    '        ' + links +
    '    </div>' +
    '  </div>' +
    '</nav>';

  var root = document.getElementById('site-nav-root');
  if (root) {
    root.outerHTML = html;
  }
})();
