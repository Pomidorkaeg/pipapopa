document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const menuButton = document.querySelector('.menu-button');
    const navButtons = document.querySelector('.nav-buttons');
  
    // Прокрутка вверх
    window.onscroll = () => {
      scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
  
    scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // Открытие/закрытие кнопок по клику на кнопку с логотипом
    menuButton.onclick = () => {
      navButtons.classList.toggle('active');
    };
  
    // Закрытие кнопок при клике вне их
    window.onclick = (e) => {
      if (!e.target.closest('.header') && navButtons.classList.contains('active')) {
        navButtons.classList.remove('active');
      }
      if (e.target.classList.contains('modal-overlay')) closeModal();
    };
  
    document.getElementById('whyUsButton').onclick = () => {
      document.getElementById('why-us-section').scrollIntoView({ behavior: 'smooth' });
      navButtons.classList.remove('active');
    };
  
    document.getElementById('downloadButton').onclick = () => {
      window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    };
  
    document.getElementById('openSiteButton').onclick = () => {
      window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    };
  
    const openModal = (modalId) => {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
        modal.style.display = 'none';
      });
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      setTimeout(() => {
        modal.classList.add('active');
        document.querySelector('.modal-overlay').style.display = 'block';
        setTimeout(() => document.querySelector('.modal-overlay').classList.add('active'), 10);
      }, 10);
      navButtons.classList.remove('active');
    };
  
    const closeModal = () => {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
      });
      document.querySelector('.modal-overlay').classList.remove('active');
      setTimeout(() => document.querySelector('.modal-overlay').style.display = 'none', 300);
    };
  
    document.getElementById('instructionButton').onclick = () => openModal('instructionModal');
    document.getElementById('socialMediaButton').onclick = () => openModal('socialMediaModal');
    document.getElementById('videoInstructionButton').onclick = () => {
      window.open('https://youtu.be/5NHAoFDQQJY', '_blank');
      navButtons.classList.remove('active');
    };
  
    document.querySelectorAll('.close').forEach(btn => btn.onclick = closeModal);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.why-us-point, .image-gallery img').forEach(el => observer.observe(el));
  
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  });