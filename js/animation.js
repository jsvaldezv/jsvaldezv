/**********************************************  ANIMATIONS HEADER AND MAIN *******************************************/
// MAIN PART
const header = document.querySelector(".myHeader")
const social = document.querySelector(".social-icons");
const homeImg = document.querySelector(".home-img");
const mainTitles = document.querySelector(".main-titles");
const namePeque = document.querySelector(".mainName");
const menuPeque = document.querySelector(".header-peque");

const form1 = document.querySelector(".effect-1");
const form2 = document.querySelector(".effect-2");
const form4 = document.querySelector(".effect-4");
const form5 = document.querySelector(".effect-5");

// LIBRARY ANIMATION 
const tl = new TimelineMax();

// WINDOW SIZE
var grande = window.matchMedia("(min-width: 815px)");
var peque = window.matchMedia("(max-width: 815px)");

if(grande.matches)
{
    tl.fromTo(header,1.5, {height: "100vh"}, {height: "8.5vh", ease: Sine.easeInOut})
      .fromTo(header,1.5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.5")
      .fromTo(header,1.5, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.5");

    tl.fromTo(social,1, {width: "0"}, {width: "30px", ease: Back.easeInOut}, "-=1")
      .fromTo(social,1, {x: "-100px"}, {x: "0px", ease: Back.easeInOut}, "-=1");

    tl.fromTo(homeImg,1, {x: "-800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");

    tl.fromTo(mainTitles,1, {x: "800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");

    tl.fromTo(form1,1, {right: "-100px"}, {right: "100px", ease: Circ.easeInOut}, "-=1")
      .fromTo(form2,1, {left: "-100px"}, {left: "100px", ease: Circ.easeInOut}, "-=1")
      .fromTo(form4,1, {left: "-100px"}, {left: "100px", ease: Power2.easeInOut}, "-=0.9")
      .fromTo(form5,1, {right: "-100px"}, {right: "100px", ease: Circ.easeInOut}, "-=0.9");
}

if(peque.matches)
{
    tl.fromTo(header,0.8, {height: "100vh"}, {height: "8.5vh", ease: Power2.easeInOut})
      .fromTo(namePeque,0.8, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.4")
      .fromTo(menuPeque,0.8, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.8");

    tl.fromTo(homeImg,1, {x: "-650px"}, {x: "0px", ease: Back.easeInOut}, "-=0.6");
    
    tl.fromTo(mainTitles,1, {x: "800px"}, {x: "0px", ease: Back.easeInOut}, "-=0.6");

    tl.fromTo(form1,1, {right: "-100px"}, {right: "50px", ease: Circ.easeInOut}, "-=1")
      .fromTo(form2,1, {left: "-100px"}, {left: "50px", ease: Circ.easeInOut}, "-=1")
      .fromTo(form4,1, {left: "-100px"}, {left: "30px", ease: Power2.easeInOut}, "-=0.9")
      .fromTo(form5,1, {right: "-100px"}, {right: "25px", ease: Circ.easeInOut}, "-=0.9");
}