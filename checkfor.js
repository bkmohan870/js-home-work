var data = new Array();

var obj1 = {name:'krishna',age:27};
var obj2 = {name:'mohan',age:20};
data.push(obj1);
data.push(obj2);
console.log(obj1);
console.log(obj2);

console.log(data);




var input = prompt('enter name');
for (let i = 0; i < obj1.length; i++)
{
    if(data[i].input==name)
    {
        console.log(`${data[i].name},${data[i].age}`);
        
    }
}