// Shared top navigation for k-wheeler.github.io.
// Injected into <div id="site-nav-root"></div> on every site page and on the
// phenology page (served from the same origin at /phenology/). Editing the
// NAV_ITEMS list here updates the nav everywhere without touching each page.
// On phones the links collapse behind a tap-to-open menu button (hamburger);
// on md+ screens they show inline.
(function () {
  var NAV_ITEMS = [
    { title: 'About',                       href: '/index.html',       match: /^\/(index\.html)?$/ },
    { title: 'Resume',                      href: '/resume.html',      match: /^\/resume\.html$/ },
    { title: 'Previous Research',           href: '/research.html',    match: /^\/research\.html$/ },
    { title: 'Appalachian Trail Phenology', href: '/phenology/',       match: /^\/phenology\/(index\.html)?$/ },
    { title: 'Publications',                href: '/publications.html', match: /^\/publications\.html$/ }
  ];

  var path = window.location.pathname;

  function renderLinks(mobile) {
    return NAV_ITEMS.map(function (item) {
      var active = item.match.test(path);
      var base = mobile
        ? 'no-underline block px-3 py-2 rounded text-sm '
        : 'no-underline px-3 py-1.5 rounded text-sm ';
      var cls = active
        ? base + 'font-medium bg-forest-50 text-forest-600'
        : base + 'text-gray-600 hover:bg-gray-100';
      return '<a href="' + item.href + '" class="' + cls + '">' + item.title + '</a>';
    }).join(mobile ? '\n        ' : '\n        ');
  }

  var html =
    '<nav class="sticky top-0 z-50 bg-white border-b-2 border-forest-400 shadow-sm">' +
    '  <div class="max-w-6xl mx-auto px-6 py-3">' +
    '    <div class="flex items-center justify-between gap-4">' +
    '      <a href="/index.html" class="no-underline block group" aria-label="Kathryn I. Wheeler — About">' +
    '        <div class="font-semibold text-gray-900 text-base leading-tight group-hover:text-forest-600">Kathryn I. Wheeler</div>' +
    '        <div class="text-xs text-gray-500">Environmental &amp; Geospatial Data Scientist</div>' +
    '      </a>' +
    '      <div class="hidden md:flex items-center gap-1 flex-wrap justify-end">' +
    '        ' + renderLinks(false) +
    '      </div>' +
    '      <button id="site-nav-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="site-nav-mobile" class="md:hidden text-gray-700 hover:text-forest-600 p-1 -mr-1">' +
    '        <i class="ti ti-menu-2 text-2xl"></i>' +
    '      </button>' +
    '    </div>' +
    '    <div id="site-nav-mobile" class="hidden md:hidden flex-col gap-1 mt-3">' +
    '        ' + renderLinks(true) +
    '    </div>' +
    '  </div>' +
    '</nav>';

  var root = document.getElementById('site-nav-root');
  if (!root) return;
  root.outerHTML = html;

  var toggle = document.getElementById('site-nav-toggle');
  var menu = document.getElementById('site-nav-mobile');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var nowHidden = menu.classList.toggle('hidden');
      menu.classList.toggle('flex', !nowHidden);
      toggle.setAttribute('aria-expanded', String(!nowHidden));
      var icon = toggle.querySelector('i');
      if (icon) icon.className = (nowHidden ? 'ti ti-menu-2' : 'ti ti-x') + ' text-2xl';
    });
  }
})();
