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