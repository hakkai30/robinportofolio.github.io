document.addEventListener('DOMContentLoaded', () => {
  const seccionFormacion = document.querySelector('.formacion');
  const articulos = document.querySelectorAll('.formacion article');
  if (!seccionFormacion || articulos.length === 0) return;

  const descripciones = {
    xavier: '2024 - Actualidad · Grado Superior en Desarrollo de Aplicaciones Web en ETP Xavier.',
    stucom: '2019 - No finalizado · Grado Superior en Administración de Sistemas Informáticos en Red en Stucom.',
    gracia: '2016 - 2019 · Bachillerato Tecnológico en Escola Vedruna Gràcia.'
  };

  // Formación complementaria
  const articuloComplementaria = document.querySelector('article[data-centro="complementaria"]');
  if (articuloComplementaria) {
    const h2 = document.createElement('h2');
    h2.textContent = 'Formación complementaria';
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.textContent = '2020: Xerrada "Cloud Computing" (2h) - Stucom';
    const li2 = document.createElement('li');
    li2.textContent = '2020: Xerrada "Big Data" (2h) - Stucom';
    ul.appendChild(li1);
    ul.appendChild(li2);
    articuloComplementaria.appendChild(h2);
    articuloComplementaria.appendChild(ul);
  }

  // Crear panel interno en cada artículo
  articulos.forEach((articulo) => {
    const id = articulo.dataset.centro;

    const panel = document.createElement('div');
    panel.classList.add('detalle-formacion');
    panel.textContent = (id === 'complementaria')
      ? 'Formación complementaria — Charlas de Cloud Computing y Big Data (2h cada una) en Stucom.'
      : (descripciones[id] || 'Formación relacionada con informática y tecnología.');

    articulo.appendChild(panel);

    articulo.addEventListener('click', () => {
      const abierto = panel.classList.contains('abierto');

      // Cerrar todos los paneles
      document.querySelectorAll('.detalle-formacion').forEach(p => {
        p.classList.remove('abierto');
      });

      // Abrir el del artículo clicado
      if (!abierto) {
        panel.classList.add('abierto');
      }
    });

    articulo.addEventListener('mouseenter', () => {
      if (!panel.classList.contains('abierto')) {
        articulo.style.boxShadow = '0 10px 22px rgba(15, 23, 42, 0.9)';
      }
    });

    articulo.addEventListener('mouseleave', () => {
      if (!panel.classList.contains('abierto')) {
        articulo.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.8)';
      }
    });
  });
});
