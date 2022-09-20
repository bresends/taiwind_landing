const btn = document.querySelector('#menu-btn');
const closedIcon = document.querySelector('#closed-icon');
const hamburguerIcon = document.querySelector('#hamburger-icon');
const nav = document.querySelector('#menu');

closedIcon.classList.add('closed');
nav.classList.add('closed');

btn.addEventListener('click', () => {
    nav.classList.toggle('closed');
    hamburguerIcon.classList.toggle('closed');
    closedIcon.classList.toggle('closed');
});
