var records = new Array();
 var object={};
//  var object2={};
//  var object3={};
alert('welcome 2 fruite market');

let appleSelect=function(){
    alert('you selected apple')                
    var retval=confirm(`Each apple cost 25/-
    Do you want to proceed or not`);

    if (retval==true)
    {
        var applecount = prompt('choose how many you want');
        applecost = applecount*25;
        alert('total apples cost is : '+applecost);
        console.log(applecount+'apples you selected');
        console.log('total apples cost is : '+applecost);

        object = {}
        
        object.name= 'apple'
        object.count=applecount;
        object.cost=applecost;

        records.push(object);

    }               
   // if(!retval)break;
}
let mangoSelect=function(){
    alert('you selected mango')              
    var retval=confirm(`Each mango cost 10/-
    Do you want to proceed or not`);
    if (retval==true)
    {
        var mangocount = prompt('choose how many you want');
        mangocost = mangocount*10;
        alert('total mangos cost is : '+mangocost);
        console.log(mangocount+'mangoes you purchased');
        console.log('total mangos cost is : '+mangocost);

        object = {}
        
        object.name='mango'
        object.count=mangocount;
        object.cost=mangocost;

        records.push(object);

    }
    //if(!retval)break;
}
let goaSelect=function() {
    alert('you selected goa')               
    var retval=confirm(`Each goa cost 15/-
    Do you want to proceed or not`);
    if (retval==true)
    {
        var goacount = prompt('choose how many you want');
        goacost = goacount*15;
        alert('total goas cost is : '+goacost);
        console.log(goacount+'goas you purchased');
        console.log('total goas cost is : '+goacost);

        

        object = {}
        
        object.name = 'goa';
        object.count=goacount;
        object.cost=goacost;

        records.push(object);

    }
    //if(!retval)break;
}



while (true) 
{
    var options = prompt(`Select One Option!
    1.apple
    2.mango
    3.goa
    4.Exit`);
    if (options == '4')
    {
        break;
    }
    else
    {
        
        switch (options)
        {
            case '1': case 'apple':
            appleSelect();
            break;
                

            case '2':case 'mango':    
            mangoSelect();                
            break;


            case '3':case 'goa': 
            goaSelect();   
            break;


            case '4': case 'exit':
                console.log('Exit Selected');


            default:
                console.log("invalid option");    

        }
    }

}


for(i=0;i<records.length;i++){
    console.log(`${records[i].name} :-- ${records[i].count},  ${records[i].cost}`);
    
}
//console.log('total saved in array '+records);



