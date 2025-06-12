var circle = document.getElementById("circle");
var UpButtn = document.getElementById("UpButtn");
var DownButtn = document.getElementById("DownButtn");

var rotateValue = circle.style.transform;
var rotateSum;

UpButtn.onclick = function(){
	rotateSum = rotateValue + "rotate(90deg)";
	circle.style.transform = rotateSum;
	rotateValue = rotateSum;
	}

DownButtn.onclick = function(){
	rotateSum = rotateValue + "rotate(-90deg)";
	circle.style.transform = rotateSum;
	rotateValue = rotateSum;
	}
		