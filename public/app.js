//  scroll down hide navbar - scroll up show navbar 

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

// slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ================ Menu scoll down hides, scroll up appears

// ================ Scroll Reveal

ScrollReveal().reveal('#projects');
ScrollReveal().reveal('#aboutme', { delay: 500 });
ScrollReveal().reveal('#skillset', { delay: 500 });
ScrollReveal().reveal('#contactme', { delay: 500 });