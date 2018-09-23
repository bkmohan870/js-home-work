var records = new Array();
 /*var object1={}
 var objet2={}
 var object3={}*/
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


                    records.push(options);
                    records.push(applecount);
                    records.push(applecost);

                    // object1.push(options);
                    // object1.push(applecount);
                    // object1.push(applecost);
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

                    records.push(options);
                    records.push(mangocount);
                    records.push(mangocost);

                    // object2.push(options);
                    // object2.push(mangocount);
                    // object2.push(mangocost);
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

                    records.push(options);
                    records.push(goacount);
                    records.push(goacost);


                    // object3.push(options);
                    // object3.push(goacount);
                    // object3.push(goacost);
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
// records.push(object1);
// records.push(objet2);
// records.push(object3);
alert('total you purchased fruites are : '+records);
console.log('total you purchased fruites are : '+records);

