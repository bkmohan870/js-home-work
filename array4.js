var ips=['192.162.13.1','192.162.13.2','192.162.13.3','192.162.13.4',
'192.162.13.5','192.162.13.6','192.162.13.7','192.162.13.8','192.162.13.9'];
var names = ['Steve Smith','Jhon Smith','Will Smith'];
var age = [28,29,30];

combo = [ips,names,age,'this is string'];
console.log(combo);

for (let comboindex = 0; comboindex < combo.length; comboindex++)
{
    //console.log(combo[comboindex]);
    for (let innerindex = 0; innerindex < combo[comboindex].length; innerindex++)
    {
        console.log(combo[comboindex][innerindex]);        
    }

    
}
