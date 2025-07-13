
const Localiser = (async() => {
  const language = navigator?.language?.split('-')[0] || 'en';
  const {default:list} = await import(`./${language}.js`);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = list[key];
    });
})();


export {Localiser}