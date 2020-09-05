let tempGlobalStartFlappyGame = function() {};
let tempGlobalStopFlappyGame = function() {};

function loadFlappyBirdGame() {
        
    //setting smallest unit 
    let box = canvas.width/17; //since both height and width are always same
    const ctx = canvas.getContext('2d');

    // setting variables
    let birdPos = {
        x:3,
        y:8,
        w:1,
        h:1
    }

    let pipeNorthPos = {
        x:12,
        y:0,
        w:2,
        h:7
    }

    let pipeSouthPos = {
        x:12,
        y:10,
        w:2,
        h:7
    }

    //listening to arrow keys
    document.addEventListener("keydown",detectDirection);
    
    let direction = "DOWN";
    
    function detectDirection(event) {
        
        if(event.keyCode === 38) {
            direction = "UP";
        }
    }
    
    //triggered when on screen control buttons are pressed
    top.onclick = function() {
        detectDirection({keyCode:38})
    }

    // genrate a random number 
    function genrateRandomNumberBetween(min,max) {
        return (Math.floor(Math.random()*(max-min+1))+ min)
    }


    function draw() {
        ctx.clearRect(0,0,(box*17),(box*17));

        canvas.style.backgroundColor = "#48dbfb";

        var pipeNorth = new Image();
        pipeNorth.src = "./src/assets/pipeNorth.png";
        ctx.drawImage(pipeNorth,pipeNorthPos.x*box,pipeNorthPos.y,pipeNorthPos.w*box,pipeNorthPos.h*box)

        var pipeSouth = new Image();
        pipeSouth.src = "./src/assets/pipeSouth.png";
        ctx.drawImage(pipeSouth,pipeSouthPos.x*box,pipeSouthPos.y*box,pipeSouthPos.w*box,pipeSouthPos.h*box)


        var bird = new Image();
        bird.src = "./src/assets/bird.png";
        ctx.drawImage(bird,birdPos.x*box,birdPos.y*box,birdPos.w*box,birdPos.h*box);

            
        // game over rules 
        if(birdPos.y >= 17 || birdPos.y <=0 ) {
            stopFlappyGame();
        }    
        if(birdPos.x >= pipeNorthPos.x && birdPos.x <=pipeNorthPos.x+1) {
            if(birdPos.y <= pipeNorthPos.h-1 || birdPos.y >= pipeSouthPos.y-0.5) {
                stopFlappyGame();
            }
        }


        if(direction === "DOWN" ) {
            birdPos.y += 0.5;
        }
        if(direction === "UP") {
            birdPos.y -=1;
        }
        
        
        

        //incrementing score
        if(birdPos.x == pipeNorthPos.x+2) {
            incrementScore();
        }


        if(pipeNorthPos.x <=0) {
            pipeNorthPos.x =12;
            pipeSouthPos.x =12;
            pipeNorthPos.h = genrateRandomNumberBetween(3,11);
            pipeSouthPos.y = pipeNorthPos.h + 3;
            pipeSouthPos.h = 17 - pipeSouthPos.y;
        }


        pipeNorthPos.x -=1;
        pipeSouthPos.x -=1;

        direction = "DOWN";
    }
    
    let flappyInterval = null;
    function startFlappyGame() {
        if(flappyInterval == null) {
            flappyInterval = window.setInterval(draw,150);
        }
            
    }

    function stopFlappyGame() {
        window.clearInterval(flappyInterval);
        flappyInterval = null;
    }
    
    tempGlobalStartFlappyGame = startFlappyGame;
    tempGlobalStopFlappyGame = stopFlappyGame;

    startFlappyGame();

    playAgain.onclick = function() {
        // resetting the flappy bird game board
        birdPos = {
            x:3,
            y:8,
            w:1,
            h:1
        }
        pipeNorthPos = {
            x:12,
            y:0,
            w:2,
            h:7
        }
        pipeSouthPos = {
            x:12,
            y:10,
            w:2,
            h:7
        }
        incrementGamesPlayed();
        startFlappyGame();
        resetScore();
    }
}

function mountFlappyBirdGame() {
    unmountFlappyBirdGame();
    mountCanvas();
    loadFlappyBirdGame();   
}

function unmountFlappyBirdGame() {
    unmountCanvas();
    tempGlobalStopFlappyGame();   
}

