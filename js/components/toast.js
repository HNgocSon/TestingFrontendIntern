window.App = window.App || {};

App.toast = function toast(message) {
  const el = App.$('#toast');
  if (!el) return;

  el.textContent = message;
  el.classList.add('show');

  clearTimeout(App.toastTimer);
  App.toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
};
