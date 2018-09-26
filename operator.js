// //unary operator
// var x = '10';
// var z = x++;
// console.log(x);//11
// console.log(typeof z);
// console.log(z);//10
// console.log(z++);//10
// console.log(++z);//12
// console.log(x++);
// console.log(++x);

let accesFlag;
let age = prompt('how old are you.?');
// if (age>18)
// {
//     accesFlag = true;
//     console.log('you are allowed');
    
// }
// else
// {
//     accesFlag = false;
//     console.log('you are not allowed');
    
// }
// console.log(accesFlag);



// accesFlag = (age>18)?true:false;
// accesFlag = (age>18)?'you are allowed':'you are not allowed';
// console.log(accesFlag);


accesFlag = (age>3 && age<15)?'you are a baby not to allowed':
            (age>15 && age<18)?'you dont have a lisence':
            (age>=18)?'you are allowed':
            'not allowed....no information please give correct age';
            console.log(accesFlag);
            