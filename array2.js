var family = ['sandeep','subhash','xyz','km','althaaf'];
for(var index=0;index<family.length;index++)
{
    //console.log(index+':member:'+family[index]);
    if (family[index]==="xyz")
    {
        //family[index]='killer' ; 
        family.splice(index,1,'killer');  
        family.push('xyz');
    }
    
    
}
console.log(family);
