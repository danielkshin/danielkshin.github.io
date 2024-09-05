// Bolden nav link of current section
let sections = [...document.getElementsByTagName('section')];
let navLinks = [...document.getElementsByTagName('a')];

window.addEventListener('scroll', () => {
    let currentPosition = window.scrollY + 1;

    for (let i = sections.length - 1; i >= 0; i--) {
        navLinks[i].classList.remove('active');
        if (currentPosition > sections[i].offsetTop && currentPosition < sections[i].offsetTop + sections[i].offsetHeight) {
            navLinks[i].classList.add('active');
        }
    }
});