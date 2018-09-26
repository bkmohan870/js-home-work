var records = new Array();
alert('welcome 2 my page');
while (true) {
    var options = prompt(`Select One Option!
    1.Registration
    2.Login
    3.Exit`);
    if (options == '1' || options == 'registration' || options == '2' || options == 'login') {
        switch (options) {
            case '1': case 'registration':
                console.log('Registration selected');
                var name = prompt('enter your name');
                var email = prompt('enter email');
                var password = prompt('enter your password');
                var user = new Object();
                user.name = name;
                user.email = email;
                user.password = password;
                alert('registration successfull')
                //console.log(user);
                records.push(user);
                console.log(records);
                break;
            case '2': case 'login':
                console.log('Login Selected');
                var email = prompt('enter email');
                var password = prompt('enter your password');
                for (index in records) {
                    //console.log(records[index]);
                    if (records[index].email === email && records[index].password === password) {
                        alert('Login Success');

                    }
                    else {
                        alert('Login Fail')
                    }

                }
                break;

            case '3': case 'exit':
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


