// Interações básicas do portefólio (sem dependências para GitHub Pages).
const langButton = document.getElementById('lang-toggle');
const themeButton = document.getElementById('theme-toggle');
const copyButton = document.getElementById('copy-email');
const keyLang = 'afonso-portfolio-lang';
const keyTheme = 'afonso-portfolio-theme';
const saved = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
const persist = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
let lang = saved(keyLang) === 'en' ? 'en' : 'pt';
let theme = saved(keyTheme) === 'light' ? 'light' : 'dark';

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-pt][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langButton.querySelectorAll('span').forEach(s => s.classList.toggle('on', s.textContent.toLowerCase() === lang));
  langButton.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
  themeButton.setAttribute('aria-label', theme === 'dark' ? (lang === 'pt' ? 'Ativar modo claro' : 'Switch to light mode') : (lang === 'pt' ? 'Ativar modo escuro' : 'Switch to dark mode'));
}
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === 'dark' ? '☀' : '☾';
  themeButton.title = theme === 'dark' ? (lang === 'pt' ? 'Ativar modo claro' : 'Switch to light mode') : (lang === 'pt' ? 'Ativar modo escuro' : 'Switch to dark mode');
  themeButton.setAttribute('aria-label', themeButton.title);
}
langButton.addEventListener('click', () => { lang = lang === 'pt' ? 'en' : 'pt'; persist(keyLang, lang); applyLang(); applyTheme(); });
themeButton.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; persist(keyTheme, theme); applyTheme(); });
applyLang();
applyTheme();

const filterButtons = document.querySelectorAll('.filter');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(b => { b.classList.toggle('on', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  document.querySelectorAll('.card[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('afonsomachado1892@gmail.com');
    const label = copyButton.querySelector('[data-pt][data-en]');
    label.textContent = lang === 'pt' ? 'Email copiado' : 'Email copied';
    window.setTimeout(() => { label.textContent = label.dataset[lang]; }, 1800);
  } catch { window.location.href = 'mailto:afonsomachado1892@gmail.com'; }
});

const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks, link => document.getElementById(link.getAttribute('href').slice(1)));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-30% 0px -55% 0px' });
sections.forEach(section => section && observer.observe(section));
window.addEventListener('scroll', () => {
  const root = document.documentElement;
  const max = root.scrollHeight - root.clientHeight;
  root.style.setProperty('--progress', (max > 0 ? root.scrollTop / max * 100 : 0) + '%');
}, { passive: true });
