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

/***********************************************+  ANIMATIONS *******************************************/
const header = document.querySelector(".myHeader")
const social = document.querySelector(".social-icons");
const homeImg = document.querySelector(".home-img");
const mainTitles = document.querySelector(".main-titles");
const namePeque = document.querySelector(".mainName");
const menuPeque = document.querySelector(".header-peque");

const tl = new TimelineMax();

var grande = window.matchMedia("(min-width: 815px)");
var peque = window.matchMedia("(max-width: 815px)");

if(grande.matches){
    tl.fromTo(header,1.5, {height: "100vh"}, {height: "8.5vh", ease: Sine.easeInOut})
      .fromTo(header,1.5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.5")
      .fromTo(header,1.5, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.5");

    tl.fromTo(social,1, {width: "0"}, {width: "30px", ease: Back.easeInOut}, "-=1")
      .fromTo(social,1, {x: "-100px"}, {x: "0px", ease: Back.easeInOut}, "-=1");

    tl.fromTo(homeImg,1, {x: "-800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");

    tl.fromTo(mainTitles,1, {x: "800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");
}
if(peque.matches)
{
    tl.fromTo(header,0.8, {height: "100vh"}, {height: "8.5vh", ease: Power2.easeInOut})
      .fromTo(namePeque,0.8, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.4")
      .fromTo(menuPeque,0.8, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.8");

    tl.fromTo(homeImg,1, {x: "-650px"}, {x: "0px", ease: Back.easeInOut}, "-=0.6");
    
    tl.fromTo(mainTitles,1, {x: "800px"}, {x: "0px", ease: Back.easeInOut}, "-=0.6");
}