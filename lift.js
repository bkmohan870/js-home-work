alert('welcome to lift');
alert('presently u r in groundfloor');
let strno = +prompt('enter floor number');
if (strno>0)
{
    alert('lift going up')
    alert(strno+'floor"doors opened"')
    for (let i = 0; i <=5; i++) 
    {
          
        let strnow = +prompt('enter floor no');
        if (strnow>strno) 
        {
            alert('lift is going up');
            alert(strnow+'floor "doors opened"')
        }
        else if(strnow<strno)
        {
            alert('lift going down');
            alert(strnow+'floor "doors opened"')   
        }
        else
        {
            alert('presently youare in same floor');
        }
        strno = strnow;
        
    }
      
} 
else if(strno<0)
{
    alert('lift going up')
    alert(strno+'floor"doors opened"')
    for (let i = 0; i <=5; i++) 
    {
          
        let strnow = +prompt('enter floor no');
        if (strnow>strno) 
        {
            alert('lift is going up');
            alert(strnow+'floor "doors opened"')
        }
        else 
        {
            alert('lift going down');
            alert(strnow+'floor "doors opened"')   
        }
        strno = strnow;
        
    }
}
else
{
    alert('please enter number only');

    if (strno>0)
    {
    alert('lift going up')
    alert(strno+'floor"doors opened"')
    for (let i = 0; i <=5; i++) 
    {
          
        let strnow = +prompt('enter floor no');
        if (strnow>strno) 
        {
            alert('lift is going up');
            alert(strnow+'floor "doors opened"')
        }
        else 
        {
            alert('lift going down');
            alert(strnow+'floor "doors opened"')   
        }
        strno = strnow;
        
    }
      
} 
else if(strno<0)
{
    alert('lift going up')
    alert(strno+'floor"doors opened"')
    for (let i = 0; i <=5; i++) 
    {
          
        let strnow = +prompt('enter floor no');
        if (strnow>strno) 
        {
            alert('lift is going up');
            alert(strnow+'floor "doors opened"')
        }
        else 
        {
            alert('lift going down');
            alert(strnow+'floor "doors opened"')   
        }
        strno = strnow;
        
    }
}

}