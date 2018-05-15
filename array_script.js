/*var arr=[1,2,3,4,5]
function printReverse(arr)
{
var list=[];
for(var j=arr.length-1;j>=0;j--)
{
list.push(arr[j]);
}
list.forEach(function(element)
{
console.log(element);
});
}
printReverse(arr);*/
/*var arr=[1,1,1,1];
isUniform(arr);
function isUniform(arr)
{
    var len=arr.length;
        for(var j=0;j<len-1;j++)
        {
            if(arr[j]!=arr[j+1])
            {
                console.log("false");
            }
        }
        console.log(true);
}*/
var arr=[1,22,30];
var result=function(arr)
{
    var sum=0;
  arr.forEach(function(element)
{
sum=sum+element;
});
return sum;
}
console.log(result(arr));