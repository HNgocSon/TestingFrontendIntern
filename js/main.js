document.addEventListener('DOMContentLoaded', () => {
  App.renderHeader();
  App.renderFooter();
  App.renderLoginModal();

  App.bindHeaderEvents();
  App.bindFooterEvents();
  App.bindLoginModalEvents();

  App.updateBagBadge();

  App.$$('[data-newsletter-trigger]').forEach(btn => {
    btn.addEventListener('click', () => App.toast('Welcome to The Reading Room.'));
  });
});
