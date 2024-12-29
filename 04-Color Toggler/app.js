let toggle = document.getElementById("switch");

toggle.addEventListener("click",() =>{
    //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  toggle.checked ===true ?
  (document.body.style.backgroundColor = "black")
  :(document.body.style.backgroundColor="white");
})