alert('KM Bank Welcomes you');


let accbal=2000;
let trnsctiontype = prompt('Enter what type of transaction');
if (trnsctiontype == 'withdraw' || trnsctiontype == 'deposit' || trnsctiontype == 'balance') 
{
    
  if (trnsctiontype=='withdraw')
  {
    
    let wamnt=+prompt('please enter withdrawl amount');
    if (accbal>0&&accbal<1000)
    {
        alert(`your account should be maintain minimum balance
        you havn't permission to withdraw`);
        alert('your account balance is'+accbal);
        console.log(accbal);
        

    }
    else if (accbal==0)
    {
        alert('your account has nill balance please deposit amount') ;
        
        let damnt=prompt('please enter deposit amount');
        alert(`deposited successfully
        your current balance is : `+(accbal+damnt));
    }
    else
    {
        accbal -= wamnt;
        console.log(accbal);
        
        alert(`Thank you for using KM Bank
        your current balance is : `+ accbal);
    }
  }
  else if(trnsctiontype=='deposit')
  {
      let damnt=prompt('please enter deposit amount');
      //accbal += Number(damnt);
      alert(`deposited successfully
      your current balance is : `,Number(accbal+damnt));
  }  
  else
  {
    alert('your current balance is : '+accbal);
    if (accbal==0)
    {
        let damnt=prompt('please enter deposit amount');
        accbal += damnt;
        alert(`deposited successfully
        your current balance is : `+ accbal);
    }
  }
}
else
{
    alert('please enter withdraw/deposit')
}