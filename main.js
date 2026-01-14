document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para nav si usas href="#seccion"
    const enlacesNav = document.querySelectorAll('nav a');
  
    enlacesNav.forEach(enlace => {
      enlace.addEventListener('click', (e) => {
        const href = enlace.getAttribute('href');
  
        // Solo cancelar si es un enlace interno tipo #presentacion
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  
    // Efecto hover en enlaces del nav (cambio de color)
    enlacesNav.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = '#ff6600';   // color al pasar el ratón
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = '#004080';   // color original del CSS
      });
    });
  
    // Efecto chulo en las tarjetas de trabajos
    const trabajos = document.querySelectorAll('.trabajo');
  
    trabajos.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.18)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.07)';
      });
    });
  
    // Cambio de color en enlaces dentro de los trabajos
    const enlacesProyectos = document.querySelectorAll('.trabajo a');
  
    enlacesProyectos.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = '#ff6600';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = '#1995d7';   // color original de .trabajo a
      });
    });
  });
  
