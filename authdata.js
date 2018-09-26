var emailId = prompt('Enter Email');
var Password = prompt('Enter Password');
const pass = 'KM';
const email = 'km@gmail';
var login = function(){
    if (email==emailId)
    {
        alert('user found');
        if (Password==pass)
        {
            alert('login success')
        }
        else 
        {
            alert('invalid password');
        }
    }
    else
    {
        alert('invalid mail');
        
    }
}
login();
