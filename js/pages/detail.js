document.addEventListener('DOMContentLoaded', () => {
  initDetailPage();
});

function initDetailPage() {
  const id = new URLSearchParams(location.search).get('id') || 'lighthouse-keeper';
  const book = BOOKS.find(item => item.id === id) || BOOKS[0];

  document.title = `Pages & Co. | ${book.title}`;
  App.$('#detail-crumb').textContent = book.title;

  renderBookDetail(book);
  renderRelatedBooks(book);
  bindDetailActions();
}

function renderBookDetail(book) {
  App.$('#detail-layout').innerHTML = `
    <div class="detail-cover" style="background:${coverColors[book.color]}"><strong>${book.title}</strong><span>${book.author}</span></div>
    <article class="detail-info">
      <span class="tag">${book.category}</span>
      <h1>${book.title}</h1>
      <p class="byline">by ${book.author}</p>
      <div class="detail-stats"><span class="rating">${book.rating}</span><span>${book.pages} pages</span><span>${book.year}</span></div>
      <p class="price detail-price">${App.money(book.price)} ${book.oldPrice ? `<span class="old-price">${App.money(book.oldPrice)}</span>` : ''}</p>
      <p class="detail-desc">${book.desc}</p>
      <div class="detail-actions">
        <button class="btn btn-primary" type="button" data-add-to-bag="${book.id}">Add to bag — ${App.money(book.price)}</button>
        <button class="btn btn-outline" type="button" data-wishlist>♡ Wishlist</button>
      </div>
      <dl class="spec-grid">
        <div><dt>Format</dt><dd>${book.format}</dd></div>
        <div><dt>Pages</dt><dd>${book.pages}</dd></div>
        <div><dt>Published</dt><dd>${book.year}</dd></div>
        <div><dt>Publisher</dt><dd>${book.publisher}</dd></div>
        <div><dt>Language</dt><dd>${book.language}</dd></div>
        <div><dt>ISBN</dt><dd>${book.isbn}</dd></div>
      </dl>
    </article>
  `;
}

function renderRelatedBooks(book) {
  const related = BOOKS
    .filter(item => item.category === book.category && item.id !== book.id)
    .slice(0, 2);

  App.renderProducts('#related-grid', related);
}

function bindDetailActions() {
  App.bindProductActions();
  App.$('[data-wishlist]')?.addEventListener('click', () => App.toast('Added to wishlist.'));
}
