var meow = document.getElementById('screen');

// Puts text to screen, if "ac", clears screen and values
function addToScreen(x) {
	meow.value += x;
	if (x === "ac") {
		meow.value = "";
	}
}

// Backspace one number from the end using length
function backspace() {
	var number = meow.value;
	var len = number.length-1;
	var newNumber = number.substring(0, len);
	meow.value=newNumber;
}

// Does the math 
function answer() {
	x = meow.value;
	x = eval(x);
	meow.value = x;
}