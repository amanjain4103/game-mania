let tempGlobalStartSpaceInvadorsGame = function() { };
let tempGlobalStopSpaceInvadorsGame = function() { };

function loadSpaceInvadorsGame() {

    //setting smallest unit 
    let box = canvas.width/17; //since both height and width are always same
    const ctx = canvas.getContext('2d');

    let invador = {
        x:8,
        y:15
    }

    let missiles = [];
    let missilesLength = 0;
    // eg. [ {x:1,y:2},{}]

    let spaceship = [ 
        [

            {
                x:4,
                y:1
            },
            {
                x:5,
                y:1
            },
            {
                x:6,
                y:1
            },
            {
                x:7,
                y:1
            },
            {
                x:8,
                y:1
            },
            {
                x:9,
                y:1
            },
            {
                x:10,
                y:1
            },
            {
                x:11,
                y:1
            },
            {
                x:12,
                y:1
            }
        ],
        [
            
            {
                x:4,
                y:2
            },
            {
                x:5,
                y:2
            },
            {
                x:6,
                y:2
            },
            {
                x:7,
                y:2
            },
            {
                x:8,
                y:2
            },
            {
                x:9,
                y:2
            },
            {
                x:10,
                y:2
            },
            {
                x:11,
                y:2
            },
            {
                x:12,
                y:2
            }
        ],
        [

            {
                x:4,
                y:3
            },
            {
                x:5,
                y:3
            },
            {
                x:6,
                y:3
            },
            {
                x:7,
                y:3
            },
            {
                x:8,
                y:3
            },
            {
                x:9,
                y:3
            },
            {
                x:10,
                y:3
            },
            {
                x:11,
                y:3
            },
            {
                x:12,
                y:3
            }
        ]
        
    ]

    
    //creating temporary array for spaceship so that original can be restored when needed
    let tempSpaceship = [ [...spaceship[0] ], [ ...spaceship[1] ],[ ...spaceship[2] ] ];

    function paintSpaceship() {
        for(let i=0;i<3;i++) {
            for(let j=0;j<9;j++) {
                let currentX = tempSpaceship[i][j].x;
                let currentY = tempSpaceship[i][j].y;
                ctx.fillStyle = "red";
                ctx.fillRect(currentX*box,currentY*box,box,box);
            }
        }
    }

    //mpoving spaceship
    let move = 1;
    let moveX = 4;
    let yForGameOver = 0;

    function switchDir() {
        if(move == 1) {
            move = -1;
        }else if(move == -1) {
            move = 1;
        }
    }

    function moveSpaceship() {
        
        if(moveX == 8) {
            yForGameOver++;
            switchDir();
            for(let i=0;i<3;i++) {
                for(let j=0;j<9;j++) {
                    tempSpaceship[i][j].y +=1;
                }
            }
        }

        if(moveX == 0) {
            switchDir();
        }

        moveX+=move;

        for(let i=0;i<3;i++) {
            for(let j=0;j<9;j++) {
                tempSpaceship[i][j].x += move;
                let currentX = tempSpaceship[i][j].x;
                let currentY = tempSpaceship[i][j].y;
                ctx.fillStyle = "red";
                ctx.fillRect(currentX*box,currentY*box,box,box);
            }
        }
    }

    // add misile 
    function addMisilie() {
        missiles.push({
            x:invador.x,
            y:invador.y-1
        })
        missilesLength++;
    }


    function fireThisOnSpaceship(x,y,currentMissileIndexNum) {
        for(let i=0;i<3;i++) {
            for(let j=0;j<9;j++) {
                let currentX = tempSpaceship[i][j].x;
                let currentY = tempSpaceship[i][j].y;
                if(x==currentX && y==currentY+1) {
                    incrementScore();
                    tempSpaceship[i][j].x = -1000;
                    missiles = [...missiles.slice(0,currentMissileIndexNum) , ...missiles.slice(currentMissileIndexNum+1)];
                    missilesLength;
                }
            }
        }
    }

    //listening to arrow keys
    document.addEventListener("keydown",detectDirection);

    let direction = "";
     
    function detectDirection(event) {
        
        if(event.keyCode === 37) {
            direction = "LEFT";
        }else if(event.keyCode === 39) {
            direction = "RIGHT";
        }else if(event.keyCode === 38) {
            addMisilie();
        }
    
    }
    
    //triggered when on screen control buttons are pressed
    left.onclick = function() {
        detectDirection({keyCode:37})
    }
    right.onclick = function() {
        detectDirection({keyCode:39})
    }
    document.getElementById("top").onclick = function() {
        detectDirection({keyCode:38})
    }
    bottom.onclick = function() {
        // do nothing
    }
    

    function draw() {
    
        ctx.clearRect(0,0,(box*17),(box*17));
        canvas.style.backgroundColor = "#2F3640";
        
        ctx.fillStyle = "green";
        ctx.fillRect(invador.x*box,invador.y*box,box,box);

        ctx.fillStyle = "green";
        ctx.fillRect((-1)*box,invador.y*box,box,box);
        
        moveSpaceship();

        // paint missiles
        for(let i=0;i<missilesLength;i++) {
            if(typeof(missiles[i]) != "undefined") {
                let currentMissileX = missiles[i].x;
                let currentMissileY = missiles[i].y;
                missiles[i].y-=1;
                fireThisOnSpaceship(currentMissileX,currentMissileY,i);
                ctx.fillStyle = "white";
                ctx.fillRect(currentMissileX*box,currentMissileY*box,box,box);
            }
        }
        

        if(direction == "RIGHT" ) {
            if(invador.x < 17) {
                ++invador.x;
            }
        }

        if(direction == "LEFT" ) {
            if(invador.x > 0) {
                --invador.x;
            }
        }

        direction="";

        // won the game 
        if(score == 27) {
            stopSpaceInvadorsGame();
            alert("YOU WON!!! click play Again to restart.")
        }

        // game over cases
        if(yForGameOver == 13) {
            stopSpaceInvadorsGame();
            setTimeout(function() {
                alert("YOU LOSE!!! TRY AGAIN");
            },500)
        }

        


    }
    //end of draw function






    let spaceInvadorsInterval = null;

    function startSpaceInvadorsGame() {
        if(spaceInvadorsInterval == null) {
            spaceInvadorsInterval = window.setInterval(draw,100);
        }
    }

    function stopSpaceInvadorsGame() {
        window.clearInterval(spaceInvadorsInterval);
        spaceInvadorsInterval = null;
    }

    tempGlobalStartSpaceInvadorsGame = startSpaceInvadorsGame;
    tempGlobalStopSpaceInvadorsGame = stopSpaceInvadorsGame;

    startSpaceInvadorsGame();

    playAgain.onclick = function() {
        // resetting everything
        invador = {
            x:8,
            y:15
        }

        missiles = [];
        missilesLength = 0;

        tempSpaceship = [ 
            [

            {
                x:4,
                y:1
            },
            {
                x:5,
                y:1
            },
            {
                x:6,
                y:1
            },
            {
                x:7,
                y:1
            },
            {
                x:8,
                y:1
            },
            {
                x:9,
                y:1
            },
            {
                x:10,
                y:1
            },
            {
                x:11,
                y:1
            },
            {
                x:12,
                y:1
            }
            ],
            [
                
                {
                    x:4,
                    y:2
                },
                {
                    x:5,
                    y:2
                },
                {
                    x:6,
                    y:2
                },
                {
                    x:7,
                    y:2
                },
                {
                    x:8,
                    y:2
                },
                {
                    x:9,
                    y:2
                },
                {
                    x:10,
                    y:2
                },
                {
                    x:11,
                    y:2
                },
                {
                    x:12,
                    y:2
                }
            ],
            [

                {
                    x:4,
                    y:3
                },
                {
                    x:5,
                    y:3
                },
                {
                    x:6,
                    y:3
                },
                {
                    x:7,
                    y:3
                },
                {
                    x:8,
                    y:3
                },
                {
                    x:9,
                    y:3
                },
                {
                    x:10,
                    y:3
                },
                {
                    x:11,
                    y:3
                },
                {
                    x:12,
                    y:3
                }
            ] 
        ];
        
        move = 1;
        moveX = 4;
        yForGameOver = 0;

        incrementGamesPlayed();
        stopSpaceInvadorsGame();
        resetScore();
        paintSpaceship();
        startSpaceInvadorsGame();
    }

}

function mountSpaceInvadorsGame() {
    unmountSpaceInvadorsGame()
    mountCanvas();
    loadSpaceInvadorsGame();
}

function unmountSpaceInvadorsGame() {
    tempGlobalStopSpaceInvadorsGame();
    unmountCanvas();

}