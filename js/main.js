const navOpen = document.querySelector('.header-peque');
const navClose = document.querySelector('#close');
const navShow = document.querySelector('.header-links-peque');
const nav = document.querySelector('.header-peque');

if(navOpen){
    navOpen.addEventListener('click', () =>
    {
        navShow.style.display = 'flex';
        nav.style.display = 'none';
    })
}

if(navClose){
    navClose.addEventListener('click', () =>
    {
        navShow.style.display = 'none';
        nav.style.display = 'block';
    })
}

/*const navLink = document.querySelectorAll('.nav-link');

function linkAction()
{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));*/