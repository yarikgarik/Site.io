document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    let hasLoadedOnce = false;

    // Функция проверки первого входа
    const checkFirstLoad = () => {
        if (!hasLoadedOnce) {
            hasLoadedOnce = true;
            return true;
        }
        return false;
    };
    
    // Скрытие прелоадера при первом посещении
    if (checkFirstLoad()) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.preloader').style.display = 'none';
            }, 2000);
        });
    }
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.animation = 'pulse 1s infinite';
        });

        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.animation = 'none';
        });
    }
});