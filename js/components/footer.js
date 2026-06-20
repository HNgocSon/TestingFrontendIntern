window.App = window.App || {};

App.renderFooter = function renderFooter() {
  const root = App.$('#site-footer');
  if (!root) return;

  root.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main">
        <section>
          <a class="logo footer-logo" href="index.html"><span class="logo-mark">P</span><span>Pages &amp; Co.</span></a>
          <p>An independent bookshop for readers who like to take their time. Open since 1998.</p>
          <div class="socials" aria-label="Social links"><a href="#">In</a><a href="#">X</a><a href="#">f</a></div>
        </section>
        <section><h3>Shop</h3><ul><li><a href="books.html?filter=new">New arrivals</a></li><li><a href="books.html?filter=bestseller">Bestsellers</a></li><li><a href="books.html?category=Fiction">Fiction</a></li><li><a href="books.html?category=Children">Children</a></li><li><a href="#">Gift cards</a></li></ul></section>
        <section><h3>About</h3><ul><li><a href="#">Our story</a></li><li><a href="#">Events</a></li><li><a href="#">Visit the shop</a></li><li><a href="#">Journal</a></li></ul></section>
        <section><h3>Help</h3><ul><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li><li><a href="#">FAQ</a></li><li><a href="#">Contact</a></li></ul></section>
        <section><h3>The reading room</h3><p>One handpicked recommendation in your inbox each week.</p><form class="newsletter-form"><input type="email" placeholder="Email address" aria-label="Email address"><button class="btn btn-gold" type="submit">Join</button></form></section>
      </div>
      <div class="footer-bottom"><span>© 2026 Pages &amp; Co. · Privacy · Terms</span><span>Free shipping on orders over $35</span></div>
    </footer>
  `;
};

App.bindFooterEvents = function bindFooterEvents() {
  App.$$('.newsletter-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      App.toast('Thanks for joining The Reading Room.');
      form.reset();
    });
  });
};
