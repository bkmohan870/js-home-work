let count = 3;
let OTP = 12345;

do {
        if (count>=1)
        {
            console.log('OTP is : ',OTP);
            count--;
        }
        else
        {
            OTP = 49001;
            count++;
        }
    


    
} while (count>=0);

// while (count>0)
// {
//     console.log(count);
//     count = count-1;
// }