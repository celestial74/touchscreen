var img,imgbut;

function preload() {
    img=loadImage("Cyber-lock.png");
}
function setup() {
    createCanvas(400, 400);

    imgbut=createImg("Cyber-lock.png");
    imgbut.position(200,200);
    imgbut.mouseClicked(go);
}
function draw() {
    if(touches.length>0) {
        alert(touches[0] + " :x");
    }
}
function go() {
    window.location.replace("https://www.google.com");
}