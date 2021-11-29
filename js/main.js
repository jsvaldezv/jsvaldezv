const navOpen = document.querySelector('.header-peque');
const navClose = document.querySelector('#close');
const navShow = document.querySelector('.header-links-peque');
const nav = document.querySelector('.header-peque');
const arrow = document.querySelector('#arrow');
const idioma = document.querySelector('.idioma');
const tMenu = new TimelineMax();

let show = false;
let idiom = "espanol"

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

function changeCarro()
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
}

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

arrow.addEventListener('click', changeCarro)
idioma.addEventListener('click', changeIdioma)