/* ==========================================================================
   SCRIPT.JS - AGROFORTE VERDE
   Lógica de interação, menu mobile, quiz e formulários.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. MENU RESPONSIVO (MOBILE)
    // ==========================================================================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 2. LÓGICA DO QUIZ INTERATIVO
    // ==========================================================================
    const quizButtons = document.querySelectorAll('.quiz-btn');
    const quizResult = document.getElementById('quiz-result');

    if (quizButtons.length > 0 && quizResult) {
        quizButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const isCorrect = e.currentTarget.getAttribute('data-correct') === 'true';
                
                quizResult.style.display = "block";
                
                if (isCorrect) {
                    quizResult.innerText = "🎉 Correto! A tecnologia otimiza os recursos hídricos perfeitamente.";
                    quizResult.style.color = "var(--primary)";
                } else {
                    quizResult.innerText = "❌ Incorreto. O foco da irrigação inteligente é justamente evitar o desperdício de água.";
                    quizResult.style.color = "var(--warning)";
                }
            });
        });
    }

    // ==========================================================================
    // 3. ENVIO DO FORMULÁRIO DE CONTATO
    // ==========================================================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value.trim() : 'Visitante';
            
            alert(`Obrigado pelo contato, ${name}! Seu interesse por um futuro sustentável foi registrado.`);
            
            contactForm.reset();
            
            if (quizResult) {
                quizResult.style.display = "none";
            }
        });
    }

    // ==========================================================================
    // 4. SCROLL SUAVE COM COMPENSAÇÃO DO HEADER FIXO
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

});