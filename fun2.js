/*var hero = {
    name : 'superman',
    power : ['Flying power','Laser Eyes','Muscle Power'],
    age : 29,
    yearbirth : 1989,
    address :{
        street : 'Golden Street',
        pincode : 100001,
        state : 'us'
    },
    readPower : function readPower(){
        return this.power;
    }
}
var heroInfo = function (herodata) {
    console.log(herodata);
    
}
heroInfo(hero);

var readHeroin = function(){
    return 'Super Women';
}
hero.readHeroin = readHeroin;
 console.log(hero.readHeroin());
 console.log(hero.readPower());

// console.log(hero.readHeroin);


/*var data = readHeroin();
console.log(readHeroin());
console.log(data);*/

var hero = {
    name : 'superman',
    power : ['Flying power','Laser Eyes','Muscle Power'],
    age : 29,
    yearbirth : 1989,
    address :{
        street : 'Golden Street',
        pincode : 100001,
        state : 'us'
    },
    readPower : function readPower(){
        return this.power;
    }
}
var heroInfo = function (herodata) {
    console.log(herodata);
    
}
heroInfo(hero);

var readHeroin = ()=>{
    return 'Super Women';
}
hero.readHeroin = readHeroin;
 console.log(hero.readHeroin());
 console.log(hero.readPower());

 var removePower = (index)=>{
    //hero.power.shift();
    hero.power.splice(index,1)
    return hero.power;
}
console.log(removePower(2,1));
console.log(removePower(1,1));








