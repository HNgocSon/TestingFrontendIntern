document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
});

function initCheckoutPage() {
  if (!localStorage.getItem('pagesCoBag')) {
    App.saveBag([{ id: 'lighthouse-keeper', qty: 2 }]);
  }

  App.renderBag();

  App.$('[data-checkout-button]')?.addEventListener('click', App.openLogin);
}
