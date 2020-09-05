
// let imgSrcArr = ["/src/assets/groot.jpg","/src/assets/ironman.jpg","/src/assets/minion.jpg"]
let openedCards = 0;
let openedImgs = [];
let openedCardNums = [];
let numOfImgStacksIdentified = 0; //max to 3 and thats the winning number
let wantToPlayAgain = false;

function assignRandomImagesToCards() {

    let tempImgSrcArr = ["/src/assets/groot.jpg","/src/assets/groot.jpg","/src/assets/groot.jpg","/src/assets/minion.jpg","/src/assets/minion.jpg","/src/assets/minion.jpg","/src/assets/ironman.jpg","/src/assets/ironman.jpg","/src/assets/ironman.jpg"];

    let tempImgSrcArrLength = 9;

    function getRandomImg(max) {

        let random = Math.floor(Math.random()*max)
        let randomSrc = tempImgSrcArr[random];
        tempImgSrcArr = [...tempImgSrcArr.slice(0,random) , ...tempImgSrcArr.slice(random+1)];
        tempImgSrcArrLength--;
        return randomSrc;

    }

    for(let i=0;i<9;i++) {
        //removing previous image if any for play again functionality (below four lines)
        if(wantToPlayAgain) {
            let prevImg = document.querySelector(`#card-${i+1} > img`);
            prevImg.parentNode.removeChild(prevImg);
        }

        let imgTag = document.createElement("img");
        imgTag.src = getRandomImg(tempImgSrcArrLength);
        imgTag.classList+= "memory-card-img";
        document.getElementById(`card-${i+1}`).appendChild(imgTag);
        document.querySelector(`#card-${i+1} > img`).style.display = "none";
    }

}

assignRandomImagesToCards();

function cardClicked(cardNum) {
    let cardImg = document.querySelector(`#card-${cardNum} > img`);
    ++openedCards;
    openedCardNums.push(cardNum-1);
    openedImgs[cardNum-1] = {
        "id":cardNum,
        "src":cardImg.src
    };
    cardImg.style.display = "block";
    if(openedCards >=3 ) {
        openedCards = 0;

        //openedCardNums[i] => will give me the indexnum for opened Imgs
        let firstSrc = openedImgs[openedCardNums[0]].src;

        if(firstSrc == openedImgs[openedCardNums[1]].src && firstSrc == openedImgs[openedCardNums[2]].src) {
            //that's great I don't need to do much just keep those imgs open
            ++numOfImgStacksIdentified; //since all three matches means that one stack is identified
            incrementScore();
            //need to clear this explicitly again since timeout is async 
            if(numOfImgStacksIdentified === 3) {
                alert("you win!!! Click Play Again button to play it once more.")
            }
            openedCardNums = [];
            openedImgs = [];
        }else {
            setTimeout(function() {
                document.querySelector(`#card-${openedCardNums[0]+1} > img`).style.display = "none";
                document.querySelector(`#card-${openedCardNums[1]+1} > img`).style.display = "none";
                document.querySelector(`#card-${openedCardNums[2]+1} > img`).style.display = "none";
                openedCardNums = [];
                openedImgs = [];
                
            },500)
        }

    }
    
}

playAgain.onclick = function() {
    wantToPlayAgain = true;
    numOfImgStacksIdentified = 0;
    resetScore();
    assignRandomImagesToCards();

}