var randomnumber=Math.floor(Math.random()*6)+1;

var randomimagesrc="images/"+randomnumber+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesrc);


var randomnumber1=Math.floor(Math.random()*6)+1;

var randomimagesrc1="images/"+randomnumber1+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesrc1);

if(randomnumber>randomnumber1)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!!"
}
else if(randomnumber1>randomnumber)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!!"
}
else{
  document.querySelector("h1").innerHTML="Draw!!"
}
