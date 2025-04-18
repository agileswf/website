document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica del Slider ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.slider-control.next');
    const prevBtn = document.querySelector('.slider-control.prev');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentSlide = 0;
    let slideInterval;

    // Crear indicadores
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetInterval(); // Reiniciar temporizador al hacer clic manual
        });
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateIndicators(index) {
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    }

    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (slideIndex + slides.length) % slides.length; // Manejo de límites
        slides[currentSlide].classList.add('active');
        updateIndicators(currentSlide);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Event Listeners para botones
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Iniciar slider automático
    startInterval();

    // --- Lógica del Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío real del formulario

        // --- IMPORTANTE ---
        // Esto es solo una simulación para un sitio estático.
        // Para enviar el email realmente, necesitas un backend o un servicio externo
        // como Formspree (formspree.io), Netlify Forms, Getform, etc.

        // Simulación de envío:
        formStatus.textContent = 'Enviando mensaje...';
        formStatus.className = 'form-status'; // Reset class

        // Simula una espera (como si se estuviera enviando)
        setTimeout(() => {
            // Aquí obtendrías los datos del formulario si fueras a enviarlos
            // const formData = new FormData(contactForm);
            // const name = formData.get('name');
            // const email = formData.get('email');
            // ... etc ...

            // Muestra mensaje de éxito (simulado)
            formStatus.textContent = '¡Mensaje enviado con éxito! (Simulación)';
            formStatus.classList.add('success');
            contactForm.reset(); // Limpia el formulario

            // Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);

        }, 1500); // Simula 1.5 segundos de espera
    });

});