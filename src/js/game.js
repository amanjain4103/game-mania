const dropdownSnakeOption = document.getElementById("dropdownSnakeOption");
const dropdownMemoryMatchOption = document.getElementById("dropdownMemoryMatchOption");

dropdownSnakeOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas();
    mountSnakeGame();
}

dropdownMemoryMatchOption.onclick = function() {
    unmountCardsView();
    unmountCanvas();
    mountInplaceOfCanvas();
}