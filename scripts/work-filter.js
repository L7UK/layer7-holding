// Progressive enhancement: filter the statically-rendered case-study cards by
// sector. Chips are rendered server-side; without JS every card stays visible.
// Served as an external file so it satisfies `script-src 'self'`.
const chips = document.querySelectorAll('.work-filter__chip');
const cards = document.querySelectorAll('[data-sector]');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle('work-filter__chip--active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => {
      card.style.display = filter === 'all' || card.dataset.sector === filter ? '' : 'none';
    });
  });
});
