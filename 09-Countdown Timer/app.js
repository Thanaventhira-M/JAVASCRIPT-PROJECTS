const days=document.querySelector("#day");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const secounds=document.querySelector("#seconds");

function getCoundown(){
const currentYear = new Date().getFullYear();
const newYear =new Date(`january 1 ${currentYear +1} 00:00:00`)
const currentDate =new Date();
const diff=newYear-currentDate;
const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff/(1000*60*60)%24))
const m=Math.floor((diff/(1000*60))%60);
const s=Math.floor((diff/1000)%60);

days.innerHTML =d <10?"0"+d:d;
hours.innerHTML =h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
secounds.innerHTML=s<10?"0"+s:s;


}
setInterval(getCoundown,1000)



// console.log(`${d} ${h} ${m} ${s} `);

// console.log(d+"" +h+""+m+""+s);
