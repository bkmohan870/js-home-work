function  Wehicle(company,model,ingeneCC,price)
{
    this.company = company//this variable refers to current working object
    this.model=model;
    this.ingeneCC=ingeneCC;
    this.price=price;
}
let car = new Wehicle('RolsRoyce','phantom','null','$450000');
car.type='car'
console.log(car);

let bike = new Wehicle('RoyalEnfield','classic',350,150000,);
bike.type='bike';
console.log(bike);

function Institute(course,batches,timings,)
{
    this.course=course;
    this.batches=batches;
    this.timings=timings;
}

let visualpath = new Institute('fullstack',4,'9am')
console.log(visualpath);


let sathya = new Institute('java',55,'5pm')
console.log(sathya);
