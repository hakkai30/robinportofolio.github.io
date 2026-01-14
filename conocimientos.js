document.addEventListener('DOMContentLoaded', () => {
  const listaConocimientos = document.querySelector('.conocimientos ul');
  const itemsConocimientos = document.querySelectorAll('.conocimientos ul li');

  if (!listaConocimientos || itemsConocimientos.length === 0) return;

  itemsConocimientos.forEach((item, index) => {
    const panel = document.createElement('div');
    panel.classList.add('detalle-conocimiento');
    panel.style.maxHeight = '0';
    panel.style.overflow = 'hidden';
    panel.style.transition = 'max-height 0.3s ease';
    panel.style.fontSize = '0.9rem';
    panel.style.color = '#1b4f72'; 

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

    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
      const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

      document.querySelectorAll('.detalle-conocimiento').forEach(p => {
        p.style.maxHeight = '0';
      });

      if (!isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });

    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = '#e0f4e8';
    });

    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
    });
  });
});
