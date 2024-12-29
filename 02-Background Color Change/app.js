
const button =document.getElementById("butts");
const hex =document.getElementById("hexcode");

function randomcolor(){
    let letters ="123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }

    return color;
}

butts.addEventListener("click", ()=>{
    document.body.style.backgroundColor =randomcolor();
    hex.innerHTML=randomcolor();
})
