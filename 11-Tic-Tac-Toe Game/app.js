const boxes =document.querySelectorAll(".box");
const statusTxt =document.querySelector("#status");
const btn =document.querySelector("#Restart");  /* first indha three claas addpantrom */



const store =[[0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],       /* inga indh row and colums basics ldha toes winn aaagum */
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]
];


let options =["","","","","","","","",""];  /* first box yaethuvum illa empty ahh iruku */
let currentPlayer ="X";   /* first game start parantrathu X player */
let running =false;       /* innum game start pannala */

init() // call pantrom
function init(){ // function initialize pnatrom
boxes.forEach((box,index)=>{ // boxes inta name variable name la forEach this through namma box name la index edukurom
    box.dataset.index = index; // use this through dataset 
box.addEventListener('click',boxSelect); // atha click pannum pothu box select call aagum
});

statusTxt.textContent=`${currentPlayer} Your Trun`; //status la click pantra toes show aagum
btn.addEventListener('click',restartGame); // restar click retart call pannum
running =true; // happen now show the game 
}

function boxSelect(){

    const index=parseInt(this.dataset.index); //string integer ahh change pannuthu
    if(options[index]!=="" ||!running){ // match yerkanave strat aagiruchu illana nadakkala aptintratha kaatuthu

        return;
    }
    updatePlayer(this,index); 
}

function updatePlayer(box,index){

    options[index]=currentPlayer;
     box.innerHTML = currentPlayer; // match ippo yaru play pantra aptintratha kaaatum

    changePlayer();
    chackWinner();
}

function changePlayer(){
    currentPlayer =currentPlayer === "X" ? "0": "X"; // inga x o aptintratha change aaagitu irukum
    statusTxt.textContent=`${currentPlayer} Your Trun`; // next yaarunu add panni show aagum

}

function chackWinner(){

    let winner =null; // ippo yaarum will illi

    store.forEach((condition)=>{ // 0,1,2 
       
        const [a,b,c]=condition; //0,1,2 aptintrathu ore mathiri x o aaga covert pannuthu
        if(options[a]&& options[a] ===options[b]&&options[a]===options[c]){
            winner =options[a]; // a wiiner store pannuthu
        }
    });

    if(winner){
        statusTxt.textContent=`${winner} Wins`;
        running =false;  // win pannita match stop aggum
    }

    else if(!options.includes("")){
        statusTxt.textContent ="It is a Draw !";
        running =false; // dra aagitta match stop aaagum

    }

}

function restartGame(){
options=["","","","","","","","",""] //options again empty aaguthu
currentPlayer ="X";  // x again start pannuthu
running= true; 
statusTxt.textContent=`${currentPlayer} Your Turn`;
    boxes.forEach((box)=>(box.innerHTML =""));


}