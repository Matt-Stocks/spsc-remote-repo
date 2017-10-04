"use strict";

var burger = document.getElementById('burger');
var mainNav = document.getElementById('mainNav');

var showMenu = false;

burger.onmousedown = function(event) {
    showMenu = !showMenu;
    updateMainNav();
  };

function updateMainNav(){
    if (showMenu){
      //mainNav.style.height = 'auto';
      mainNav.classList.remove('mainNavHide');
    } else {
      //mainNav.style.height = 0;
      mainNav.classList.add('mainNavHide');
    }
  }

(function () {
  var toggle = document.querySelector('.nav-toggle');

  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();
