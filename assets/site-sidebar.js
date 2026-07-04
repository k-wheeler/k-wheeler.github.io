// Shared profile sidebar for k-wheeler.github.io.
// Injected into <div id="site-sidebar-root"></div> on every main site page.
// Responsive: a full vertical card on md+ screens, and a compact header
// (small photo beside name, contact links as an icon row) on phones.
// Editing the CONTACTS list here updates the sidebar on every page at once.
(function () {
  var root = document.getElementById('site-sidebar-root');
  if (!root) return;

  var CONTACTS = [
    { href: 'mailto:kwheelerecology@gmail.com',                        icon: 'ti-mail',           label: 'Email',          text: 'kwheelerecology@gmail.com', external: false },
    { href: 'https://github.com/k-wheeler',                            icon: 'ti-brand-github',   label: 'GitHub',         text: 'k-wheeler',                 external: true  },
    { href: 'https://www.linkedin.com/in/kathryn-wheeler-aa06659a',    icon: 'ti-brand-linkedin', label: 'LinkedIn',       text: 'LinkedIn',                  external: true  },
    { href: 'https://scholar.google.com/citations?user=u70ni9sAAAAJ&hl=en', icon: 'ti-school',   label: 'Google Scholar', text: 'Google Scholar',            external: true  },
    { href: 'https://www.researchgate.net/profile/Kathryn-Wheeler-3',  icon: 'ti-flask',          label: 'ResearchGate',   text: 'ResearchGate',              external: true  },
    { href: 'https://orcid.org/0000-0003-3931-7489',                   icon: 'ti-id',             label: 'ORCID',          text: 'ORCID',                     external: true  }
  ];

  var contactLinks = CONTACTS.map(function (c) {
    var target = c.external ? ' target="_blank" rel="noopener"' : '';
    return '' +
      '<a href="' + c.href + '"' + target + ' aria-label="' + c.label + '" title="' + c.text + '" class="flex items-center gap-2 text-gray-600 hover:text-forest-600">' +
        '<i class="ti ' + c.icon + ' text-forest-400 text-lg md:text-xs shrink-0"></i>' +
        '<span class="hidden md:inline text-xs break-all">' + c.text + '</span>' +
      '</a>';
  }).join('');

  var html =
    '<aside class="w-full md:w-52 md:shrink-0">' +
    '  <div class="md:sticky md:top-24">' +
    '    <div class="flex flex-row md:flex-col items-center gap-4 md:gap-3 md:text-center">' +
    '      <img src="/images/profile_professional.jpg" alt="Kathryn Wheeler" class="w-16 h-16 md:w-32 md:h-32 rounded-full object-cover border-4 border-forest-100 shrink-0">' +
    '      <div class="min-w-0">' +
    '        <div class="font-semibold text-gray-900 text-base md:text-sm leading-tight">Kathryn I. Wheeler</div>' +
    '        <div class="text-xs text-gray-500 mt-0.5 md:mt-1 leading-snug">Environmental &amp; Geospatial Data Scientist</div>' +
    '        <div class="flex items-center gap-1 text-xs text-gray-500 mt-1 md:justify-center">' +
    '          <i class="ti ti-map-pin text-forest-400 shrink-0"></i>Williamstown, MA' +
    '        </div>' +
    '      </div>' +
    '    </div>' +
    '    <div class="mt-4 pt-4 md:pt-3 border-t border-gray-200 flex flex-row flex-wrap md:flex-col gap-x-5 gap-y-3 md:gap-2 md:text-left">' +
    '      ' + contactLinks +
    '    </div>' +
    '  </div>' +
    '</aside>';

  root.outerHTML = html;
})();
