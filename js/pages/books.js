document.addEventListener('DOMContentLoaded', () => {
  initBooksPage();
});

function initBooksPage() {
  const params = new URLSearchParams(location.search);
  let activeCategory = params.get('category') || 'All';
  const initialFilter = params.get('filter');
  const initialSearch = params.get('search') || '';

  if (initialSearch) App.$('#global-search').value = initialSearch;

  renderCategoryPills(activeCategory, category => {
    activeCategory = category;
    updateCatalog(activeCategory, initialFilter, initialSearch);
  });

  App.$('#sort-select').addEventListener('change', () => updateCatalog(activeCategory, initialFilter, initialSearch));
  App.$('#global-search')?.addEventListener('input', () => updateCatalog(activeCategory, initialFilter, initialSearch));

  updateCatalog(activeCategory, initialFilter, initialSearch);
}

function renderCategoryPills(activeCategory, onChange) {
  const categories = ['All', 'Fiction', 'Mystery', 'Sci-Fi', 'Non-fiction', 'Poetry', 'Children', 'Biography'];
  const root = App.$('#filter-pills');

  root.innerHTML = categories.map(cat => `
    <button class="filter-pill ${cat === activeCategory ? 'active' : ''}" type="button" data-category="${cat}">${cat}</button>
  `).join('');

  root.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;

    App.$$('.filter-pill', root).forEach(pill => pill.classList.toggle('active', pill === button));
    onChange(button.dataset.category);
  });
}

function updateCatalog(activeCategory, initialFilter, initialSearch) {
  const sort = App.$('#sort-select').value;
  const searchValue = App.$('#global-search')?.value.trim().toLowerCase() || initialSearch.toLowerCase();
  let books = [...BOOKS];

  if (activeCategory !== 'All') books = books.filter(book => book.category === activeCategory);
  if (initialFilter === 'bestseller') books = books.filter(book => book.badge === 'bestseller');
  if (initialFilter === 'new') books = books.filter(book => book.badge === 'new');
  if (searchValue) {
    books = books.filter(book => `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(searchValue));
  }

  sortBooks(books, sort);

  App.$('#book-count').textContent = books.length;
  App.$('#empty-state').hidden = books.length > 0;
  App.renderProducts('#catalog-grid', books);
}

function sortBooks(books, sort) {
  if (sort === 'price-low') books.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') books.sort((a, b) => b.price - a.price);
  if (sort === 'rating') books.sort((a, b) => b.rating - a.rating);
  if (sort === 'newest') books.sort((a, b) => b.year - a.year);
}
