const navOpen = document.querySelector('.header-peque');
const navClose = document.querySelector('#close');
const navShow = document.querySelector('.header-links-peque');
const nav = document.querySelector('.header-peque');

const tMenu = new TimelineMax();

if(navOpen){
    navOpen.addEventListener('click', () =>
    {
        nav.style.display = 'none';

        tMenu.fromTo(navShow,0.5, {opacity: "0"}, {opacity: "1", ease: Power4.easeInOut});
        navShow.style.display = 'flex';
    })
}

if(navClose){
    navClose.addEventListener('click', () =>
    {
        tMenu.fromTo(navShow,0.5, {opacity: "1"}, {opacity: "0", ease: Power4.easeInOut});
        
        setTimeout(()=>{
            navShow.style.display = 'none';
        },500);

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