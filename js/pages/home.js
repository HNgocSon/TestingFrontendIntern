document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
});

function initHomePage() {
  renderGenreCards();
  renderHomeProductSections();
  initHeroSlider();
}

function renderGenreCards() {
  const root = App.$('#genre-grid');
  if (!root) return;

  root.innerHTML = GENRES.map(genre => `
    <a class="genre-card" style="background:${genre.color}" href="books.html?category=${encodeURIComponent(genre.name)}">
      <strong>${genre.name}</strong><span>${genre.count} titles</span>
    </a>
  `).join('');
}

function renderHomeProductSections() {
  App.renderProducts('#featured-grid', BOOKS.slice(0, 5));
  App.renderProducts('#bestseller-grid', BOOKS.filter(book => book.badge === 'bestseller').slice(0, 4));
  App.renderProducts('#new-grid', BOOKS.filter(book => book.badge === 'new').slice(0, 4));
}

function initHeroSlider() {
  const slides = [
    { title: 'Stories for\nslow Sundays', text: 'Quiet, thoughtful reads picked for long mornings and rainy afternoons.', bg: 'linear-gradient(135deg, #6e3a2b 0%, #ad7a43 100%)' },
    { title: 'The shelves\nwe keep\ncoming back to', text: 'Our booksellers pick the titles they can’t stop pressing into customers’ hands.', bg: 'linear-gradient(135deg, #2c5743 0%, #2e5f58 100%)' },
    { title: 'New voices\nworth staying\nup for', text: 'Fresh arrivals from writers bringing brave worlds and warm characters.', bg: 'linear-gradient(135deg, #3a4f78 0%, #6d789d 100%)' }
  ];

  let index = 1;
  const hero = App.$('.hero-slider');
  const title = App.$('#hero-title');
  const text = App.$('#hero-text');
  const dots = App.$$('.dot');

  function renderSlide() {
    title.innerHTML = slides[index].title.replaceAll('\n', '<br />');
    text.textContent = slides[index].text;
    hero.style.background = slides[index].bg;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  App.$('.slider-prev')?.addEventListener('click', () => {
    index = (index + slides.length - 1) % slides.length;
    renderSlide();
  });

  App.$('.slider-next')?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    renderSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      renderSlide();
    });
  });
}
