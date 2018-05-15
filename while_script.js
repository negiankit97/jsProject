console.log("Printing the numbers between -10 and 19");
var x = -10;
while(x<20)
{
    console.log(x);
    x++;
}
console.log("Printing all even numbers between 10 and 40");
var a = 10;
while(a<=40)
{
    if(a%2==0)
    {
        console.log(a);
    }
a++;
}
console.log("printing all odd numbers between 300 and 333");
var x = 300;
while(x<=333)
{
    if(x%2!=0)
    console.log(x);
    x++;
}
console.log("printing all numbers divisible by 5 and 3");
var x=5;
while(x<=50)
{
    if(x%5==0&&x%3==0)
    {
        console.log(x);
    }
    x++;
}