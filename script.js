 var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
 
var x = 0;
var y = 0;
var incrementor = 2;
 
function Square() {
 ctx.fillStyle = "blue";
 ctx.fillRect(600 - x, y, 100, 100);
}
 
function drawBoxxy() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 
 ctx.font = "50px Arial";
 ctx.fillStyle = "red";
 ctx.fillText("I believe I can fly and hide", 100, 250);
 ctx.fillText("", 200, y);
 
 let seriousQuestion =
   "When life gives you lemon, squeeze it and make lemonade out of it!!!";
 ctx.fillText(seriousQuestion, x, 400);
 
 Square();
 while (600 - x + incrementor < canvas.width || 600 - x + incrementor > 0) {
   incrementor = -incrementor;
 }
 while (y + incrementor > canvas.height || y + incrementor < 0) {
   incrementor = -incrementor;
 }
 
 x += incrementor;
 y += incrementor;
}
 
setInterval(drawBoxxy, 10);
