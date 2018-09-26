var ips=['192.162.13.1','192.162.13.2','192.162.13.3','192.162.13.4',
'192.162.13.5','192.162.13.6','192.162.13.7','192.162.13.8','192.162.13.9'];
//console.log(ips);
var impips=[];
for(let ip=0;ip<ips.length;ip++)
{
    if (ips[ip]==="192.162.13.3")
    {
        impips.push(ips[ip])    
    }
    if (ips[ip]==="192.162.13.5")
    {
        impips.push(ips[ip])    
    }
    if (ips[ip]==="192.162.13.7")
    {
        impips.push(ips[ip])    
    }
    if (ips[ip]==="192.162.13.9")
    {
        impips.push(ips[ip])    
    }
    
}
console.log(impips);
