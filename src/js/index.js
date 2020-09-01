const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownMenu = document.getElementById("dropdown-menu");
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");
const usernameField = document.getElementById("username");

let isDropdownVisible = false;
let isHamburgerClicked = false;

dropdownTrigger.onclick = function() {

    if(!isDropdownVisible) {
        dropdownMenu.style.display = "block";   
    }else {
        dropdownMenu.style.display = "none";   
    }
    isDropdownVisible = !isDropdownVisible;
}

hamburger.onclick = function() {
    if(!isHamburgerClicked) {
        navItems.style.display = "flex";
        usernameField.style.display = "block";
    }else {
        navItems.style.display = "none";
        usernameField.style.display = "none";
    }
    isHamburgerClicked = !isHamburgerClicked;
}

//solving bug - if we continuously resize window the display of nav elements becomess none forever

function backToVisible() {
    var w = document.documentElement.clientWidth;
    if(w>775) {
        navItems.style.display = "flex";
        usernameField.style.display = "block";
    }else {
        
        navItems.style.display = "none";
        usernameField.style.display = "none";
    }
}

window.addEventListener("resize", backToVisible);

