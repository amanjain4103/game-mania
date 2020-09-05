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
    incrementGamesPlayed();
}

dropdownMemoryMatchOption.onclick = function() {
    unmountCardsView();
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountInplaceOfCanvas();
    incrementGamesPlayed();
}

dropdownFlappyBirdOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    mountFlappyBirdGame();
    incrementGamesPlayed();
}

dropdownSpaceInvadorsOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountFlappyBirdGame();
    mountSpaceInvadorsGame();
    incrementGamesPlayed();
}

cardSnakeOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountSnakeGame();
    incrementGamesPlayed();
}


cardMemoryMatchOption.onclick = function() {
    unmountCardsView();
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    unmountFlappyBirdGame();
    mountInplaceOfCanvas();
    incrementGamesPlayed();
}


cardFlappyBirdOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountSpaceInvadorsGame();
    mountFlappyBirdGame();
    incrementGamesPlayed();
}


cardSpaceInvadorsOption.onclick = function() {
    unmountCardsView();
    unmountInplaceOfCanvas(); //unmounting memory match game
    unmountSnakeGame();
    unmountFlappyBirdGame();
    mountSpaceInvadorsGame();
    incrementGamesPlayed();
}


