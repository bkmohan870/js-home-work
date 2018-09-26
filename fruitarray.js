alert('welcome 2 fruit market');
let frtarray =['apple','orange','goa','mango','others'];
let fruite=prompt("enter fruite name");
for (let fruiteindex = 0; fruiteindex < frtarray.length-3; fruiteindex++)
{
    if (fruite=='apple')
    {
        let retval=confirm(`each apple cost is 25/-
        Do you want to buy or not`);
        if (retval==true)
        {
            let frtcount=+prompt('please enter how many you want')
            let cost1=frtcount*25;
            alert('total apples cost is : '+cost1);
            console.log('apples cost is : '+cost1);
            let retval=confirm(`Do you want to continue to buy another fruite then click OK
            otherwise cancel`);
            if (retval==true)
            {
                let fruite=prompt('please enter fruite name');
                if (fruite=='orange') 
                {
                    let retval=confirm(`each orange cost is 20/-
                    Do you want to buy or not`);
                    if (retval==true)
                    {
                        let frtcount=+prompt('please enter how many you want');
                        let cost2=frtcount*20;
                        alert('total oranges cost is : '+cost2);
                        console.log('oranges cost is : '+cost2);
                        let retval=confirm(`Do you want to continue to buy another fruite then click OK
                        otherwise cancel`);
                        if(retval==true)
                        {
                            



                            let fruite=prompt('please enter fruite name');
                            if (fruite=='mango') 
                            {
                                let retval=confirm(`each mango cost is 15/-
                                Do you want to buy or not`);
                                if (retval==true)
                                {
                                    let frtcount=+prompt('please enter how many you want');
                                    let cost3=frtcount*15;
                                    alert('total mango cost is : '+cost3);
                                    console.log('mango cost is : '+cost3);
                                    let retval=confirm(`Do you want to continue to buy another fruite then click OK
                                    otherwise cancel`);
                                    if(retval==true)
                                    {




                                        let fruite=prompt('please enter fruite name');
                                        if (fruite=='goa') 
                                        {
                                            let retval=confirm(`each goa cost is 10/-
                                            Do you want to buy or not`);
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*10;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='') 
                                                    {
                                                        let retval=confirm('each'+(fruite)+`fruite cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;
                                            
                                            
                                        }
                                        else
                                        {



                                            let retval=confirm('each'+(fruite)+`fruite cost is 10/-
                                                        Do you want to buy or not`);                                           
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*10;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='') 
                                                    {
                                                        let retval=confirm(`each goa cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;




                                        }








                                    }
                                    else
                                    {
                                        alert('total fruites cost is : '+(cost1+cost2+cost3));
                                        console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                        
                                    }

                                    if(!retval)break;
                                }
                                else
                                {
                                    alert('total fruites cost is : '+(cost1+cost2));
                                    console.log('total fruites cost is : '+(cost1+cost2));
                                    
                                }
                                if(!retval)break;
                                
                                
                            }
                            else if (fruite=='goa')
                            {
                                



                                let retval=confirm(`each goa cost is 10/-
                                Do you want to buy or not`);
                                if (retval==true)
                                {
                                    let frtcount=+prompt('please enter how many you want');
                                    let cost3=frtcount*10;
                                    alert('total goa cost is : '+cost3);
                                    console.log('goa cost is : '+cost3);
                                    let retval=confirm(`Do you want to continue to buy another fruite then click OK
                                    otherwise cancel`);
                                    if(retval==true)
                                    {




                                        let fruite=prompt('please enter fruite name');
                                        if (fruite=='mango') 
                                        {
                                            let retval=confirm(`each goa cost is 15/-
                                            Do you want to buy or not`);
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*15;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='') 
                                                    {
                                                        let retval=confirm('each'+(fruite)+`fruite cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;
                                            
                                            
                                        }
                                        else
                                        {



                                            let retval=confirm('each'+(fruite)+`fruite cost is 10/-
                                                        Do you want to buy or not`);                                           
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*10;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='') 
                                                    {
                                                        let retval=confirm(`each goa cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;




                                        }








                                    }
                                    else
                                    {
                                        alert('total fruites cost is : '+(cost1+cost2+cost3));
                                        console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                        
                                    }

                                    if(!retval)break;
                                }
                                else
                                {
                                    alert('total fruites cost is : '+(cost1+cost2));
                                    console.log('total fruites cost is : '+(cost1+cost2));
                                    
                                }
                                if(!retval)break;



                            }
                            else
                            {



                                let retval=confirm('each'+(fruite)+`fruite cost is 10/-
                                                        Do you want to buy or not`);

                                
                                if (retval==true)
                                {
                                    let frtcount=+prompt('please enter how many you want');
                                    let cost3=frtcount*10;
                                    alert('total'+(fruite)+'cost is : '+cost3);
                                    console.log('goa cost is : '+cost3);
                                    let retval=confirm(`Do you want to continue to buy another fruite then click OK
                                    otherwise cancel`);
                                    if(retval==true)
                                    {




                                        let fruite=prompt('please enter fruite name');
                                        if (fruite=='goa') 
                                        {
                                            let retval=confirm(`each goa cost is 10/-
                                            Do you want to buy or not`);
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*10;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='mango') 
                                                    {
                                                        let retval=confirm(`each goa cost is 15/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*15;
                                                            alert('total mango fruites cost is : '+cost5);
                                                            console.log('mango fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;
                                            
                                            
                                        }
                                        else(fruite=='mango')
                                        {



                                            let retval=confirm(`each mango fruite cost is 15/-
                                                        Do you want to buy or not`);                                           
                                            if (retval==true)
                                            {
                                                let frtcount=+prompt('please enter how many you want');
                                                let cost4=frtcount*15;
                                                alert('total goa cost is : '+cost4);
                                                console.log('goa cost is : '+cost4);
                                                let retval=confirm(`Do you want to continue to buy any other fruite then click OK
                                                otherwise cancel`);
                                                if(retval==true)
                                                {
                                                    let fruite=prompt('please enter fruite name');
                                                    if (fruite=='goa') 
                                                    {
                                                        let retval=confirm(`each goa cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                        
                                                        
                                                    }
                                                    else
                                                    {
                                                        let retval=confirm(`each goa cost is 10/-
                                                        Do you want to buy or not`);
                                                        if (retval==true)
                                                        {
                                                            let frtcount=+prompt('please enter how many you want');
                                                            let cost5=frtcount*10;
                                                            alert('total other fruites cost is : '+cost5);
                                                            console.log('other fruites cost is : '+cost5);
                                                            
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4+cost5));
                                                            if(alert)break;                                                                
                                                        }
                                                        else
                                                        {
                                                            alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                            
                                                        }
                                                        if(!retval)break;
                                                    }



                                                }
                                                else
                                                {
                                                    alert('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    console.log('total fruites cost is : '+(cost1+cost2+cost3+cost4));
                                                    
                                                }

                                                if(!retval)break;
                                            }
                                            else
                                            {
                                                alert('total fruites cost is : '+(cost1+cost2+cost3));
                                                console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                                
                                            }
                                            if(!retval)break;




                                        }








                                    }
                                    else
                                    {
                                        alert('total fruites cost is : '+(cost1+cost2+cost3));
                                        console.log('total fruites cost is : '+(cost1+cost2+cost3));
                                        
                                    }

                                    if(!retval)break;
                                }
                                else
                                {
                                    alert('total fruites cost is : '+(cost1+cost2));
                                    console.log('total fruites cost is : '+(cost1+cost2));
                                    
                                }
                                if(!retval)break;







                            }








                        }
                        else
                        {
                            alert('total fruites cost is : '+(cost1+cost2));
                            console.log('total fruites cost is : '+(cost1+cost2));
                            
                        }

                        if(!retval)break;
                    }
                    else
                    {
                        alert('total fruites cost is : '+(cost1));
                        console.log('total fruites cost is : '+(cost1));
                        
                    }
                    if(!retval)break;
                    
                    
                }
                else if (fruite=='goa')
                {
                    
                }
                else if (fruite=='mango')
                {
                    
                }
                else
                {

                }

                
            }
            else
            {
                alert('total fruites cost is : '+cost1);
                console.log('total fruites cost is :'+cost1);
                
            }
            if(!retval)break;

            
        }
        if(!retval)break;
    }
    else
    {
        let retval=confirm(`each orange cost is 15/-
        Do you want to buy or not`);
        if (retval==true)
        {
            let frtcount=prompt('please enter how many you want')
            let cost=frtcount*15;
            alert('total orange cost is : ',cost);
            console.log(cost);
            // return true
            
        }
        else
        {
            //return false;
        }
    }
}
//console.log(frtarray);

