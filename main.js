function preload(){

}

function setup(){
    canvas = createCanvas(650,450);
    canvas.position(400, 280);
    vid = createCapture(VIDEO);
    vid.hide();
    c = "";
    audio.play();
}

function draw(){
    image(vid,0,0,650,450);
    tint(c);
}


function ts(){
    save("My photo.png");
}

function fil(){
    c = document.getElementById("Color").value;

}

