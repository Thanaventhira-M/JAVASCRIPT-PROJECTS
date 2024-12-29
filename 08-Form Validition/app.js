const form = document.querySelector("#form")
const userName =document.querySelector(".userName")
const email =document.querySelector(".email")
const password =document.querySelector(".password")
const cpassword =document.querySelector(".cpassword")
  

form.addEventListener('submit',(events)=>{
    events.preventDefault();
    validateInputs();
    if(validateInputs()){
        form.submit();
    }
})

function validateInputs(){
const usernameVal =userName.value.trim()
const useremailVal =email.value.trim()
const userpasswordVal =password.value.trim()
const conformpassVal=cpassword.value.trim();
 
let isValid =true

if(usernameVal === ''){
    setError(userName,'UserName is requrid')
isValid =false;
} 
else{
    setSucess(userName)
}

if(useremailVal ===''){
    setError(email,"Email is requried")
    isValid =false
}

else if(!validateEmail(useremailVal)){
    setError(email,"Please enter your email")
    isValid=false;
}
else{
    setSucess(email)
}

if(userpasswordVal ===''){
    setError(password,'password is requried')
    isValid =false;
}

else if(userpasswordVal.length<8){
    setError(password,'Password must be atleast 8 charector')
    isValid =false;
}

else{
    setSucess(password)
}

if(conformpassVal ===""){
    setError(cpassword,'Conform password is requried')
    isValid =false;
}

else if(conformpassVal!== userpasswordVal){
setError(cpassword,'password does not match')
isValid =false;
}

else{
    setSucess(cpassword)
}
return isValid;

}

function setError(element,message){
    const inputGroup =element.parentElement;
    const errorElement =inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSucess(element){
    const inputGroup =element.parentElement;
    const errorElement =inputGroup.querySelector('.error');

    errorElement.innerText="";
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
const validateEmail =(email)=>{
    const emailLower =String(email).toLowerCase();
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(emailLower); 

};