/*alert('start program');
var print = function(){
    alert('im print')
}
setTimeout(print,2000);*/



/*var time = setTimeout(function(){
    alert('im print')
},2000);
console.log(clearTimeout());*/

alert('start program');
var interval = setInterval(function(){
    alert('im in function')
},2000)
clearInterval(interval);
