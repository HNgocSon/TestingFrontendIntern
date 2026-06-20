window.App = window.App || {};

App.renderLoginModal = function renderLoginModal() {
  const root = App.$('#login-modal-root');
  if (!root) return;

  root.innerHTML = `
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="login-title" id="login-modal">
      <section class="login-modal">
        <button class="modal-close" type="button" aria-label="Close sign in" data-close-login>×</button>
        <span class="logo-mark">P</span>
        <h2 id="login-title">Welcome back</h2>
        <p>Sign in to access your bag, orders and wishlist.</p>
        <form id="login-form">
          <div class="form-field"><label for="email">Email</label><input id="email" type="email" placeholder="you@example.com" required></div>
          <div class="form-field"><label for="password">Password</label><input id="password" type="password" placeholder="••••••••" required></div>
          <button class="btn btn-primary btn-full" type="submit">Sign in</button>
        </form>
        <p class="create-account">New here? <a href="#">Create an account</a></p>
      </section>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;
};

App.openLogin = function openLogin() {
  App.$('#login-modal')?.classList.add('open');
  setTimeout(() => App.$('#email')?.focus(), 30);
};

App.closeLogin = function closeLogin() {
  App.$('#login-modal')?.classList.remove('open');
};

App.bindLoginModalEvents = function bindLoginModalEvents() {
  App.$$('[data-open-login]').forEach(btn => btn.addEventListener('click', App.openLogin));
  App.$$('[data-close-login]').forEach(btn => btn.addEventListener('click', App.closeLogin));

  App.$('#login-modal')?.addEventListener('click', event => {
    if (event.target.id === 'login-modal') App.closeLogin();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') App.closeLogin();
  });

  App.$('#login-form')?.addEventListener('submit', event => {
    event.preventDefault();
    App.closeLogin();
    App.toast('Signed in successfully.');
  });
};
