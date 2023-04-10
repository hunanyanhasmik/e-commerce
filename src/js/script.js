"use strict";

const burgerMenu = document.querySelector(".burger__menu");
const dropDown = document.querySelector(".dropDown");



burgerMenu.addEventListener("click", () => {
    dropDown.classList.toggle("active");
    if (dropDown.classList.contains("active")) {
        burgerMenu.classList.add("active");
    } else {
        burgerMenu.classList.remove("active");
    }
});