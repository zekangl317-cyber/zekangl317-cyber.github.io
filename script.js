(() => {
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll('[data-lang]')];
  const query = new URLSearchParams(window.location.search).get('lang');
  const stored = localStorage.getItem('portfolio-language');
  const preferred = query === 'en' || query === 'zh' ? query : stored === 'en' || stored === 'zh' ? stored : 'zh';

  function setLanguage(language) {
    const value = language === 'en' ? 'en' : 'zh';
    root.lang = value === 'en' ? 'en' : 'zh-CN';
    document.title = value === 'en' ? document.body.dataset.titleEn : document.body.dataset.titleZh;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === value)));
    localStorage.setItem('portfolio-language', value);
  }

  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  setLanguage(preferred);
})();
