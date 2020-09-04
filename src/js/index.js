const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownMenu = document.getElementById("dropdown-menu");
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");
const usernameField = document.getElementById("username");
const viewOneContainer = document.getElementById("viewOneContainer");
const viewTwoContainer = document.getElementById("viewTwoContainer");
const showScore = document.getElementById("showScore");

let isDropdownVisible = false;
let isHamburgerClicked = false;
let isCardViewMounted = true;

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

// initially isCardViewMounted = true;

function unmountCardsView() {
    
    if(isCardViewMounted) {
        //unmounting card view
        viewOneContainer.style.display = "none";
        viewTwoContainer.style.display = "flex";
        isCardViewMounted = false;
    }
    
}

function mountCardsView() {
    
    //will execute if its unmounted 
    if(!isCardViewMounted) {
        //mounting card view
        viewOneContainer.style.display = "flex";
        viewTwoContainer.style.display = "none";
        isCardViewMounted = true;
    }
    
    
}

function incrementScore() {
    ++score;
    showScore.innerText = score;
}

function resetScore() {
    showScore.innerText = 0;
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

