// Bolden nav link of current section
const sections = [...document.getElementsByTagName('section')];
const navLinks = [...document.getElementsByTagName('a')];

window.addEventListener('scroll', () => {
    let currentPosition = window.scrollY + 1;

    for (let i = sections.length - 1; i >= 0; i--) {
        navLinks[i].classList.remove('active');
        if (currentPosition > sections[i].offsetTop && currentPosition < sections[i].offsetTop + sections[i].offsetHeight) {
            navLinks[i].classList.add('active');
        }
    }
});

// Copy email to clipboard
const emailImage = document.getElementById('emailImage');
emailImage.addEventListener('click', () => {
    navigator.clipboard.writeText('dkmshin@uw.edu');
    emailImage.src = 'assets/copied.png';
    setTimeout(function () {
        emailImage.src = 'assets/email.png';
    }, 700);
});
