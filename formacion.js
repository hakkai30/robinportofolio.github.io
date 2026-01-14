document.addEventListener('DOMContentLoaded', () => {
    const seccionFormacion = document.querySelector('.formacion');
    const articulos = document.querySelectorAll('.formacion article');
  
    if (!seccionFormacion || articulos.length === 0) return;
  
    // Bloque de resumen arriba
    const resumen = document.createElement('div');
    resumen.classList.add('resumen-formacion');
    resumen.style.marginBottom = '18px';
    resumen.style.padding = '10px 12px';
    resumen.style.borderRadius = '6px';
    resumen.style.backgroundColor = '#e8f0fe';
    resumen.style.boxShadow = '0 1px 6px rgba(0,0,0,0.12)';
    resumen.style.fontSize = '0.95rem';
    resumen.textContent = 'Haz clic en cada formación para ver más detalles.';
    seccionFormacion.insertBefore(resumen, seccionFormacion.querySelector('nav').nextElementSibling);
  
    const descripciones = {
      xavier: '2024 - Actualidad · Grado Superior en Desarrollo de Aplicaciones Web en ETP Xavier.',
      stucom: '2019 - No finalizado · Grado Superior en Administración de Sistemas Informáticos en Red en Stucom.',
      gracia: '2016 - 2019 · Bachillerato Tecnológico en Escola Vedruna Gràcia.'
    };
  
    const articuloComplementaria = document.querySelector('article[data-centro="complementaria"]');
    if (articuloComplementaria) {
      const h2 = document.createElement('h2');
      h2.textContent = 'Formación Complementaria';
  
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
  
    articulos.forEach((articulo) => {
      articulo.style.marginBottom = '25px';
      articulo.style.backgroundColor = '#e8f0fe';
      articulo.style.padding = '10px';
      articulo.style.borderRadius = '5px';
      articulo.style.cursor = 'pointer';
      articulo.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease';
  
      const id = articulo.dataset.centro;
  
      articulo.addEventListener('click', () => {
        articulos.forEach(a => {
          a.style.transform = 'translateY(0)';
          a.style.boxShadow = 'none';
          a.style.backgroundColor = '#e8f0fe';
        });
  
        articulo.style.transform = 'translateY(-3px)';
        articulo.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.18)';
        articulo.style.backgroundColor = '#d6e4ff';
  
        if (id === 'complementaria') {
          resumen.textContent = 'Formación Complementaria — Charlas de Cloud Computing y Big Data (2h cada una) en Stucom.';
        } else {
          const titulo = articulo.querySelector('h2');
          const detalle = descripciones[id] || 'Formación relacionada con informática y tecnología.';
          resumen.textContent = `${titulo ? titulo.textContent : 'Formación'} — ${detalle}`;
        }
      });
  
      articulo.addEventListener('mouseenter', () => {
        articulo.style.boxShadow = '0 4px 10px rgba(0,0,0,0.16)';
      });
  
      articulo.addEventListener('mouseleave', () => {
        if (articulo.style.transform !== 'translateY(-3px)') {
          articulo.style.boxShadow = 'none';
        }
      });
    });
  });
  