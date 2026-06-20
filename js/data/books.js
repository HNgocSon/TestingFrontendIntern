window.BOOKS = [
  { id: 'lighthouse-keeper', title: 'The Lighthouse Keeper', author: 'Mara Ellison', price: 18, oldPrice: 24, rating: 4.6, category: 'Fiction', badge: 'bestseller', color: 'green', pages: 312, year: 2023, format: 'Paperback', publisher: 'Harbor & Vale', language: 'English', isbn: '978-1-23456-001-2', desc: 'A widowed keeper and a runaway girl share a winter on a remote island, learning what it means to keep a light burning for someone else.' },
  { id: 'ashes-archive', title: 'Ashes in the Archive', author: 'J. P. Crowe', price: 15.5, oldPrice: null, rating: 4.4, category: 'Mystery', color: 'blue', pages: 288, year: 2022, format: 'Paperback', publisher: 'North Quill', language: 'English', isbn: '978-1-23456-002-9', desc: 'A rare-books librarian discovers that a missing folio may be the last clue in a decade-old disappearance.' },
  { id: 'orbital-driftwood', title: 'Orbital Driftwood', author: 'Nadia Vance', price: 21, oldPrice: null, rating: 4.7, category: 'Sci-Fi', badge: 'bestseller', color: 'teal', pages: 410, year: 2024, format: 'Hardcover', publisher: 'Astrolabe', language: 'English', isbn: '978-1-23456-003-6', desc: 'A salvager on the edge of settled space finds a living archive drifting through a debris field.' },
  { id: 'quiet-economy', title: 'The Quiet Economy', author: 'Daniel Roth', price: 19.99, oldPrice: null, rating: 4.2, category: 'Non-fiction', color: 'brown', pages: 264, year: 2021, format: 'Paperback', publisher: 'Civic House', language: 'English', isbn: '978-1-23456-004-3', desc: 'A calm guide to the invisible systems that shape our daily choices, habits and spending.' },
  { id: 'salt-small-gods', title: 'Salt & Other Small Gods', author: 'Imani Okafor', price: 13, oldPrice: null, rating: 4.8, category: 'Poetry', badge: 'new', color: 'rose', pages: 128, year: 2024, format: 'Paperback', publisher: 'Copper Finch', language: 'English', isbn: '978-1-23456-005-0', desc: 'Luminous poems about memory, migration and the sacred rituals hidden in ordinary kitchens.' },
  { id: 'paper-moon', title: 'Pip and the Paper Moon', author: 'Lena Hart', price: 11.5, oldPrice: null, rating: 4.9, category: 'Children', badge: 'bestseller', color: 'gold', pages: 96, year: 2023, format: 'Hardcover', publisher: 'Tiny Lantern', language: 'English', isbn: '978-1-23456-006-7', desc: 'Pip folds a paper moon and sails it across the bedroom sky in this warm bedtime adventure.' },
  { id: 'borrowed-light', title: 'A House of Borrowed Light', author: 'Sofia Marchetti', price: 17.25, oldPrice: 22, rating: 4.5, category: 'Fiction', color: 'purple', pages: 344, year: 2022, format: 'Paperback', publisher: 'Harbor & Vale', language: 'English', isbn: '978-1-23456-007-4', desc: 'Three generations return to a seaside house where every room holds a different version of the truth.' },
  { id: 'hands-soil', title: 'Hands in the Soil', author: 'Greta Lindqvist', price: 23, oldPrice: null, rating: 4.3, category: 'Non-fiction', color: 'green', pages: 240, year: 2024, format: 'Paperback', publisher: 'Meadow Press', language: 'English', isbn: '978-1-23456-008-1', desc: 'A beautifully practical guide to slow gardening, compost, seeds and seasonal care.' },
  { id: 'saltmarsh-murders', title: 'The Saltmarsh Murders', author: 'Edmund Pryce', price: 16, oldPrice: null, rating: 4.1, category: 'Mystery', color: 'red', pages: 352, year: 2020, format: 'Paperback', publisher: 'North Quill', language: 'English', isbn: '978-1-23456-009-8', desc: 'A detective returns to his coastal hometown after a body is found among the reeds.' },
  { id: 'threads-void', title: 'Threads of the Void', author: 'Kai Tanaka', price: 20.5, oldPrice: null, rating: 4.6, category: 'Sci-Fi', badge: 'new', color: 'blue', pages: 390, year: 2024, format: 'Paperback', publisher: 'Astrolabe', language: 'English', isbn: '978-1-23456-010-4', desc: 'A pilot follows a signal stitched through spacetime and finds the cost of coming home.' },
  { id: 'button-thief', title: 'The Button Thief', author: 'Marco Diaz', price: 10.99, oldPrice: null, rating: 4.7, category: 'Children', badge: 'new', color: 'gold', pages: 104, year: 2024, format: 'Hardcover', publisher: 'Tiny Lantern', language: 'English', isbn: '978-1-23456-011-1', desc: 'A tiny thief steals buttons from coats and learns that every button has a story.' },
  { id: 'river-took', title: 'Everything the River Took', author: 'Ada Fenwick', price: 18.75, oldPrice: null, rating: 4.6, category: 'Fiction', badge: 'bestseller', color: 'brown', pages: 318, year: 2023, format: 'Paperback', publisher: 'Harbor & Vale', language: 'English', isbn: '978-1-23456-012-8', desc: 'A family reckons with a flood, a secret map and the years they spent avoiding one another.' },
  { id: 'city-glass', title: 'The City Under Glass', author: 'Rae Morgan', price: 22, oldPrice: null, rating: 4.2, category: 'Sci-Fi', color: 'teal', pages: 420, year: 2022, format: 'Paperback', publisher: 'Astrolabe', language: 'English', isbn: '978-1-23456-013-5', desc: 'A sealed city keeps its citizens safe, until one archivist finds a door that opens outward.' },
  { id: 'small-biographies', title: 'Small Biographies of Rain', author: 'E. M. Vale', price: 14.25, oldPrice: null, rating: 4.3, category: 'Biography', color: 'purple', pages: 198, year: 2021, format: 'Paperback', publisher: 'Copper Finch', language: 'English', isbn: '978-1-23456-014-2', desc: 'A lyrical set of lives told through weather, travel journals and recovered letters.' }
];

window.GENRES = [
  { name: 'Fiction', color: 'var(--brand)', count: 3 },
  { name: 'Mystery', color: '#657ba3', count: 2 },
  { name: 'Sci-Fi', color: '#4f8c91', count: 3 },
  { name: 'Poetry', color: '#a04a73', count: 1 },
  { name: 'Children', color: '#bf8634', count: 2 },
  { name: 'Non-fiction', color: '#715e8b', count: 2 }
];

window.coverColors = {
  green: 'linear-gradient(135deg, #2f6047, #73a07c)',
  blue: 'linear-gradient(135deg, #384a70, #839bc1)',
  rose: 'linear-gradient(135deg, #7c244e, #b56d8b)',
  purple: 'linear-gradient(135deg, #47385e, #7f6a9a)',
  brown: 'linear-gradient(135deg, #633522, #9a694e)',
  gold: 'linear-gradient(135deg, #9f6819, #d8a34a)',
  teal: 'linear-gradient(135deg, #2d646c, #6b9fa2)',
  red: 'linear-gradient(135deg, #883631, #c26055)'
};
