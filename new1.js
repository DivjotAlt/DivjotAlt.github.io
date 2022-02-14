console.log("JavaScript file found at the root directory")

function enter() {
	var input = document.getElementById("name").value;
	console.log(input);	
	let noOfVowels = 0;
	let total = "";
	for (var element of input) {
		if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u" || element == "A" || element == "E" || element =="I" || element == "O" || element == "U") {
			noOfVowels++;
			total += element + ", ";
		};
	};
	total = total.slice(0, -1);
	console.log(total);
	total = total.slice(0, -1)
	document.getElementById("number").textContent = noOfVowels;
	document.getElementById("vowels").textContent = total;
	document.getElementById("main").style = "display: block;"
	document.querySelector("#wordAnd").style = "display: inline;"
	document.querySelector("#headd").style = "display: inline;"
	document.querySelector("#letterS").style = "display: inline;";
	document.querySelector("#sAre").textContent = "s are";
	// document.querySelector("#headd").style = "display: block;";
	// document.querySelector("#letterS").style = "display: inline;";
	// document.querySelector("#wordAnd").style = "display:inline;";
	// document.querySelector("#sAnd").innerHTML = "s are";
	if (noOfVowels === 0) {
		console.log("0 vowels detected");
		document.querySelector("#wordAnd").style = "display: none;";
		document.querySelector("#headd").style = "display: none;";
	};
	if (noOfVowels === 1) {
		console.log("1 vowel detected");
		document.querySelector("#letterS").style = "display: none;";
		document.querySelector("#sAre").textContent = " is";
	};
};

var reversedWord = [];
function reverse(string) {
	let i = 0
	for (var element of string) {
		reversedWord[i] = element;
		i++;
	};
	reversedWord.reverse();
	reversedWord = reversedWord.toString();
	reversedWord = reversedWord.replace(/,/g, '');
	console.log(reversedWord);
	reversedWord = [];
};

function enterReverse(string) {
	string = document.getElementById("name").value
	let i = 0
	for (var element of string) {
		reversedWord[i] = element;
		i++;
	};
	reversedWord.reverse();
	reversedWord = reversedWord.toString();
	reversedWord = reversedWord.replace(/,/g, '');
	document.querySelector("#theText").innerHTML = reversedWord;
	document.querySelector("h3").style = "display: block;"
	reversedWord = [];
};

function goToReverse() {
	window.open("https://divjotalt.github.io/reverse", "_self");
};

function goToVowels() {
	window.open("https://divjotalt.github.io/vowels", "_self");
};

function lengthOfString(string) {
	let num = 0;
	for (var element of string) {
		num++;
		if (element === " ") {
			num--;
		};
	};
	return num;
};

function runLengthOfString() {
	var input = document.querySelector("#name").value;
	console.log(input);
	let num = 0;
	for (var element of input) {
		num++;
		if (element === " ") {
			num--;
		};
	};
	document.querySelector("#theNumber").innerHTML = num;
	document.querySelector("#content").style = "display: block;"
	document.querySelector("h3").style = "display: block;"
};

function highlight() {
	let sentence = document.getElementById("sentence").value;
	let find = document.getElementById("find").value;
	let index = sentence.indexOf(find);
	let myArray = sentence.split("");
	console.log(sentence[index]);
	let indexFound = myArray[index];
	myArray[index] = "<span class='jsresult'>"+indexFound+"</span>";
	indexFound = myArray[index];
	console.log(indexFound);
	myArray = myArray.toString();
	myArray = myArray.replace(/,/g, "");
	document.getElementById("theText").innerHTML = myArray;
	document.querySelector("h3").style = "display: block;"
};

function lowercase() {
	let text = document.getElementById("name").value;
	let lowercaseText = text.toLowerCase();
	document.querySelector("h3").style = "display: block";
	document.getElementById("text").innerHTML = lowercaseText;
};

function uppercase() {
	let text = document.getElementById("name").value;
	let uppercaseText = text.toUpperCase();
	document.querySelector("h3").style = "display: block";
	document.getElementById("text").innerHTML = uppercaseText;
}