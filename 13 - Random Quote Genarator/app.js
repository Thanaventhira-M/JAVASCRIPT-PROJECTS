const quoteText =document.querySelector(".quote"),
authorNmae =document.querySelector(".author .name"),
copyText =document.querySelector(" .features .copy"),
speechBtn =document.querySelector(".features .speech"),
quoteBtn =document.querySelector("button");

function randomQuote (){
    quoteBtn.innerText="Loading Quote...";
    fetch('https://dummyjson.com/quotes/random')
     .then((res)=>res.json())
     .then((result) =>{
        console.log(result);
      quoteText.innerText =result.quote
      authorNmae.innerText =result.author
      quoteBtn.innerText ="New quote"
        
    })
}

speechBtn.addEventListener("click",()=>{
  const quote =quoteText.innerText;
  const aName =authorNmae.innerText
  const speech =new SpeechSynthesisUtterance(quote +" "+aName);
  speech.volume =1;
  speech.rate =1; 
  speech.pitch =1;


  window.speechSynthesis.speak(speech)
});

copyText.addEventListener("click",()=>{
  const textTocopt =`${quoteText.innerText}-${authorNmae.innerText} -${copyText.innerText}`;
  navigator.clipboard.writeText(textTocopt).then(()=>{
    alert("Quote copy to clipboard")
  })
}) 

quoteBtn.addEventListener("click",randomQuote); 