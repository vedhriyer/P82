mouseEvent="empty";
console.log(mouseEvent);
canvas = document.getElementById("canvas");
color = "red";
radius = 10;
ctx = canvas.getContext("2d");



canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    

    mouseEvent = "mouseDown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
    mouseEvent = "mouseUp";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove",my_mouseMove);

function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        console.log("mouseDown+mouseMove");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_position_of_y = current_position_of_mouse_y;
    last_position_of_x = current_position_of_mouse_x;
}

function clear_rect(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}