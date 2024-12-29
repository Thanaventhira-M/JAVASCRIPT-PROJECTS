//CALCULATOR PROGRAM;
const displays =document.getElementById("display");

function appentTDisplay(inputes){
    displays.value +=inputes;
}


function calculate(){
    try{
    displays.value=(eval(displays.value))
    }
    catch(Error){
        displays.style.color="red";
        displays.value ="Systex Error";
    }
}

function clearDisplay(){
    displays.value ="";
}