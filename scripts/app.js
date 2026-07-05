// === CV ANDRES - APP.JS ===
// Microinteractions, PDF export, animations

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initSkillBars();
});

// Animate skill bars on scroll
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-bar-fill');
                bars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

// Subtle fade-in animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.timeline-item, .skill-card, .project-card, .sidebar-card, .edu-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// PDF Export
function exportPDF() {
    const element = document.querySelector('.cv-page');
    const pdfBtn = document.querySelector('.pdf-btn');
    if (pdfBtn) pdfBtn.style.display = 'none';

    // Remove animations for clean export
    document.querySelectorAll('.timeline-item, .skill-card, .project-card, .sidebar-card, .edu-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });

    const opt = {
        margin: 0,
        filename: 'CV_Andres_Felipe_Gonzalez.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        if (pdfBtn) pdfBtn.style.display = 'block';
    });
}
