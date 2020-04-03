var numofsq=6;
var colors=generateRandom(numofsq);
var squares=document.querySelectorAll(".square");
var picked=colors[3];
var picked=pickColor();
var messaged=document.querySelector("#message");
var colorDisplay=document.getElementById("colordisplay");
var reset=document.querySelector("#stripe");
var easybtn= document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numofsq=3
	colors=generateRandom(3);
	picked=pickColor();
	colorDisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none"
		}
}	})
hardbtn.addEventListener("click",function()
{
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	colors=generateRandom(6);
	numofsq=6
	picked=pickColor();
	colorDisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.background=colors[i];
		
		
			squares[i].style.display="block";
		
	}

})
reset.addEventListener("click",function(){
	colors=generateRandom(numofsq);
	picked=pickColor();
	colorDisplay.textContent=picked;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
})
var h1=document.querySelector("h1");
colorDisplay.textContent=picked;
for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.background;
		if(clickedColor===picked){
			messaged.textContent="Correct!";
			reset.textContent="Play Again"
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="grey";
			messaged.textContent="Try Again!!";
		}
	})
}
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandom(num){
	var arr=[]
	for(var i=0;i<num;i++){

arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}