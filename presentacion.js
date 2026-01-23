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

  // Efecto hover extra en iconos grandes de contacto
  const iconosContacto = document.querySelectorAll('.iconos-contacto .icono');
  iconosContacto.forEach(icono => {
    icono.addEventListener('mouseenter', () => {
      icono.style.transform = 'scale(1.06) translateY(-3px)';
      icono.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 1)';
      icono.style.backgroundColor = '#02091b';
    });

    icono.addEventListener('mouseleave', () => {
      icono.style.transform = 'scale(1) translateY(0)';
      icono.style.boxShadow = '0 6px 18px rgba(15, 23, 42, 0.9)';
      icono.style.backgroundColor = '#020617';
    });
  });

  // Resaltar bloques de contacto al pasar el ratón
  const contacto = document.getElementById('contacto');
  if (contacto) {
    const bloques = contacto.querySelectorAll('p');
    bloques.forEach(b => {
      b.addEventListener('mouseenter', () => {
        b.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
        b.style.transform = 'translateY(-2px)';
      });

      b.addEventListener('mouseleave', () => {
        b.style.backgroundColor = 'transparent';
        b.style.transform = 'translateY(0)';
      });
    });
  }
});
