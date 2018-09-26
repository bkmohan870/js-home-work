var ips=['192.162.13.1','192.162.13.2','192.162.13.3','192.162.13.4',
'192.162.13.5','192.162.13.6','192.162.13.7','192.162.13.8','192.162.13.9'];
var names = ['Steve Smith','Jhon Smith','Will Smith' ,'Gramme Smith'];
var ages = [25,26,27,28];
var ids = [128,256,512,1024]


var array2 = [ips,names];
var array3 = [ages,ids];
var emptyarray = [];

var combo =[array2,array3];
for (let comboindex = 0; comboindex < combo.length; comboindex++)
{
    for (let array2index = 0; array2index < combo[comboindex].length; array2index++)
    {
        for (let emptyarrayindex = 0; emptyarrayindex < combo[comboindex][array2index].length; emptyarrayindex++)
        {
            console.log(combo[comboindex][array2index][emptyarrayindex]);
                 
        }                
    }

}