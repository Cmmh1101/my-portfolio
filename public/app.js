// ================ Responsive Menu
var menuBtn = document.getElementsByClassName('menu-btn')

var mobileMenu = document.getElementsByClassName('nav-menu')

// remove nav-menu when X is clicked

var closeBtn = document.getElementsByClassName('close')


var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])

// remove nav-menu when X is clicked

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('hide')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(closeBtn[0])



// End of Responsive Menu

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('nav-menu').style.top = "0";
  } else {
    document.getElementsByClassName('nav-menu').style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


// ================ Menu scoll down hides, scroll up appears

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

//   $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });

// ================ Menu scoll down hides, scroll up appears

// ================ Scroll Reveal

ScrollReveal().reveal('#projects');
ScrollReveal().reveal('#aboutme', { delay: 500 });
ScrollReveal().reveal('#skillset', { delay: 500 });
ScrollReveal().reveal('#contactme', { delay: 500 });