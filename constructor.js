//constructor is a spl function that represents the blu print
//constructor are use to instantiate an object
//constructor are use to create dynamic object
//constructor are use to initialised default values for an object


function  Projector(company,size,price,warrenty)
{
    this.company = company//this variable refers to current working object
    this.size=size;
    this.price=price;
    this.warrenty=warrenty;
}
let projector = new Projector('Epson','2x2',4000,'2year');
projector.size = '3x4';
console.log(projector);

let projector1 = new Projector('sony','20x20',5000,'1year');
console.log(projector1);


