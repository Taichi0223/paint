my_canvas = document.getElementById("canvas");
lol = my_canvas.getContext("2d");

/* circle
lol.beginPath()
lol.strokeStyle = "white";
lol.lineWidth = 3;
// arc(x,y,radius, startangle, endangle)
//Math.PI = 180
lol.arc(100, 200, 40, 0, 2 * Math.PI);
lol.stroke();

*/

mouseEvent = "";

last_x = 0;
last_y = 0;
current_x = 0;
current_y = 0;

my_canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    
    mouseEvent = "my_mouseup";
}

my_canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "my_mouseleave";
}


my_canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

   last_x = e.clientX - my_canvas.offsetLeft;
   last_y = e.clientY - my_canvas.offsetTop;
   mouseEvent = "my_mousedown";


}

my_canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {

    current_x = e.clientX - my_canvas.offsetLeft;
    current_y = e.clientY - my_canvas.offsetTop;

    if (mouseEvent == "my_mousedown"){

        lol.beginPath()
        lol.strokeStyle = "black";
        lol.lineWidth = 3;
        //arc(x,y,radius, startangle, endangle)
        //Math.PI = 180

        lol.arc(last_x,last_y, 40, 0, 2 * Math.PI);
        lol.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}


/*
function circle(x,y){
    lol.beginPath()
    lol.strokeStyle = "black";
    lol.lineWidth = 3;
    // arc(x,y,radius, startangle, endangle)
    //Math.PI = 180



    lol.arc(x,y, 40, 0, 2 * Math.PI);
    lol.stroke();

}*/