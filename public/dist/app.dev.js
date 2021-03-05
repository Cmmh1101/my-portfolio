"use strict";

// ================ Responsive Menu
var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('nav-menu');

var clickedBtn = function clickedBtn() {
  mobileMenu[0].classList.toggle('active');
};

menuBtn[0].addEventListener('click', clickedBtn);
console.log(menuBtn[0]); // End of Responsive Menu
// ================ Menu scoll down hides, scroll up appears

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
}); //   $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
// ================ Menu scoll down hides, scroll up appears
// ================ Scroll Reveal

ScrollReveal().reveal('#projects');
ScrollReveal().reveal('#aboutme', {
  delay: 500
});
ScrollReveal().reveal('#skillset', {
  delay: 500
});
ScrollReveal().reveal('#contactme', {
  delay: 500
});
//# sourceMappingURL=app.dev.js.map
