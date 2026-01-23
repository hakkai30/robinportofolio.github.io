document.addEventListener('DOMContentLoaded', () => {
  // Animación de aparición secuencial de las tarjetas
  const cards = document.querySelectorAll('.card-anim');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 150 * index);
  });

  // Hover extra en tarjetas (se suma al CSS)
  const trabajos = document.querySelectorAll('.trabajo');

  trabajos.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 16px 36px rgba(15, 23, 42, 0.9)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 10px 26px rgba(15, 23, 42, 0.75)';
    });
  });

  // Cambio de color en enlaces de proyectos para resaltar sobre el fondo oscuro
  const enlacesProyectos = document.querySelectorAll('.trabajo a');

  enlacesProyectos.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#f97316';
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = '#7dd3fc';
    });
  });
});
