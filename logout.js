var welcomeMassage=document.getElementById('welcomeMassage');
var logOutBtn=document.getElementById('logOutBtn');
//test git hub
if(localStorage.getItem('userName') != null)
{
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}

function logOut()
{
    window.location.href='./index.html';
    localStorage.removeItem('userName');
}
logOutBtn.addEventListener('click',logOut)