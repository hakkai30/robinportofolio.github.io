document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-anim');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    cards.forEach(card => card.classList.add('visible'));
    return;
  }

  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add('visible'), 150 * index);
  });
});
