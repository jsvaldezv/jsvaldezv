import {Email} from "https://smtpjs.com/v3/smtp.js";

// DECLARACIONES
const navOpen = document.querySelector('.header-peque');
const navClose = document.querySelector('#close');
const navShow = document.querySelector('.header-links-peque');
const nav = document.querySelector('.header-peque');
const idioma = document.querySelector('.idioma');
const idiomaPhone = document.querySelector('.idiomaPhone');
const form = document.querySelector(".contact_form");
const sendEsp = document.querySelector(".sendEsp")
const sendEn = document.querySelector(".sendEn")
const tMenu = new TimelineMax();
//const arrow = document.querySelector('#arrow');

let show = false;
let idiom = "espanol"

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

  //CORREO
function sendMail(e)
{
  e.preventDefault();

  const name = document.querySelector(".name");
  const subject = document.querySelector(".subject");
  const mail = document.querySelector(".mail");
  const text = document.querySelector(".text");

  console.log(mail.value)

  Email.send({
    SecureToken : "bf4105b9-a183-47ad-b177-5c5e0597aaf9",
    To : 'jsvaldezv@gmail.com',
    From : mail.value,
    Subject : subject.value,
    Body : text.value
  }).then(
    message => alert(message)
  );
}

// LISTENERS
idioma.addEventListener('click', changeIdioma);
idiomaPhone.addEventListener('click', changeIdioma);
form.addEventListener('submit', sendMail);
//sendEsp.addEventListener('submit', sendMail);
//arrow.addEventListener('click', changeSkills)

//7BC6567B20F32C4B02290CC874905D17FC3A
//smtp.elasticemail.com
//2525