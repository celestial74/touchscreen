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
    try{
            alert(touches[0] + " :x");
        }
        catch(err){
            alert(err);
        }
        finally{
            go();
        }
}
function go() {
    window.location.replace("https://www.google.com");
}
