var button = document.querySelector("button");
var body = document.querySelector("body");
//var isColor = true;
button.addEventListener("click",function(){
  /*  if(isColor)
     body.style.background="purple";
    else
    body.style.background="white"
    isColor=!isColor;
});*/
document.body.classList.toggle("purple");
});
