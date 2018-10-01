var user = {};
var error = {};
var name = prompt('enter your name')
user.name=name;
var ssc = new Promise(function(resolve,reject,result){
    var data1 = prompt(`you passed in ssc or not
1.pass
2.fail`)
    if(rewads(data1))
    {
        resolve(user);
    }
    else
    {
        error.message = `you fail,you cant get a gift untill you pass`
    }
});
var inter = new Promise(function(resolve,reject){
    var data2 = prompt(`you passed in inter or not
1.pass
2.fail`)
    if (rewards(data2))
    {
        resolve(user)
    }
    else
    {
        error.message = `you fail,you cant get a gift untill you pass`
    }
});

ssc.then(function(user){
    console.log(user+':you got a HarleyDavidson Byke for passing of ssc in first class');
    
}).then(function(user){
     console.log(user+':you got a FERRARI CAR for passing of inter in first class');

}).catch(function(error){
    console.log(error);
    
});
inter.then(function(user){
    console.log(user+':you got a FERRARI CAR for passing of inter in first class');
    
}).catch(function(error){
    console.log(error);
    
});

function rewards(data1,data2)
{
    if(data1=='1'||data1=='pass'||data2=='1'||data2=='pass')
    {
        return true;
    }    
    else
    {
        return false;
    }
}
