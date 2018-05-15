/*var i = 0;
while(i<4)
{
var input = Number(prompt("input number"));
var answer = isEven(input);
console.log(answer);
i++;
}
function isEven(input)
{
if(input%2==0)
return true;
return false;
}
*/
/*var i=0;
var a=1;
while(i<4)
{
    var x=Number(prompt("input number"));
    var b=factorial(x);
    console.log(b);
i++;
}*/
function factorial(x)
{
    var a=1;
    for(var i=2;i<=x;i++)
    {
        a*=i;
    }
    return a;
}
