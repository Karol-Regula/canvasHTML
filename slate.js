var c = document.getElementById("slate");
var b = document.getElementById("button");
var ctx = c.getContext("2d");

ctx.fillStyle = "#00f0fa";

function rect(event) {
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.fillRect(x,y,Math.random()*100,Math.random()*100);
}

function clear(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
}

function circle(event) {
    //var x = event.clientX - 10;     // Get the horizontal coordinate
    //var y = event.clientY - 60;     // Get the vertical coordinate
    var x = event.offsetX;     // Get the horizontal coordinate
    var y = event.offsetY;     // Get the vertical coordinate
    ctx.lineTo(x,y);
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
}

b.addEventListener('click', clear);
c.addEventListener('click', circle);
