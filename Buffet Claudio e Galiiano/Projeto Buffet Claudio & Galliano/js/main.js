//efeito no menu do header
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll',toggleNavBar,false);
function toggleNavBar(){
  if(window.pageYOffset > $logo.offsetHeight && $navBar.classList.contains('abs-pos')){
    $navBar.classList.remove('abs-pos');
    $navBar.classList.add('fix-pos');
  }else if(window.pageYOffset <= $logo.offsetHeight && $navBar.classList.contains('fix-pos')){
    $navBar.classList.remove('fix-pos');
    $navBar.classList.add('abs-pos');
  }
}

//links do menu
/*
//para link externo redes sociais
const $extLink = document.querySelectorAll('.ext-link')[0];
$extLink.addEventListener('click',openLink,false);
function openLink(){
  window.open('https://www.youtube.com','_blank');
}
*/

// link para menu interno
  const  $intlink = document.querySelectorAll('.int-link');
  const  $sectArr = document.querySelectorAll('main section');
  $intlink.forEach(function (cur,idx) {
    cur.addEventListener('click', function (){
      window.scrollTo({
        top: $sectArr[idx].offsetTop - $navBar.offsetHeight,
        left:0,
        behavior:'smooth',
      });
    },false)
  })

// menu hamburguer celular

const $menu = document.querySelectorAll('.nav-bar')[0]
      $menu.addEventListener('click', togleMenu,false)
      function togleMenu(){
        $navBar.classList.toggle('nav-bar-opened');
      }

//Carrosel


