// ===========================
// Smooth Scroll Animations (AOS)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS-like animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach(el => animateOnScroll.observe(el));

    // ===========================
    // Navbar Scroll Effect
    // ===========================

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = 'var(--shadow-lg)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Mobile Menu Toggle
    // ===========================

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ===========================
    // Counter Animation for Stats
    // ===========================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    const text = statNumber.textContent.trim();
                    const number = parseInt(text.match(/\d+/));
                    if (!isNaN(number)) {
                        statNumber.textContent = '0';
                        animateCounter(statNumber, number);
                        // Add back non-numeric parts
                        setTimeout(() => {
                            statNumber.textContent = text;
                        }, 2000);
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });

    // ===========================
    // Parallax Effect for Hero Background
    // ===========================

    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ===========================
    // Button Ripple Effect
    // ===========================

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ===========================
    // Scroll Progress Indicator
    // ===========================

    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        z-index: 9999;
        transition: width 0.1s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ===========================
    // Card Tilt Effect (3D hover)
    // ===========================

    document.querySelectorAll('.problem-card, .result-card, .benefit-card, .bonus-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ===========================
    // Lazy Loading for Images (if any are added)
    // ===========================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===========================
    // WhatsApp Button Floating Effect
    // ===========================

    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.style.transition = 'all 0.3s ease';
        
        setInterval(() => {
            button.style.transform = 'scale(1.05)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    });

    // ===========================
    // Form Validation (if forms are added later)
    // ===========================

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--danger-color)';
                } else {
                    input.style.borderColor = 'var(--success-color)';
                }
            });
            
            if (isValid) {
                // Handle form submission
                console.log('Form is valid and ready to submit');
            }
        });
    });

    // ===========================
    // Detect when user is about to leave (Exit Intent)
    // ===========================

    let exitIntentShown = false;

    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true;
            // Could show a modal or special offer here
            console.log('User is about to leave - could show exit intent popup');
        }
    });

    // ===========================
    // Performance: Reduce animations on low-end devices
    // ===========================

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
        const reducedStyle = document.createElement('style');
        reducedStyle.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(reducedStyle);
    }

    // ===========================
    // Accessibility: Focus management
    // ===========================

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation *:focus {
            outline: 3px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);

    // ===========================
    // Console Message
    // ===========================

    console.log('%c🎓 MBA for Kids', 'font-size: 24px; color: #2563eb; font-weight: bold;');
    console.log('%cГодовая программа по бизнесу и IT для детей 11-14 лет', 'font-size: 14px; color: #4b5563;');
    console.log('%cWhatsApp: +1 929 628 8273', 'font-size: 12px; color: #10b981;');
    console.log('%cgocoding.tech', 'font-size: 12px; color: #f97316;');

    // ===========================
    // Accordion for How It Works Section
    // ===========================
    
    const accordionToggles = document.querySelectorAll('.step-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const stepCard = this.closest('.step-card');
            const collapseContent = stepCard.querySelector('.step-collapse');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Get translated texts
            const seeDetailsText = window.getTranslation ? window.getTranslation('phases.seeDetails') : 'See Details';
            const hideDetailsText = window.getTranslation ? window.getTranslation('phases.hideDetails') : 'Hide Details';
            
            // Close all other accordions
            accordionToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.querySelector('span').textContent = seeDetailsText;
                    const otherCollapse = otherToggle.closest('.step-card').querySelector('.step-collapse');
                    otherCollapse.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                this.querySelector('span').textContent = seeDetailsText;
                collapseContent.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('span').textContent = hideDetailsText;
                collapseContent.classList.add('active');
            }
        });
    });
    
    // Benefits Section Accordion Toggle
    const benefitToggles = document.querySelectorAll('.benefit-toggle');
    
    benefitToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const benefitCard = this.closest('.benefit-card');
            const collapseContent = benefitCard.querySelector('.benefit-collapse');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Get translated texts
            const seeDetailsText = window.getTranslation ? window.getTranslation('phases.seeDetails') : 'See Details';
            const hideDetailsText = window.getTranslation ? window.getTranslation('phases.hideDetails') : 'Hide Details';
            
            // Toggle current benefit card
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                this.querySelector('span').textContent = seeDetailsText;
                collapseContent.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                this.querySelector('span').textContent = hideDetailsText;
                collapseContent.classList.add('active');
            }
        });
    });

    // Bonuses Section Accordion Toggle
    const bonusToggles = document.querySelectorAll('.bonus-toggle');
    
    bonusToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const bonusCard = this.closest('.bonus-card');
            const collapseContent = bonusCard.querySelector('.bonus-collapse');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Get translated texts
            const learnMoreText = window.getTranslation ? window.getTranslation('bonuses.learnMore') : 'Learn More';
            const showLessText = window.getTranslation ? window.getTranslation('bonuses.showLess') : 'Show Less';
            
            // Toggle current bonus card
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                this.innerHTML = `${learnMoreText} <i class="fas fa-chevron-down"></i>`;
                collapseContent.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                this.innerHTML = `${showLessText} <i class="fas fa-chevron-up"></i>`;
                collapseContent.classList.add('active');
            }
        });
    });

});

// ===========================
// Page Load Performance
// ===========================

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Hide loading spinner if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});