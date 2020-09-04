let score = 0;
const canvas = document.getElementById("canvas");
const inplaceOfCanvas = document.getElementById("inplaceOfCanvas");
const playAgain = document.getElementById("play-again");

function mountCanvas() {
    //making canvas responsive
    //17*30
    canvas.style.display = "block";
    canvas.width = 510;
    canvas.height = 510;
        
    if(window.innerWidth <= 600 ) {
        //17*16
        canvas.width = 272;
        canvas.height = 272;
    }

}

function unmountCanvas() {
    canvas.style.display = "none";
}

function mountInplaceOfCanvas() {
    inplaceOfCanvas.style.display = "flex";
}

function unmountInplaceOfCanvas() {
    inplaceOfCanvas.style.display = "none";
}
