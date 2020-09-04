let imgSrcArr = ["/src/assets/groot.jpg","/src/assets/ironman.jpg","/src/assets/minion.jpg"]
let openedCards = [0,0,0];
let numberOfCardsOpened = 0;

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
        let imgTag = document.createElement("img");
        imgTag.src = getRandomImg(tempImgSrcArrLength);
        imgTag.classList+= "memory-card-img";
        document.getElementById(`card-${i+1}`).appendChild(imgTag);
    }

}

assignRandomImagesToCards();

function cardClicked(cardNum) {
    let cardImg = document.querySelector(`#card-${cardNum} > img`);
    cardImg.style.display = "block";
    for(let i=0;i<3;i++) {
        // http://127.0.0.1:5500/# has created issue in matching strings below directly
        if(cardImg.src == window.location.protocol + "//"+window.location.host+imgSrcArr[i]) {
            openedCards[i] +=1;
            break;
        }
    }
    numberOfCardsOpened++;
    console.log(openedCards + " " + numberOfCardsOpened)
}

