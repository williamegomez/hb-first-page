var flaghover = false;
var menuopen = false;
var xinicial_mobilec;

var containermobile =document.querySelector('.container_services');

function myFunction() {
    console.log("pos",event.clientX);
    movement = event.clientX - xinicial_mobilec;
    console.log("Desplazamiento",movement);
    containermobile.style.transform = "translateX("+movement+"px)";
}

containermobile.addEventListener("mousedown", function(){
    flaghover=true;
    xinicial_mobilec = event.clientX;
    console.log("xinicial_mobilec",xinicial_mobilec);
}, true);

containermobile.addEventListener("mousemove", function(){
    if(flaghover==true){
        myFunction(event);
    }
}, false);

containermobile.addEventListener("mouseup", function(){
    flaghover=false;
}, false);

function ExpandBar() {
    if (menuopen==false){
        document.getElementsByClassName("menu")[0].style.display = "block";
        menuopen=true;
    }
    else{
        document.getElementsByClassName("menu")[0].style.display = "none";
        menuopen=false;
    }
}
