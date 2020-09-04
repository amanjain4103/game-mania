const dropdownSnakeOption = document.getElementById("dropdownSnakeOption");
const dropdownMemoryMatchOption = document.getElementById("dropdownMemoryMatchOption");
const dropdownFlappyBirdOption = document.getElementById("dropdownFlappyBirdOption");

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

dropdownFlappyBirdOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas();
    unmountSnakeGame();
    mountCanvas();
    loadFlappyBirdGame();
}