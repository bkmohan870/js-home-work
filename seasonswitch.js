alert('welcome 2 season checking');
alert('when ever you wnt to exit press "0"')
while (true)
{
    var seson = prompt("please enter any name of month or month number");
    if (seson == '0')
    {
        break;
    }
    else
    {
        switch (seson)
        {
            case '11': case 'nov' : case 'november' :
            case '12': case 'dec' : case 'december' :
            case '01': case '1' : case 'jan' : case 'january' :
            case '02': case '2' : case 'feb' : case 'february' :
            
            alert('WinteR');
            break;
            
            case '03': case '3' : case 'mar' : case 'march' :
            case '04': case '4' : case 'apr' : case 'april' :
            case '05': case '5' : case 'jan' : case 'may' :
            case '06': case '6' : case 'jun' : case 'june' :

            alert('SummeR');
            break;

            case '07': case '7' : case 'jul' : case 'july' :
            case '08': case '8' : case 'aug' : case 'august' :
            case '09': case '9' : case 'sep' : case 'september' :
            case '10': case '10' : case 'oct' : case 'october' :

            alert('RainY');
            break;

            case '0': case 'exit':

            default:
            alert('invalid option')
            break;
        }
    }
        
}
