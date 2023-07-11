const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');



form.addEventListener('submit',e =>{

    //prevent submiting
   
    e.preventDefault();
    validateInputs();
});

const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); 

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error'); 

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const containSpecialCharacter = str => {
    var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
	return regex.test(str);
}
const isLetter = (letter) =>{
    return letter.length === 1 && letter.match(/[a-z]/i);
}
const validateInputs = () =>{
    //get inputs and erase white spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
//check username length
//check username begining
    const nameReqLength = usernameValue.length < 3 ? false : true ;
    const nameBegLetter = !isLetter(username.value.charAt(0)) ? false : true;
    
//check both require
    if(nameBegLetter && !nameReqLength){
        setError(username,'Please 3 characters min');
    }else if(!nameBegLetter && nameReqLength){
        setError(username,'Please Begin with a character [a-zA-Z]')
    }else if(!nameBegLetter && !nameReqLength){
        setError(username,'Please 3 characters min & begin with a character [a-zA-Z]');
    }else{
        setSuccess(username);
    }
//check email
    if(emailValue === ''){
        setError(email,'Email is required');
    }else{
        setSuccess(email);
    }
//check password1
const pswrdReqLength = password1.value.length < 8 ? false : true;
const pswrdSpecialCh =  containSpecialCharacter(password1.value) ? true :false;

if(pswrdReqLength && !pswrdSpecialCh){
    setError(password1,'Please add special Characters');
    setError(password2,'');
}else if(!pswrdReqLength && pswrdSpecialCh){
    setError(password1,'Please use at least 8 character.');
    setError(password2,'');
}else if(!pswrdReqLength && !pswrdSpecialCh){
    setError(password1,'Please use at least 8 characters & 1 special Characters');
    setError(password2,'');
}else{
    setSuccess(password1);
    //check password2
    if(password2Value === ''){
    setError(password2,'Please confirm your password');
    }else if(password1Value !== password2Value){
    setError(password2,"Passwords doesn't match");
    }else{
    setSuccess(password2);
    }
}



}