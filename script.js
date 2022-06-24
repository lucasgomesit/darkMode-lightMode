function changeMode() {
    changeClass();
    changeText();
};

function changeClass() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
};

function changeText() {
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
    } else {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
    };
};

const darkModeClass = "dark-mode";
const darkMode = "Dark Mode";
const lightMode = "Light Mode";

const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);