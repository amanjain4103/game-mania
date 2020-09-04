

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

        canvas.style.backgroundColor = "grey";

        var pipeNorth = new Image();
        pipeNorth.src = "/src/assets/pipeNorth.png";
        // pipeNorth.onload = function() {
            ctx.drawImage(pipeNorth,pipeNorthPos.x*box,pipeNorthPos.y,pipeNorthPos.w*box,pipeNorthPos.h*box)
        // }

        var pipeSouth = new Image();
        pipeSouth.src = "/src/assets/pipeSouth.png";
        // pipeSouth.onload = function() {
            ctx.drawImage(pipeSouth,pipeSouthPos.x*box,pipeSouthPos.y*box,pipeSouthPos.w*box,pipeSouthPos.h*box)
        // }

        var bird = new Image();
        bird.src = "/src/assets/bird.png";
        // bird.onload = function() {
            ctx.drawImage(bird,birdPos.x*box,birdPos.y*box,birdPos.w*box,birdPos.h*box);
        // }
        
        if(direction === "DOWN" ) {
            birdPos.y += 0.5;
        }
        if(direction === "UP") {
            birdPos.y -=2;
        }
        
        // game over rules 
        if(birdPos.y >= 17 || birdPos.y <=0 ) {
            stopFlappyGame();
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

    

    startFlappyGame();
}

let flappyInterval = 0;
function startFlappyGame() {
    flappyInterval = window.setInterval(draw,150);
}

function stopFlappyGame() {
    window.clearInterval(flappyInterval);
}