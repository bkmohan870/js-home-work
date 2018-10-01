var emailId = prompt('Enter Email');
var password = prompt('Enter Password');
var records = new Array();
var user = {};
var error = {};
const pass = 'KM';
const email = 'km@gmail';

var login =new Promise(function(resolve,reject){
    if(isEmailIdEmpty(error)||isPasswordEmpty(error)||email!=emailId||pass!=password)
    {
        error.msg=`email or password could not be empty or email password could not match`
        reject(error)
    }
    else
    {
        user.email=email;
        user.password=pass;
        records.push(user)

        resolve(user)
    }
});
login.then(function(user){
    console.log(records);
    
}).catch(function(error){
    console.log(error);
    
})
function isEmailIdEmpty(value)
{
    return (value='')?true:false;    
}
function isPasswordEmpty(value) {
    return (value='')?true:false;
}
