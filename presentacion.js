document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro-text');
  if (!intro) return;

  const textoCompleto = intro.textContent.trim();
  intro.textContent = '';
  let index = 0;

  const escribir = () => {
    if (index <= textoCompleto.length) {
      intro.textContent = textoCompleto.slice(0, index);
      index++;
      setTimeout(escribir, 25);
    }
  };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    intro.textContent = textoCompleto;
    return;
  }

  escribir();
});
