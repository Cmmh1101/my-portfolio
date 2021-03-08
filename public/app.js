/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        console.log('scrolling up')
    } else {
        document.getElementById("nav").style.top = "-100px";
        console.log('scrolling down')
    }
    prevScrollpos = currentScrollPos;
    
}

// ================ Responsive Menu
const menuBtn = document.getElementsByClassName('menu-btn')

const mobileMenu = document.getElementsByClassName('nav-menu')

const closeMenu = document.getElementsByClassName('close')



const clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

const clickedX = function() {
  mobileMenu[0].classList.remove('active')
}

closeMenu[0].addEventListener('click', clickedX)

// End of Responsive Menu

// ================ tooltip

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   });

//   $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });

// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip();
// });

// ================ Menu scoll down hides, scroll up appears

// ================ Scroll Reveal

ScrollReveal().reveal('#projects');
ScrollReveal().reveal('#aboutme', { delay: 500 });
ScrollReveal().reveal('#skillset', { delay: 500 });
ScrollReveal().reveal('#contactme', { delay: 500 });