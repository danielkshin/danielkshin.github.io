// Load projects
const projects = [
    {
        'name': 'Hankel',
        'description': 'A soccer planner.',
        'link': 'https://danielkshin.github.io/Hankel',
        'image': 'https://raw.githubusercontent.com/danielkshin/Hankel/main/assets/logo.png',
        'languages': ['html', 'css', 'js'],
    },
    {
        'name': 'colors',
        'description': 'A remake of a 2D platformer game I created in my high school sophomore year.',
        'link': 'https://danielkshin.github.io/colors',
        'image': 'https://raw.githubusercontent.com/danielkshin/colors/main/icon.png',
        'languages': ['html', 'css', 'js'],
    },
    {
        'name': 'VOTD Lock Screen Widget',
        'description': 'A Scriptable lock screen widget that displays the YouVersion Bible verse of the day.',
        'link': 'https://www.github.com/danielkshin/VOTD-Lock-Screen-Widget',
        'image': 'https://scriptable.app/assets/appicon.png',
        'languages': ['js'],
    },
]

for (const project of projects) {
    document.getElementById('projects').innerHTML +=
        `<a href="${project.link}" target="_blank">
            <div class="card">
                <img src="${project.image}">
                <p><b>${project.name}</b><br>
                    ${project.description}
                </p>
                <div class="cardIcons">
                <img src="assets/${project.languages.join('.png">\n<img src="assets/')}.png">
                </div>
            </div>
        </a>`;
}

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