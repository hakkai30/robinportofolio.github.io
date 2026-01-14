document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.experiencia');
    const articulos = document.querySelectorAll('.experiencia article');
  
    if (!contenedor || articulos.length === 0) return;
  
    // Crear zona de resumen dinámica arriba
    const resumen = document.createElement('div');
    resumen.classList.add('resumen-experiencia');
    resumen.style.marginBottom = '18px';
    resumen.style.padding = '10px 12px';
    resumen.style.borderRadius = '6px';
    resumen.style.backgroundColor = '#fff0cc';
    resumen.style.boxShadow = '0 1px 6px rgba(0,0,0,0.15)';
    resumen.style.fontSize = '0.95rem';
    resumen.textContent = 'Pasa el ratón por cada experiencia para ver más detalles.';
    contenedor.insertBefore(resumen, contenedor.querySelector('article'));
  
    articulos.forEach((articulo, index) => {
      articulo.style.cursor = 'pointer';
      articulo.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease';
  
      const puesto = articulo.querySelector('h2');
      const fecha = articulo.querySelector('time');
  
      articulo.addEventListener('mouseenter', () => {
        // Estilo “activo”
        articulo.style.transform = 'translateY(-3px)';
        articulo.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.18)';
        articulo.style.backgroundColor = '#fff0cc';
  
        // Actualizar resumen
        const textos = [
          'Actualmente trabajando como recepcionista, atendiendo clientes y gestionando reservas en Hotelatelier.',
          'Experiencia como camarero en Pantea Group, trato directo con clientes y trabajo en equipo.',
          'Trabajo como camarero en Monchos, servicio en sala y resolución rápida de incidencias.',
          'Ayudante de camarero en Pantea Group, apoyo en servicio, organización y aprendizaje del sector.',
          'Voluntariado como tutor en Escola Vedruna Àngels, acompañando y ayudando a otros estudiantes.'
        ];
  
        const detalle = textos[index] || 'Experiencia en el sector servicios y atención al cliente.';
        resumen.textContent = `${puesto ? puesto.textContent : ''} — ${fecha ? fecha.textContent : ''}. ${detalle}`;
      });
  
      articulo.addEventListener('mouseleave', () => {
        articulo.style.transform = 'translateY(0)';
        articulo.style.boxShadow = 'none';
        articulo.style.backgroundColor = 'transparent';
      });
    });
  });
  