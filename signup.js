var userNameInput = document.getElementById("exampleInputuser");
var userEmailInput = document.getElementById("exampleInputEmail1");
var userPasswordInput = document.getElementById("exampleInputPassword1");
var userBtnSignup = document.getElementById("signupbtn");
var alertMasge = document.getElementById("alertMsg");

var userDataArr=[];



if(localStorage.getItem('Users') !=null)
{
    userDataArr=JSON.parse(localStorage.getItem('Users'));
}


function saveData()
{
    
    var data=
    {
        userName : userNameInput.value,
        email1 : userEmailInput.value,
        password : userPasswordInput.value,
    }
    if (checkInputsEmpty() == true) {
        
        getAlertMsg('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlertMsg('Email Already Exist', 'red');
        }
        else
        {
            userDataArr.push(data);
            localStorage.setItem('Users', JSON.stringify(userDataArr));
            clrFrorm();
            getAlertMsg('Success', 'green');
        }
    }
    userDataArr.push(data)
    localStorage.setItem('Users' , JSON.stringify(userDataArr));
    clrFrorm();
    
}
function getAlertMsg(text, color) 
{
    alertMasge.classList.replace('d-none', 'd-block');
    alertMasge.innerHTML = text;
    alertMasge.style.color = color;
}

function clrFrorm() {
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';
}
function checkInputsEmpty() {
    if (userNameInput.value == '' || userEmailInput.value == '' || userPasswordInput.value == '')
        return true;
    else
        return false;
}
function checkEmailExist() {
    for (let i = 0; i < userDataArr.length; i++) {
        if (userDataArr[i].email == userEmailInput.value)
            return true;
    }
}

userBtnSignup.addEventListener('click' , saveData)
