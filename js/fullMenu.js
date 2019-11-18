"use strict";

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName("b-menu")[0];
  var burgerContain = document.getElementsByClassName("b-container")[0];
  var Link1 = document.querySelectorAll(".b-link")[0];
  var Link2 = document.querySelectorAll(".b-link")[1];
  var Link3 = document.querySelectorAll(".b-link")[2];
  var Link4 = document.querySelectorAll(".b-link")[3];
  var Link5 = document.querySelectorAll(".b-link")[4];

  var burgerNav = document.getElementsByClassName("b-nav")[0];

  burgerMenu.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );

  Link1.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );

  Link2.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );
  Link3.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );
  Link4.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );
  Link5.addEventListener(
    "click",
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function(el) {
        el.classList.toggle("open");
      });
    },
    false
  );
})();
