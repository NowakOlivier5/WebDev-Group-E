let rOcean = new Array ("images/locean0.png", "images/locean1.png", "images/locean2.png", "images/locean3.png", "images/locean4.png", "images/locean5.png", "images/locean6.png", "images/locean7.png");

function randomPic(){
	var randomNum = Math.floor(Math.random() * rOcean.length);
	document.getElementById("raImage").src = rOcean[randomNum];
}



function validateFormL(){
	if(document.getElementById("male-l").checked == false && document.getElementById("female-l").checked == false && document.getElementById("other-l").checked == false){
		alert("You must select a gender.");
	}
	if(document.getElementById("other-l").checked == true && document.getElementById("otherText-l").value == ""){
		alert("You must specify your genter.");
	}
	if(document.getElementById("impN-l").checked == false && document.getElementById("impY-l").checked == false){
		alert("You must select your opinion on if its important or not.");
	}
}
