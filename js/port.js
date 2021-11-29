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

const idioma = document.querySelector('.idioma');
let idiom = "espanol"

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

idioma.addEventListener('click', changeIdioma)