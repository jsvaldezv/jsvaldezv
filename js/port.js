// ********************************************** DECLARACIONES ********************************************** //
// ANIMACINOES
const carrousel = document.querySelector(".swiper");
const title = document.querySelector(".title"); 
const header = document.querySelector(".myHeader")
var grande = window.matchMedia("(min-width: 815px)");
var peque = window.matchMedia("(max-width: 815px)");
const tl = new TimelineMax();

// LANGUAGE CHANGE
const idiomaPort = document.querySelector('.idioma');
let idiomPort = "espanol"

// ************************************* CAMBIAR IDIOMA ************************************* //
function changeIdioma()
{
  const espa = document.querySelectorAll(".espanol");
  const engl = document.querySelectorAll(".english");

  if (idiomPort == "espanol")
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'block';
      engl[i].style.display = 'none';
    }

    idiomPort = "english";
  }
  else
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'none';
      engl[i].style.display = 'block';
    }
    idiomPort = "espanol";
  }
}

// ************************************* CHECAR TAMAÑO DE PAGINA ************************************* //
if(grande.matches)
{
  tl.fromTo(header,1.5, {height: "100vh"}, {height: "8.5vh", ease: Sine.easeInOut})
    .fromTo(header,1.5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.5")
    .fromTo(header,1.5, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.5");

  tl.fromTo(carrousel,1, {width: "0"}, {width: "80vw", ease: Back.easeInOut}, "-=1")
    .fromTo(carrousel,1, {x: "-100px"}, {x: "0px", ease: Back.easeInOut}, "-=1");

  tl.fromTo(title, 1.1, {x: "800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");
}
if(peque.matches)
{
  tl.fromTo(header,0.8, {height: "100vh"}, {height: "8.5vh", ease: Power2.easeInOut})

  tl.fromTo(title, 1.4, {x: "800px"}, {x: "0px", ease: Circ.easeInOut}, "-=1");

  tl.fromTo(carrousel,1.4, {x: "-500px"}, {x: "0px", ease: Back.easeInOut}, "-=1");
}

// ************************************* LISTENERS ************************************* //
idiomaPort.addEventListener('click', changeIdioma)

// ************************************************ CARROUSEL ********************************************** //
const swiper = new Swiper('.swiper', 
{
  speed: 600,
  parallax: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});