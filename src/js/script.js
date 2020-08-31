const canvas = document.getElementById("canvas");

//making canvas responsive
//17*32
canvas.width = 544;
canvas.height = 544;

if(window.innerWidth <= 600 ) {
    //17*20
    canvas.width = 340;
    canvas.height = 340;
}

//setting smallest unit 
let box = canvas.width/17; //since both height and width are always same

//painting the snake board
//green = #7ED957, more lighter green = #C9E265
const ctx = canvas.getContext('2d');

function paintSnakeBoard() {

    let xForColorPaint=0,yForColorPaint=0;
    let colorDecide = 0;
    for(let i=0;i<17;i++) {
        
        for(let j=0;j<17;j++) {
            
            if(colorDecide === 0) {
                ctx.fillStyle = "#7ED957";
                ctx.fillRect(xForColorPaint,yForColorPaint,box,box);
                ++colorDecide;
            }else {
                --colorDecide;
                ctx.fillStyle = "#C9E265";
                ctx.fillRect(xForColorPaint,yForColorPaint,box,box);
    
            }
            xForColorPaint += box;
        }
        xForColorPaint=0;
        yForColorPaint += box;
    }

}

//generate random position on canvas
function randomOnBoard() {
    return (Math.floor(Math.random()*16) * box);
}

//snake
let snake = [
    {
        x: 8*box ,
        y: 8*box
    }
];

//food
let food = {
    x: randomOnBoard(),
    y: randomOnBoard()
}

//will draw food on board
function drawFood() {

    ctx.fillStyle = "black";
    ctx.fillRect(food.x,food.y,box,box);
    
}

//will generate random food
function generateRandomFood() {
    
    let randomX = randomOnBoard();
    let randomY = randomOnBoard();

    if(amIOnSnake(randomX,randomY)) {
        generateRandomFood();
    }else {
        food.x = randomX;
        food.y = randomY;
    }
}


// checking if something is on snake
function amIOnSnake(coordinateX,coordinateY) {

    for(let snakeBoxNumber = 0; snakeBoxNumber < snake.length; snakeBoxNumber++) {

        let currentX = snake[snakeBoxNumber].x;
        let currentY = snake[snakeBoxNumber].y;
        
        if(coordinateX == currentX && coordinateY == currentY) {
            return true;
        }
    
    }
    return false;
}

function doesSnakeHeadCollidedWithItsBody(coordinateX,coordinateY) {

    for(let snakeBoxNumber = 1; snakeBoxNumber < snake.length; snakeBoxNumber++) {

        let currentX = snake[snakeBoxNumber].x;
        let currentY = snake[snakeBoxNumber].y;
        
        if(coordinateX == currentX && coordinateY == currentY) {
            return true;
        }
    
    }
    return false;
}

//listening to arrow keys and on screen buttons both
document.addEventListener("keydown",detectDirection);

let direction = "";

function detectDirection(event) {
    
    if(event.keyCode === 37 && direction !=="RIGHT" ) {
        direction = "LEFT";
        console.log(direction)
    }else if(event.keyCode === 38 && direction !=="DOWN") {
        direction = "UP";
    }else if(event.keyCode === 39 && direction !=="LEFT") {
        direction = "RIGHT";
    }else if(event.keyCode === 40 && direction !=="UP") {
        direction = "DOWN";
    }
}

paintSnakeBoard();

function draw() {
    
    ctx.clearRect(0,0,(box*17),(box*17));
    paintSnakeBoard();
    drawFood();

    //drawing snake
    for(let snakeBoxNumber = 0; snakeBoxNumber < snake.length; snakeBoxNumber++) {

        let currentX = snake[snakeBoxNumber].x;
        let currentY = snake[snakeBoxNumber].y;
        ctx.fillStyle = (snakeBoxNumber === 0)?"red":"white";
        ctx.fillRect(currentX,currentY,box,box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(currentX,currentY,box,box);
    
    }

    

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    //when snake eats the food
    if(snakeX == food.x && snakeY == food.y) {
        generateRandomFood();
        
    }else {
        //remove tail if snake don't eat food
        if(direction!=="") snake.pop();

    }

    
    //which direction 
    if( direction == "LEFT") snakeX -=box;
    if( direction == "UP") snakeY -=box;
    if( direction == "RIGHT") snakeX +=box;
    if( direction == "DOWN") snakeY +=box;

    //the game over rules 
    if( (snakeX) >= (box*17) || (snakeX)<0 ) {
        stopGame();
    }
    if( (snakeY) >= (box*17) || (snakeY)<0 ) {
        stopGame();
    }
    if(doesSnakeHeadCollidedWithItsBody(snakeX,snakeY)) {
        stopGame();
    }

    //new head
    if(direction!=="") {

        let newHead = {
            x: snakeX,
            y: snakeY
        }
        snake.unshift(newHead);
    }

}

let interval=0;
function startGame() {
    
    interval = window.setInterval(draw,100);
}
function stopGame() {
    interval = window.clearInterval(interval);
}

startGame();




