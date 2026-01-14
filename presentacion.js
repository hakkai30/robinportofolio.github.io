document.addEventListener('DOMContentLoaded', () => {
    // Efecto máquina de escribir en el primer párrafo
    const intro = document.getElementById('intro-text');
    if (intro) {
      const textoCompleto = intro.textContent.trim();
      intro.textContent = '';
      let index = 0;
  
      const escribir = () => {
        if (index <= textoCompleto.length) {
          intro.textContent = textoCompleto.slice(0, index);
          index++;
          setTimeout(escribir, 25); // velocidad de escritura
        }
      };
  
      escribir();
    }
  
    // Efecto hover extra en iconos de contacto si usas .iconos-contacto .icono
    const iconosContacto = document.querySelectorAll('.iconos-contacto .icono');
    iconosContacto.forEach(icono => {
      icono.addEventListener('mouseenter', () => {
        icono.style.transform = 'scale(1.06) translateY(-3px)';
        icono.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
      });
  
      icono.addEventListener('mouseleave', () => {
        icono.style.transform = 'scale(1) translateY(0)';
        icono.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
      });
    });
  
    // Resaltar bloques de contacto al pasar el ratón
    const contacto = document.getElementById('contacto');
    if (contacto) {
      const bloques = contacto.querySelectorAll('p');
  
      bloques.forEach(b => {
        b.style.transition = 'background-color 0.2s ease, transform 0.2s ease';
  
        b.addEventListener('mouseenter', () => {
          b.style.backgroundColor = '#eaf6ff';
          b.style.transform = 'translateY(-2px)';
        });
  
        b.addEventListener('mouseleave', () => {
          b.style.backgroundColor = 'transparent';
          b.style.transform = 'translateY(0)';
        });
      });
    }
  });
  