// Load projects
const projects = [
    {
        'name': 'Hankel',
        'description': 'A soccer planner.',
        'link': 'https://danielkshin.github.io/Hankel',
        'image': 'hankel',
        'languages': ['html', 'css', 'js'],
    },
    {
        'name': 'colors (remake)',
        'description': 'An original 2D platformer game with a unique mechanic around colors.',
        'link': 'https://danielkshin.github.io/colors',
        'image': 'colors',
        'languages': ['js'],
    },
    {
        'name': 'VOTD Lock Screen Widget',
        'description': 'A Scriptable lock screen widget that displays the YouVersion Bible verse of the day.',
        'link': 'https://www.github.com/danielkshin/VOTD-Lock-Screen-Widget',
        'image': 'widget',
        'languages': ['js'],
    },
    {
        'name': 'colors (original)',
        'description': 'An original 2D platformer game with a unique mechanic around colors.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#colors',
        'image': 'colorsOriginal',
        'languages': ['py'],
    },
    {
        'name': 'whatever this game is called',
        'description': 'An interactive novel game.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#whatever-this-game-is-called-an-interactive-novel',
        'image': 'novel',
        'languages': ['py'],
    },
    {
        'name': 'WORDLE console',
        'description': 'A WORDLE clone faithfully recreated in the console.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#wordle-console',
        'image': 'wordle',
        'languages': ['py'],
    },
    {
        'name': 'jump!',
        'description': 'A 2D recreation of a 3D mini-game.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#jump',
        'image': 'jump',
        'languages': ['py'],
    },
    {
        'name': 'bounce!',
        'description': 'A blatant Flappy Bird clone. Well, sort of.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#bounce',
        'image': 'bounce',
        'languages': ['py'],
    },
    {
        'name': 'omok',
        'description': 'A classic two-player game with the goal of forming a five-in-a-row.',
        'link': 'https://danielkshin.github.io/APCSP-Projects/#omok',
        'image': 'omok',
        'languages': ['py'],
    },
]
const projectsDiv = document.getElementById('projects');
for (const project of projects) {
    projectsDiv.innerHTML +=
        `<a href="${project.link}" target="_blank">
            <div class="card">
                <img src="assets/projects/${project.image}.png">
                <p><b>${project.name}</b><br>
                    ${project.description}
                </p>
                <div class="languages">
                    <img src="assets/languages/${project.languages.join('.png">\n<img src="assets/languages/')}.png">
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
    }, 1000);
});