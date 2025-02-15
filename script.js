document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.portfolio-content > div');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    header.className = '';
    if (currentSection) {
        header.classList.add(currentSection);
    }
});