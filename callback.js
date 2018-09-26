let add = (a,b)=>{
    return a+b
}
let other = (a,b)=>{
    return 'not implemented yet'
}
let calc = (num1,num2,callback)=>{
    if(typeof callback=='function'){
        return callback(num1,num2)

    }
    else
    {
        console.log('calculation Type should be a function');
        
    }
}
console.log(calc(40,20,add));
console.log(calc(40,20,other));



/*let calc = (num1,num2,calcType)=>{
    if (calcType =='add' || calcType =='+') {
        return num1+num2;
    } else if(calcType=='sub'||calcType=='-'){
        return num1-num2;
        
    }
    else{
        console.log('operation not permitted');
        
    }
}
console.log(calc(30,40,'add'));
console.log(calc(30,40,'-'));*/







/*let x = function(){
    console.log(' im function called from another function');
    return 0;
}
    let y = (msg.callback)=>{
        console.log('do some thing here');
        callback();
        console.log(msg);
        
        //msg();
        // var data = msg();
        // console.log(data);
        
        
    }
    y(x);*/