var q=document.querySelectorAll("li");
for(var i=0;i<q.length;i++)
{
    q[i].addEventListener("mouseover",function()
{
    this.style.color="red";
});
q[i].addEventListener("mouseout",function()
{
    this.style.color="black";
});
}
