const canvas = document.getElementById("canvas");
    
//making canvas responsive
//17*32
canvas.width = 544;
canvas.height = 544;
    
if(window.innerWidth <= 600 ) {
    //17*16
    canvas.width = 272;
    canvas.height = 272;
}