var records = new Array();
 var object={};
//  var object2={};
//  var object3={};
alert('welcome 2 fruite market');
while (true) 
{
    var options = prompt(`Select One Option!
    1.apple
    2.mango
    3.goa
    4.Exit`);
    if (options == '1' || options == 'apple' || options == '2' || options == 'mango' || options == '3' || options == 'goa')
    {
        switch (options)
        {
            case '1': case 'apple':
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


                    // records.push(options);
                    // records.push(applecount);
                    // records.push(applecost);
                    object = {}
                    // object.options=options;
                    object.name= 'apple'
                    object.count=applecount;
                    object.cost=applecost;

                    records.push(object);

                }               
                if(!retval)break;
            break;
                

            case '2':case 'mango':    
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

                    // records.push(options);
                    // records.push(mangocount);
                    // records.push(mangocost);
                    object = {}
                    // object.options=options;
                    object.name='mango'
                    object.count=mangocount;
                    object.cost=mangocost;

                    records.push(object);

                }
                if(!retval)break;
            break;


            case '3':case 'goa':    
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

                    // records.push(options);
                    // records.push(goacount);
                    // records.push(goacost);

                    object = {}
                    // object.options=options;
                    object.name = 'goa';
                    object.count=goacount;
                    object.cost=goacost;

                    records.push(object);

                }
                if(!retval)break;
            break;


            case '4': case 'exit':
                console.log('Exit Selected');


            default:
                console.log("invalid option");    

        }
    }
    else
    {
        break;
    }

}

// for (let index = 0; index < Object.keys(object1).length; index++)
// {
//     console.log(Object.keys(object1)[index]); 
//     console.log(object1[Object.keys(object1)[index]]);

//     alert('total purchased fruites are : '+Object.keys(object1)[index]) ;
        
// }

// for (let index = 0; index < Object.keys(object2).length; index++)
// {
//     console.log(Object.keys(object2)[index]);  
//     console.log(object2[Object.keys(object2)[index]]);

//     alert('total fruites are : '+Object.keys(object2)[index])  ;
        
// }

for(i=0;i<records.length;i++){
    console.log(`${records[i].name} :-- ${records[i].count},  ${records[i].cost}`);
    
}

// alert('total you purchased fruites are : '+records[0].applecost);
// console.log('total you purchased fruites are : '+records);

