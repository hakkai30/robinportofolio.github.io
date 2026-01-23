document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.experiencia');
  const articulos = document.querySelectorAll('.experiencia article');
  if (!contenedor || articulos.length === 0) return;

  // Zona de resumen arriba
  const resumen = document.createElement('div');
  resumen.classList.add('resumen-experiencia');
  resumen.textContent = 'Pasa el ratón por cada experiencia para ver más detalles.';
  contenedor.insertBefore(resumen, contenedor.querySelector('article'));

  const textos = [
    'Actualmente trabajando como recepcionista, atendiendo clientes y gestionando reservas en Hotelatelier.',
    'Experiencia como camarero en Pantea Group, trato directo con clientes y trabajo en equipo.',
    'Trabajo como camarero en Monchos, servicio en sala y resolución rápida de incidencias.',
    'Ayudante de camarero en Pantea Group, apoyo en servicio, organización y aprendizaje del sector.',
    'Voluntariado como tutor en Escola Vedruna Àngels, acompañando y ayudando a otros estudiantes.'
  ];

  articulos.forEach((articulo, index) => {
    const puesto = articulo.querySelector('h2');
    const fecha = articulo.querySelector('time');

    articulo.addEventListener('mouseenter', () => {
      articulo.style.transform = 'translateY(-3px)';
      articulo.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.95)';
      articulo.style.backgroundColor = '#02091b';
      articulo.style.borderColor = '#f97316';

      const detalle = textos[index] || 'Experiencia en el sector servicios y atención al cliente.';
      resumen.textContent = `${puesto ? puesto.textContent : ''} — ${fecha ? fecha.textContent : ''}. ${detalle}`;
    });

    articulo.addEventListener('mouseleave', () => {
      articulo.style.transform = 'translateY(0)';
      articulo.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.7)';
      articulo.style.backgroundColor = 'rgba(15, 23, 42, 0.6)';
      articulo.style.borderColor = '#38bdf8';
    });
  });
});
