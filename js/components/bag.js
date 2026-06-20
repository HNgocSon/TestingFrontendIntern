window.App = window.App || {};

App.getBag = function getBag() {
  try {
    return JSON.parse(localStorage.getItem('pagesCoBag')) || [];
  } catch {
    return [];
  }
};

App.saveBag = function saveBag(bag) {
  localStorage.setItem('pagesCoBag', JSON.stringify(bag));
  App.updateBagBadge();
};

App.addToBag = function addToBag(id) {
  const bag = App.getBag();
  const item = bag.find(row => row.id === id);

  if (item) item.qty += 1;
  else bag.push({ id, qty: 1 });

  App.saveBag(bag);
  App.toast('Added to bag.');
};

App.updateBagBadge = function updateBagBadge() {
  const count = App.getBag().reduce((sum, item) => sum + item.qty, 0);
  App.$$('[data-bag-count]').forEach(el => {
    el.textContent = count;
  });
};

App.updateQuantity = function updateQuantity(id, delta) {
  const bag = App.getBag().map(item => {
    if (item.id !== id) return item;
    return { ...item, qty: Math.max(1, item.qty + delta) };
  });

  App.saveBag(bag);
  App.renderBag();
};

App.removeFromBag = function removeFromBag(id) {
  App.saveBag(App.getBag().filter(item => item.id !== id));
  App.renderBag();
};

App.renderBag = function renderBag() {
  const bag = App.getBag();
  const root = App.$('#bag-list');
  if (!root) return;

  if (!bag.length) {
    root.innerHTML = `<div class="empty-bag"><h2>Your bag is empty</h2><p>Start with one of our staff favourites.</p><a class="btn btn-primary" href="books.html">Shop books</a></div>`;
  } else {
    root.innerHTML = bag.map(item => {
      const book = BOOKS.find(b => b.id === item.id);
      if (!book) return '';

      return `
        <article class="bag-card" data-bag-item="${book.id}">
          <div class="bag-thumb" style="background:${coverColors[book.color]}"></div>
          <div><h2 class="bag-title">${book.title}</h2><p class="bag-author">${book.author}</p><button class="remove-btn" type="button" data-remove="${book.id}">Remove</button></div>
          <div class="qty-control" aria-label="Quantity for ${book.title}"><button type="button" data-qty="minus" data-id="${book.id}">−</button><span>${item.qty}</span><button type="button" data-qty="plus" data-id="${book.id}">+</button></div>
          <strong class="line-total">${App.money(book.price * item.qty)}</strong>
        </article>
      `;
    }).join('');
  }

  root.onclick = event => {
    const qtyButton = event.target.closest('[data-qty]');
    const removeButton = event.target.closest('[data-remove]');

    if (qtyButton) App.updateQuantity(qtyButton.dataset.id, qtyButton.dataset.qty === 'plus' ? 1 : -1);
    if (removeButton) App.removeFromBag(removeButton.dataset.remove);
  };

  App.updateSummary();
};

App.updateSummary = function updateSummary() {
  const bag = App.getBag();
  const count = bag.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = bag.reduce((sum, item) => {
    const book = BOOKS.find(b => b.id === item.id);
    return sum + (book ? book.price * item.qty : 0);
  }, 0);

  const countEl = App.$('#summary-count');
  const subtotalEl = App.$('#summary-subtotal');
  const totalEl = App.$('#summary-total');

  if (countEl) countEl.textContent = count;
  if (subtotalEl) subtotalEl.textContent = App.money(subtotal);
  if (totalEl) totalEl.textContent = App.money(subtotal);
};
