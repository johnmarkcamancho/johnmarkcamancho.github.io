// ===========================
// PROJECT DATA
// ===========================
const projects = [];

// ===========================
// NAVIGATION
// ===========================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===========================
// PROJECTS
// ===========================
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="icon-btn" title="View on GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        ${project.live !== '#' ? `
                        <a href="${project.live}" target="_blank" class="icon-btn" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        ` : ''}
                    </div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                
                <div class="project-stats">
                    <div class="stat">
                        <i class="fas fa-star"></i>
                        <span>Featured</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-code"></i>
                        <span>${project.tech.length} Technologies</span>
                    </div>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show success message (in a real app, this would send to a backend)
    showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');

    // Reset form
    contactForm.reset();

    // Log to console (for demo purposes)
    console.log('Form submission:', { name, email, message });
});

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(type, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 400px;
    `;

    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;

    // Add animation keyframes if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ===========================
// INTERSECTION OBSERVER
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// ===========================
// CURSOR EFFECT (OPTIONAL)
// ===========================
let cursor = null;
let cursorFollower = null;

// Only add cursor effect on desktop
if (window.innerWidth > 768) {
    cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 10px;
        height: 10px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;

    cursorFollower = document.createElement('div');
    cursorFollower.style.cssText = `
        width: 40px;
        height: 40px;
        border: 1px solid var(--primary);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0.5;
        display: none;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursorFollower.style.display = 'block';

        cursor.style.left = e.clientX - 5 + 'px';
        cursor.style.top = e.clientY - 5 + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 20 + 'px';
            cursorFollower.style.top = e.clientY - 20 + 'px';
        }, 100);
    });

    // Scale cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .skill-card');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// ===========================
// TYPING EFFECT (OPTIONAL)
// ===========================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===========================
// PARTICLE BACKGROUND (OPTIONAL)
// ===========================
function createParticles() {
    const particleCount = 50;
    const particles = document.createElement('div');
    particles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5};
            animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
        `;
        particles.appendChild(particle);
    }

    // Add float animation if not already added
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                }
                50% {
                    transform: translateY(-20px) translateX(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(particles);
}

// ===========================
// INITIALIZE
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Render projects
    renderProjects();

    // Optional: Add particles (comment out if too much)
    // createParticles();

    // Log welcome message
    console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #8b5cf6; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #ec4899;');
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all project images after they're rendered
    setTimeout(() => {
        document.querySelectorAll('.project-image').forEach(img => {
            imageObserver.observe(img);
        });
    }, 100);
}

// ===========================
// EASTER EGG
// ===========================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        showNotification('success', '🎮 Konami Code activated! You found the easter egg!');
        document.body.style.animation = 'rainbow 2s ease-in-out';

        // Add rainbow animation
        if (!document.querySelector('#rainbow-styles')) {
            const style = document.createElement('style');
            style.id = 'rainbow-styles';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// ===========================
// IMAGE MODAL FUNCTIONS
// ===========================
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = src;
        // Disable scrolling when modal is open
        document.body.style.overflow = "hidden";

        // Add zoomed class for animation
        setTimeout(() => {
            modalImg.style.transform = "scale(1)";
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
        // Enable scrolling when modal is closed
        document.body.style.overflow = "auto";
    }
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Attach modal to project hero image
document.addEventListener('DOMContentLoaded', () => {
    const projectImg = document.querySelector('img.project-hero-img');
    if (projectImg) {
        projectImg.classList.add('clickable-image');
        projectImg.title = "Click to enlarge";
        projectImg.addEventListener('click', () => {
            openModal(projectImg.src);
        });
    }
});
