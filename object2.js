var john = {
    firstname:"john",
    lastname:'smith',
    age:28,
    gender:'male',
    ismarried:true,
    kids:null
};
/*var data = 'firstname'in john;
console.log(data);*/

// for (key in john)
// {
//     console.log('the key is :'+key+' the value is :'+john[key]);
    
// }
// var keysdata = Object.keys(john);
// console.log(keysdata);
for (let index = 0; index < Object.keys(john).length; index++)
{
    console.log(Object.keys(john)[index]);
    console.log(john[Object.keys(john)[index]]);            
}

console.log(john);


