// Shared Tailwind theme for k-wheeler.github.io.
// Loaded by every site page (and the phenology page) before the Tailwind CDN
// script, so editing the palette here re-themes the whole site — including
// the phenology page, which loads this same file from its own origin.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: { 50: '#EAF3DE', 100: '#C0DD97', 400: '#639922', 600: '#3B6D11', 800: '#27500A' }
      }
    }
  }
};
