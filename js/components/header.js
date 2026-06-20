window.App = window.App || {};

App.renderHeader = function renderHeader() {
  const page = App.getPage();
  const root = App.$('#site-header');
  
  if (!root) return;

  root.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="index.html" aria-label="Pages and Co home"><span class="logo-mark">P</span><span>Pages &amp; Co.</span></a>
        <button class="mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
        <nav class="nav" aria-label="Main navigation">
          <a class="${page === 'home' ? 'active' : ''}" href="index.html">Home</a>
          <a class="${page === 'books' ? 'active' : ''}" href="books.html">Shop All</a>
          <a href="books.html?category=Fiction">Fiction</a>
          <a href="books.html?category=Mystery">Mystery</a>
          <a href="books.html?category=Children">Children</a>
          <a href="books.html?category=Poetry">Poetry</a>
        </nav>
        <div class="header-actions">
          <form class="search-box" role="search">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="m21 20.3-4.6-4.6a7.5 7.5 0 1 0-1.2 1.2l4.6 4.6 1.2-1.2ZM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"/></svg>
            <input id="global-search" type="search" placeholder="Search titles, authors..." />
          </form>
          <button class="header-signin" type="button" data-open-login>Sign in</button>
          <a class="bag-link" href="checkout.html">Bag <span class="bag-count" data-bag-count>0</span></a>
        </div>
      </div>
    </header>
  `;
};

App.bindHeaderEvents = function bindHeaderEvents() {
  const mobileToggle = App.$('.mobile-toggle');
  const nav = App.$('.nav');

  mobileToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', String(open));
  });

  App.$('#global-search')?.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    const query = event.currentTarget.value.trim();
    window.location.href = query
      ? `books.html?search=${encodeURIComponent(query)}`
      : 'books.html';
  });
};
