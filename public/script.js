var flaghover = false;
var xi;


function myFunction() {
    var des = event.clientX - xi;     // Get the horizontal coordinate
    console.log("Desplazamiento",des);
    var elements = document.querySelectorAll('.card-service');
    for(let i=0;i<elements.length;i++){
        console.log(elements[i].getBoundingClientRect().left);
        elements[i].style.transform = "translateX("+des+"px)";
        console.log(elements[i].getBoundingClientRect().left);
    }
}


document.body.addEventListener('click', function (event) {
    if (document.querySelector('.container_services').contains(event.target)&& flaghover==false){
        xi = event.clientX;     // Get the horizontal coordinate  
        flaghover = true;
        document.body.addEventListener('mousemove', myFunction);

    } else {
        flaghover = false;

        document.body.removeEventListener('mousemove', myFunction);
    }
});
