// DECLARACIONES
const navOpen = document.querySelector('.header-peque');
const navClose = document.querySelector('#close');
const navShow = document.querySelector('.header-links-peque');
const nav = document.querySelector('.header-peque');
const idioma = document.querySelector('.idioma');
const idiomaPhone = document.querySelector('.idiomaPhone');
const tMenu = new TimelineMax();
//const arrow = document.querySelector('#arrow');

var userLang = navigator.language || navigator.userLanguage; 
//var langInit = "en";

let idiom = "en"

// MENU RESPONSIVE
if(navOpen)
{
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

// CHANGE IDIOMA
function changeIdioma()
{
  const espa = document.querySelectorAll(".espanol");
  const engl = document.querySelectorAll(".english");

  if (idiom == "espanol")
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'block';
      engl[i].style.display = 'none';
    }

    idiom = "english";
  }
  else
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'none';
      engl[i].style.display = 'block';
    }
    idiom = "espanol";
  }
}

function setInitialLan()
{
  const espa = document.querySelectorAll(".espanol");
  const engl = document.querySelectorAll(".english");

  if (idiom == "es")
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'block';
      engl[i].style.display = 'none';
    }

    idiom = "en";
  }
  else
  {
    for(var i = 0; i < espa.length; i++)
    {
      espa[i].style.display = 'none';
      engl[i].style.display = 'block';
    }
    idiom = "es";
  }
}

function firstStuff()
{
  if (userLang.substr(0,2) == 'es')
    idiom = "es";
  else
    idiom = "en";
  
  setInitialLan();
}

// LISTENERS
window.onload = firstStuff();
idioma.addEventListener('click', changeIdioma);
idiomaPhone.addEventListener('click', changeIdioma);

// CHANGE SKILLS IN HTML
/*function changeSkills()
{
  const techs = document.querySelectorAll(".showTech");
  const other = document.querySelectorAll(".showOther");

  if(!show)
  {
    techs[0].style.display = 'none';
    techs[1].style.display = 'none';
    techs[2].style.display = 'none';
    other[0].style.display = 'block';
    other[1].style.display = 'block';
    other[2].style.display = 'block';
    show = true;
  }
  else
  {
    techs[0].style.display = 'block';
    techs[1].style.display = 'block';
    techs[2].style.display = 'block';
    other[0].style.display = 'none';
    other[1].style.display = 'none';
    other[2].style.display = 'none';
    show = false;
  }
}*/