var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle = "#00f0fa";

/*c.addEventListener('click', function(event) {
    var x = event.clientX - 10;     // Get the horizontal coordinate
    var y = event.clientY - 60;     // Get the vertical coordinate
    ctx.fillRect(x,y,Math.random()*100,Math.random()*100);
});
*/
var b = document.getElementById("button");

b.addEventListener('click', function(event) {
    ctx.clearRect(0, 0, 800, 800); //clear entire canvas field
    ctx.closePath();
    ctx.beginPath();
});


c.addEventListener('click', function(event) {
    var x = event.clientX - 10;     // Get the horizontal coordinate
    var y = event.clientY - 60;     // Get the vertical coordinate
    ctx.lineTo(x,y);
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
});
