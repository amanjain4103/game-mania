const dropdownSnakeOption = document.getElementById("dropdownSnakeOption");
const dropdownMemoryMatchOption = document.getElementById("dropdownMemoryMatchOption");
const dropdownFlappyBirdOption = document.getElementById("dropdownFlappyBirdOption");
const dropdownSpaceInvadorsOption = document.getElementById("dropdownSpaceInvadorsOption");

const cardSnakeOption = document.getElementById("cardSnakeOption");
const cardMemoryMatchOption = document.getElementById("cardMemoryMatchOption");
const cardFlappyBirdOption = document.getElementById("cardFlappyBirdOption");
const cardSpaceInvadorsOption = document.getElementById("cardSpaceInvadorsOption");


dropdownSnakeOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountSnakeGame();
}

dropdownMemoryMatchOption.onclick = function() {
    unmountCardsView();
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountInplaceOfCanvas();
}

dropdownFlappyBirdOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    mountFlappyBirdGame();
}

dropdownSpaceInvadorsOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountFlappyBirdGame();
    mountSpaceInvadorsGame();
}

cardSnakeOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountSnakeGame();
}


cardMemoryMatchOption.onclick = function() {
    unmountCardsView();
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountInplaceOfCanvas();
}


cardFlappyBirdOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    mountFlappyBirdGame();
}


cardSpaceInvadorsOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountFlappyBirdGame();
    mountSpaceInvadorsGame();
}


