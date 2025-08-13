var randomnumber1 = Math.random();
randomnumber1=randomnumber1*6; 
randomnumber1=Math.floor(randomnumber1)+1; 

var randomimage="images/dice"+randomnumber1+".png"; 
document.querySelectorAll("img")[0].setAttribute("src",randomimage);



var randomnumber2 = Math.random();
randomnumber2=randomnumber2*6; 
randomnumber2=Math.floor(randomnumber2)+1; 

var randomimage1="images/dice"+randomnumber2+".png"; 
document.querySelectorAll("img")[1].setAttribute("src",randomimage1);


if(randomnumber1>randomnumber2)
{ 
    document.querySelector("h1").innerText="Player 1 wins";
}
else if(randomnumber2>randomnumber1)
{ 
    document.querySelector("h1").innerText="Player 2 wins";
}
else{ 
    document.querySelector("h1").innerText="Draw";
}