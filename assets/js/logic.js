const bodyEl = document.querySelector('body')
const headerEl = document.querySelector('#header');
const mainEl = document.querySelector('#main');
const footerEl = document.querySelector('#footer');
const toggle = document.querySelector('#toggle')

let darkMode = true;

// Toggles between dark and light modes
toggle.addEventListener('click', function () {
   if (darkMode) {
        headerEl.classList.replace('light','dark');
        mainEl.classList.replace('light','dark');
        footerEl.classList.replace('light','dark');
        bodyEl.classList.replace('light-green','dark-green');
        darkMode = false;
    } else {
        headerEl.classList.replace('dark','light');
        mainEl.classList.replace('dark','light');
        footerEl.classList.replace('dark','light');
        bodyEl.classList.replace('dark-green','light-green');
        darkMode = true;
    } 
});

