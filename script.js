/* script.js */

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;
    hero.style.backgroundPosition = `${x}px ${y}px`;
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .project-card');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
