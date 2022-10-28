const hamburger = document.querySelector(".hamburger");
const frontBox = document.querySelector(".front-box");
const backBox = document.querySelector(".back-box");
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

const notification = document.querySelector("h2");
const searcSection = document.querySelector(".search-section");

hamburger.addEventListener("click",function(){
    frontBox.classList.toggle("front-box-move");
    backBox.classList.toggle("back-box-move")
});

searchIcon.addEventListener("click",function(){
    notification.classList.toggle("notification-display");
    searchBar.classList.toggle("search-bar-expand")
})