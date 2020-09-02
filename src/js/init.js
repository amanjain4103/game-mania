let score = 0;
const canvas = document.getElementById("canvas");

//making canvas responsive
//17*30
canvas.width = 510;
canvas.height = 510;
    
if(window.innerWidth <= 600 ) {
    //17*16
    canvas.width = 272;
    canvas.height = 272;
}