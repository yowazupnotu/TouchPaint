canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var lastPOX, lastPOY;

var mouseEvent = "empty";
color = "blue";
lineWidth = 3;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(a) {
    color = document.getElementById("inputcolor").value;
    lineWidth = document.getElementById("inputwidth").value;
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(a) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(a) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(a) {
   
    currentPOTX = a.clientX - canvas.offsetLeft;
    currentPOTY = a.clientY - canvas.offsetTop;

    if (mouseEvent =="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastPOX, lastPOY);
        ctx.lineTo(currentPOTX, currentPOTY);
        ctx.stroke();
    }

    lastPOX = currentPOTX;
    lastPOY = currentPOTY;
}

function my_touchmove(a)
{
    currentPOTY = e.touches[0].clientY - canvas.offsetLeft;
    currentPOTX = e.touches[0].clientX - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(lastPOX, lastPOY);
    ctx.lineTo(currentPOTX, currentPOTY);
    ctx.stroke();

    lastPOX = currentPOTX;
    lastPOY = currentPOTY;
}