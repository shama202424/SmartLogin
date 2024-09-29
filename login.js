var userEmailInput = document.getElementById("exampleInputEmail1");
var userPasswordInput = document.getElementById("exampleInputPassword1");
var userloginBtn = document.getElementById('loginBtn');
var alertMassage = document.getElementById('alertMassageId');
var userDataArr=[];

if (localStorage.getItem('Users') != null) {
    userDataArr = JSON.parse(localStorage.getItem('Users'));
}
function logIn() {
    debugger;
    if(checkInputsEmpty() == true)
    {
        //alert message
        getAlertMasge('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
        
            window.location.href='home.html';
        }
        else
        {
        
            getAlertMasge('Email or Password notCorrect','red');
        }
    }
    
}
function checkEmailPassword() {
    for (let index = 0; index < userDataArr.length; index++) {
        if (userDataArr[index].email == userEmailInput.value && userDataArr[index].passwrod == userPasswordInput.value) {
            localStorage.setItem('userName',userDataArr[index].userName)
            return true;
        }
    }
}
function getAlertMasge(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( userEmailInput.value == '' || userPasswordInput.value == '')
        return true;
    else
        return false;
}

userloginBtn.addEventListener('click' , logIn)