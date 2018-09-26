// function hero()
// {
//     console.log('I am hero');
    
// }
// hero();



// (function hero()
// {
//     console.log('I am hero');
    
// }());


// (function hero(name,age)
// {
//     console.log('I am hero');
//     console.log(name,age);
    
    
// }('johnny',45));


// function heroInfo()
// {
//     console.log('hero on his way');
    
// }
// heroInfo();



/*//Function Expression
var heroData = function heroInformation()
{
    console.log('hero on his way');
    return 20;
    
}
//console.log(heroData);
console.log(heroData());*/


/*//labled function Expression
var heroData = function heroInformation()
{
    console.log('hero on his way');
    return 20;
    
}
console.log(heroData);
heroData();*/


/*//anonymous function Expression
var heroData = function heroInformation()
{
    console.log('hero on his way');
    return 20;
    
}
console.log(heroData);
heroData();

var heroInfo = function()
{
    console.log('this is  hero');
    return true;
    
}
console.log(heroInfo);*/


heroInformation();
//if we use function decleration then we can invoke a function before you declared
function heroInformation()
{
    console.log('function decleration');
    return 20;
    
}
console.log(heroInformation);

//heroInformation();
heroInfo();
//if we use function expression then we can't invoke a function before you declared


var heroInfo = function()
{
    console.log('function expression');
    return true;
    
}
console.log(heroInfo);



