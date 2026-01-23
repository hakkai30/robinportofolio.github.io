document.addEventListener('DOMContentLoaded', () => {
  const listaConocimientos = document.querySelector('.conocimientos ul');
  const itemsConocimientos = document.querySelectorAll('.conocimientos ul li');
  if (!listaConocimientos || itemsConocimientos.length === 0) return;

  itemsConocimientos.forEach((item, index) => {
    const panel = document.createElement('div');
    panel.classList.add('detalle-conocimiento');

    const textos = [
      'Experiencia resolviendo ejercicios de programación estructurada y algoritmos básicos en C.',
      'Conocimientos de desarrollo con .NET para aplicaciones de escritorio y/o web.',
      'Manejo de maquetación web, estilos CSS, JavaScript básico y PHP para backend sencillo.',
      'Diseño de tablas, consultas SQL y gestión de bases de datos con MySQL y PHPMyAdmin.',
      'Instalación, configuración básica y administración de servidores Windows y Ubuntu.',
      'Comprensión de redes IP y simulación de topologías con Cisco Packet Tracer.',
      'Uso de Git y GitHub para control de versiones y trabajo en equipo.',
      'Experiencia montando entornos locales de desarrollo con XAMPP y MAMP.'
    ];

    panel.textContent = textos[index] || 'Detalle de conocimiento.';
    item.insertAdjacentElement('afterend', panel);

    // Click para abrir/cerrar solo uno
    item.addEventListener('click', () => {
      const abierto = panel.classList.contains('abierto');

      // Cerrar todos
      document.querySelectorAll('.detalle-conocimiento').forEach(p => {
        p.classList.remove('abierto');
      });

      // Abrir si no estaba abierto
      if (!abierto) {
        panel.classList.add('abierto');
      }
    });

    // Hover colores adaptados a oscuro
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
    });
  });
});
