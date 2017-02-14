var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle = "ff00ff";

c.addEventListener('click', function(event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    ctx.fillRect(x,y,Math.random()*100,Math.random()*100);
});
