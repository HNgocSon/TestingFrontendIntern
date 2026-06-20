window.App = window.App || {};

App.bookCard = function bookCard(book) {
  const badge = book.badge
    ? `<span class="badge ${book.badge === 'new' ? 'new' : ''}">${book.badge === 'new' ? 'New' : 'Bestseller'}</span>`
    : '';

  return `
    <article class="book-card">
      <a href="detail.html?id=${book.id}" aria-label="View ${book.title}">
        <div class="book-cover" style="background:${coverColors[book.color]}">
          ${badge}
          <div class="cover-text"><span class="cover-title">${book.title}</span><span class="cover-author">${book.author}</span></div>
        </div>
        <strong class="card-title">${book.title}</strong>
      </a>
      <p class="card-author">${book.author}</p>
      <div class="card-meta"><span class="price">${App.money(book.price)}${book.oldPrice ? `<span class="old-price">${App.money(book.oldPrice)}</span>` : ''}</span><span class="rating">${book.rating}</span></div>
    </article>
  `;
};

App.renderProducts = function renderProducts(selector, products) {
  const root = App.$(selector);
  if (!root) return;

  root.innerHTML = products.map(App.bookCard).join('');
  App.bindProductActions(root);
};

App.bindProductActions = function bindProductActions(scope = document) {
  App.$$('[data-add-to-bag]', scope).forEach(btn => {
    btn.addEventListener('click', event => {
      const id = event.currentTarget.dataset.addToBag;
      App.addToBag(id);
    });
  });
};
