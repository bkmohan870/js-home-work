
alert("welcome to fruite basket");
let frtName1 = prompt("Enter Fruite Name : ");
if (frtName1 == 'apple' || frtName1 == 'pineapple' || frtName1 == 'custerdapple' && frtName1 !='')
{
    if (frtName1 == 'apple')
    {
        var cost = confirm(`Each apple cost is 10/-
        can you proceed with this.Then press ok`);
        // if (cost)
        // {
            
        // }
        let applecount = prompt('Enter fruite Count :')
        if (applecount !='' && !isNaN(applecount))
        {
            let frtCost = applecount*10;
            alert('total apples cost :'+frtCost);
            console.log('prurchase fruite : '+frtName1);
            console.log('count of fruites : '+applecount);
            console.log('total cost of fruites : '+frtCost);  




            confirm("do you want to continue to buy another fruites,then press ok");
            let frtName2 = prompt("Enter Fruite Name : ");
            if (frtName2 == 'pineapple' || frtName2 == 'custerdapple' && frtName2 !='')
            {
                if (frtName2 == 'pineapple')
                {
                    confirm(`Each pineapple cost is 25/-
                    can you proceed with this.Then press ok`)
                    
                    let pineapplecount = prompt('Enter fruite Count :')
                    if (pineapplecount !='' && !isNaN(pineapplecount))
                    {
                        
                        let frtCost = pineapplecount*25;
                        alert('total pineapples cost :'+frtCost);
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+pineapplecount);
                        console.log('total cost of fruites : '+frtCost); 
                        
                        

                        confirm("do you want to continue to buy another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'custerdapple')
                        {
                            confirm(`Each custerdapple cost is 15/-
                            can you proceed with this.Then press ok`)

                            let custerdapplecount = prompt('Enter fruite Count :')
                            if (custerdapplecount !='' && !isNaN(custerdapplecount))
                            {
                                
                                let frtCost = custerdapplecount*15;
                                alert('total custerdapples cost :'+frtCost);
                                console.log('prurchase fruite : '+frtName3);
                                console.log('count of fruites : '+custerdapplecount);
                                console.log('total cost of fruites : '+frtCost);  
                            }
                            else
                            {
                                console.log('fruite count should be number only');
                                
                            }
                        }
                        else
                        {
                            alert(`you had only required custerdapple
                            please enter custerdapple only`)
                            console.log('please enter valid fruite name');
                            
                        }


                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }
                        

                }
                else if(frtName2 == 'custerdapple')
                {
                    confirm(`Each custerdapple cost is 15/-
                    can you proceed with this.Then press ok`)
                    let custerdapplecount = prompt('Enter fruite Count :')
                    
                    if (custerdapplecount !='' && !isNaN(custerdapplecount))
                    {
                        let frtCost = custerdapplecount*15;
                        alert('total custerdapples cost :'+frtCost);
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+custerdapplecount);
                        console.log('total cost of fruites : '+frtCost);  


                        alert("do you want to continue to by another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'pineapple' && frtName3 !='')
                        {
                            if (frtName3 == 'pineapple')
                            {
                                confirm(`Each pineapple cost is 25/-
                                can you proceed with this.Then press ok`)
                                let pineapplecount = prompt('Enter fruite Count :')
                                
                                if (pineapplecount !='' && !isNaN(pineapplecount))
                                {
                                    let frtCost = pineapplecount*25;
                                    alert('total pineapples cost :'+frtCost);
                                    console.log('prurchase fruite : '+frtName3);
                                    console.log('count of fruites : '+pineapplecount);
                                    console.log('total cost of fruites : '+frtCost);  
                                }
                                else
                                {
                                    console.log('fruite count should be number only');
                                    
                                }
                            }
                            else
                            {
                                alert(`you had required only custerdapple
                                please enter custerdapple`)
                                console.log('please enter valid fruite name');
                                
                            } 
                        }


                        
                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }

                    
                
                }

                else
                {
                    alert('pleas enter any of these : pineapple/custerdapple');
                    console.log('Enter valid fruite name');
                }
            }
            else
            {
                alert(`enter valid frutename
                please enter any of these : pineapple/custerdapple`)
            }




        }
        else
        {
            console.log('fruite count should be number only');
            
        }












               

            







        
    }
    else if(frtName1 == 'pineapple')
    {
        confirm(`Each pineapple cost is 25/-
        If you satisfy with this,Then press OK`)
        let pineapplecount = prompt('Enter fruite count :');
        if (pineapplecount !='' && !isNaN(pineapplecount))
        {
            let frtCost = pineapplecount*25;
            alert('total pineapples cost :'+frtCost);
            console.log('prurchase fruite : '+frtName1);
            console.log('count of fruites : '+pineapplecount);
            console.log('total cost of fruites : '+frtCost);
            





            confirm("do you want to continue to buy another fruites,then press ok");
            let frtName2 = prompt("Enter Fruite Name : ");
            if (frtName2 == 'apple' || frtName2 == 'custerdapple' && frtName2 !='')
            {
                if (frtName2 == 'apple')
                {
                    confirm(`Each pineapple cost is 10/-
                    can you proceed with this.Then press ok`)
                    let applecount = prompt('Enter fruite Count :')
                    if (applecount !='' && !isNaN(applecount))
                    {
                        let frtCost = applecount*10;
                        alert('total apples cost :'+frtCost);
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+applecount);
                        console.log('total cost of fruites : '+frtCost); 

                        
                        
                        confirm("do you want to continue to buy another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'custerdapple')
                        {
                            confirm(`Each custerdapple cost is 15/-
                            can you proceed with this.Then press ok`)
                            let custerdapplecount = prompt('Enter fruite Count :')
                            
                            if (custerdapplecount !='' && !isNaN(custerdapplecount))
                            {
                                let frtCost = custerdapplecount*15;
                                alert('total custerdapples cost :'+frtCost);
                                console.log('prurchase fruite : '+frtName3);
                                console.log('count of fruites : '+custerdapplecount);
                                console.log('total cost of fruites : '+frtCost);  
                                
                            }
                            else
                            {
                                console.log('fruite count should be number only');
                                
                            }
                        }
                        else
                        {
                            alert(`you had only required custerdapple
                            please enter custerdapple only`)
                            console.log('please enter valid fruite name');
                            
                        }




                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }
                        

                }
                else if(frtName2 == 'custerdapple')
                {
                    confirm(`Each custerdapple cost is 15/-
                    can you proceed with this.Then press ok`)
                    let custerdapplecount = prompt('Enter fruite Count :')
                    
                    if (custerdapplecount !='' && !isNaN(custerdapplecount))
                    {
                        let frtCost = custerdapplecount*15;
                        alert('total custerdapples cost :'+frtCost); 
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+custerdapplecount);
                        console.log('total cost of fruites : '+frtCost); 
                        


                        alert("do you want to continue to by another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'apple' && frtName3 !='')
                        {
                            if (frtName3 == 'apple')
                            {
                                confirm(`Each apple cost is 10/-
                                can you proceed with this.Then press ok`)
                                let applecount = prompt('Enter fruite Count :')
                                
                                if (applecount !='' && !isNaN(applecount))
                                {
                                    let frtCost = applecount*10;
                                    alert('total apples cost :'+frtCost);
                                    console.log('prurchase fruite : '+frtName3);
                                    console.log('count of fruites : '+applecount);
                                    console.log('total cost of fruites : '+frtCost);  
                                }
                                else
                                {
                                    console.log('fruite count should be number only');
                                    
                                }
                            }
                            else
                            {
                                alert(`you had required only custerdapple
                                please enter custerdapple`)
                                console.log('please enter valid fruite name');
                                
                            } 
                        }



                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }

                    
                
                }

                else
                {
                    alert('pleas enter any of these : pineapple/custerdapple');
                    console.log('Enter valid fruite name');
                }
            }
            else
            {
                alert(`enter valid frutename
                please enter any of these : pineapple/custerdapple`)
            }



              
        }

        else
        {
            alert('given fruit count is not a number.please give number only')
            console.log('given fruit count is not a number.please give number only');
            
        }
    }

    else if(frtName1 == 'custerdapple')
    {
        confirm(`Each custerdapple cost is 15/-
        If you satisfy with this,Then press OK`)
        let custerdapplecount = prompt('Enter fruite count :')
        
        if (custerdapplecount !='' && !isNaN(custerdapplecount))
        {
            let frtCost = custerdapplecount*15;
            alert('total custerdapple cost : '+frtCost)
            console.log('prurchase fruite : '+frtName1);
            console.log('count of fruites : '+custerdapplecount);
            console.log('total cost of fruites : '+frtCost);






            confirm("do you want to continue to buy another fruites,then press ok");
            let frtName2 = prompt("Enter Fruite Name : ");
            if (frtName2 == 'apple' || frtName2 == 'pineapple' && frtName2 !='')
            {
                if (frtName2 == 'apple')
                {
                    confirm(`Each apple cost is 10/-
                    can you proceed with this.Then press ok`)
                    let applecount = prompt('Enter fruite Count :')
                    if (applecount !='' && !isNaN(applecount))
                    {
                        let frtCost = applecount*10;
                        alert('total apples cost :'+frtCost);
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+applecount);
                        console.log('total cost of fruites : '+frtCost); 

                        
                        
                        confirm("do you want to continue to buy another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'pineapple')
                        {
                            confirm(`Each pineapple cost is 25/-
                            can you proceed with this.Then press ok`)
                            let pineapplecount = prompt('Enter fruite Count :')
                            
                            if (pineapplecount !='' && !isNaN(pineapplecount))
                            {
                                let frtCost = pineapplecount*25;
                                alert('total pineapples cost :'+frtCost);
                                console.log('prurchase fruite : '+frtName3);
                                console.log('count of fruites : '+pineapplecount);
                                console.log('total cost of fruites : '+frtCost);  
                                
                            }
                            else
                            {
                                console.log('fruite count should be number only');
                                
                            }
                        }
                        else
                        {
                            alert(`you had only required custerdapple
                            please enter custerdapple only`)
                            console.log('please enter valid fruite name');
                            
                        }




                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }
                        

                }
                else if(frtName2 == 'pineapple')
                {
                    confirm(`Each pineapple cost is 25/-
                    can you proceed with this.Then press ok`)
                    let pineapplecount = prompt('Enter fruite Count :')
                    
                    if (pineapplecount !='' && !isNaN(pineapplecount))
                    {
                        let frtCost = pineapplecount*25;
                        alert('total pineapples cost :'+frtCost); 
                        console.log('prurchase fruite : '+frtName2);
                        console.log('count of fruites : '+pineapplecount);
                        console.log('total cost of fruites : '+frtCost); 
                        


                        confirm("do you want to continue to by another fruites,then press ok");
                        let frtName3 = prompt("Enter Fruite Name : ");
                        if (frtName3 == 'apple' && frtName3 !='')
                        {
                            if (frtName3 == 'apple')
                            {
                                confirm(`Each apple cost is 10/-
                                can you proceed with this.Then press ok`)
                                let applecount = prompt('Enter fruite Count :')
                                
                                if (applecount !='' && !isNaN(applecount))
                                {
                                    let frtCost = applecount*10;
                                    alert('total apples cost :'+frtCost);
                                    console.log('prurchase fruite : '+frtName3);
                                    console.log('count of fruites : '+applecount);
                                    console.log('total cost of fruites : '+frtCost);  
                                }
                                else
                                {
                                    console.log('fruite count should be number only');
                                    
                                }
                            }
                            else
                            {
                                alert(`you had required only custerdapple
                                please enter custerdapple`)
                                console.log('please enter valid fruite name');
                                
                            } 
                        }



                    }
                    else
                    {
                        console.log('fruite count should be number only');
                        
                    }

                    
                
                }

                else
                {
                    alert('pleas enter any of these : pineapple/custerdapple');
                    console.log('Enter valid fruite name');
                }
            }
            else
            {
                alert(`enter valid frutename
                please enter any of these : pineapple/custerdapple`)
            }





              
          }
          else
          {
              alert('given fruit count is not a number.please give number only')
              console.log('given fruit count is not a number.please give number only');
              
          }
    }
    else
    {
        alert('please enter any of these : apple/pineapple/custerdapple')
    }
   
}
else
{
    alert('please enter any of these : apple/pineapple/custerdapple');
    console.log('Enter valid fruite name');
    
}
