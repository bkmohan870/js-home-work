var user = new Object();
var accounts = new Array();
alert('Welcome 2 State Bank E-Corner')
while (true)
{
    var options=prompt(`select what transaction you want
    1.Balance Enquiry
    2.Withdraw
    3.Deposit
    4.Create Account
    5.Exit`)
    if (options==5)
    {
        break;
    }
    else
    {
        switch (options) {
            case '1': case 'Balnce Enquiry' : 
            showBalance();
            break;

            case '2' : case 'Withdraw' :
            withdrawAmount();
            break;

            case '3' : case 'Deposit' :
            depositAmount();
            break;

            case '4' : case 'Create Account' :
            openAccount();
            console.log(openAccount);
            break;
        
            default:
            alert('Invalid Option')
            break;
        }
    }
}
function openAccount()
{
    const accountNo = prompt('Enter account Number');
    const accountBalance = +prompt('Enter opening balance');
    var accountName = prompt('Enter accountant Name');
    var accountEmail=prompt('Enter Email');
    var phoneNo=prompt('Enter Mobile Number');

    user={};

    user.name=accountName;
    user.accountNo=accountNo;
    user.email=accountEmail;
    user.mobile=phoneNo;
    user.balance=accountBalance;

    accounts.push(user)

}

console.log(accounts);
function depositAmount()
{
    findingAccount();
    var damount=+prompt("Enter amount to deposit");
    if (damount<=50000)
    {
        alert('Deposited successfully!');
        user.balance+=damount;
        alert(`Your Current balance is : ${user.balance}`);
    }
    else
    {
        alert('you dont have permission to deposit 50000 and more')
    }

}

function showBalance()
{
    // var accountNo=prompt('Enter Account Number');
    // for (account in accounts)
    // {
    //     //console.log(accounts[account]);
        
    //     if(accounts[account].accountNo==accountNo)
    //     {
    //         console.log('Account Found');
    //         alert(`${user.name} has Balance : ${user.balance}`);
                        
    //     }
    //     else
    //     {
    //         console.log("Account Doesn't Exist");
            
    //     }
    // }

    findingAccount();
    alert(`${user.name} has Balance : ${user.balance}`);
}

//console.log(showBalance);

function withdrawAmount()
{


    findingAccount();
    //alert(`Your Current Balance is : ${user.balance}`);
    var wamount=+prompt('Enter Amount to Withdraw');
    var temp=user.balance-(+wamount);

    if (wamount<20000)
    {
        if (temp>=1000)
        {
            alert('Withdraw Successful!');
            user.balance=user.balance-(+wamount);  
            alert('your remaining bal is : '+user.balance);
        }
        else
        {
            alert('You should maintain minimum 1000/-')
        }
    }
    else
    {
        alert('Maximum withdraw limit is 20000 only');
        
    }
    


    // var accountNo=prompt('Enter Account Number');
    // for (account in accounts)
    // {
    //     console.log(accounts[account]);
        
        
    //     if(accounts[account].accountNo==accountNo)
    //     {
    //         console.log('Account Found');
    //         alert(`Your Current Balance is : ${user.balance}`);
    //         var amount=prompt('Enter Amount to Withdraw');
    //         alert('Withdraw Successful!');
    //         user.balance=user.balance-(+amount);  
    //         alert('your remaining bal is : '+user.balance);   
    //     }
    //     else
    //     {
    //         alert('Un Authorised user please check once again and retype account Number')
    //         console.log("Account Doesn't Exist");
            
    //     }
    // }
}
function findingAccount(accountNo)
{
    var accountNo=prompt('Enter Account Number');
    for (account in accounts)
    //for(let i=0;i<=accounts.length;i++)
    {
        //console.log(accounts[account]);
        
        if(accounts[account].accountNo==accountNo)
        {
            console.log('Account Found');
            alert(`Your current Balance is  : ${user.balance}`);
                        
        }
        // else
        // {
        //     console.log("Account Doesn't Exist");
        //     alert('UnAuthorised user or please check once and retype account number');
        //     break;
            
        // }
        //if(!accounts[account].accountNo) break;
    }
}
