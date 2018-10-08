var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/ElephantLoad2.jpg')
	{
		myImage.setAttribute('src','images/ElephantLoad1.jpg');
	}
	else
	{
		myImage.setAttribute('src','images/ElephantLoad2.jpg');
	}
}

var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');


function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Performance Engineering is fabulous - ' + myName;
}


if(!localStorage.getItem('name'))
{
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Performance Engineering is fabulous - ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}