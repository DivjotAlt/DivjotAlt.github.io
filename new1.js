function longer(a, b) {
	if (a.length > b.length) {
		return a;
	} else {
		return b;
	};
};
console.log(longer("significant", "short"));

function changeContent(content) {
	document.getElementById("content").innerHTML = content;
	document.getElementById("iframe").style.display = "none";
};

function enter() {
	var input = document.getElementById("name").value;
	console.log(input);	
	let noOfVowels = 0;
	let total = "";
	for (var element of input) {
		if (element == "a" || 
			(element == "e" || 
				(element == "i" || 
					(element == "o" || 
						(element == "u" || 
							(element == "A" || 
								(element == "E" || 
									(element =="I" || 
										(element == "O" || 
											(element == "U")
										)
									)
								)
							)
						)
					)
				)
			)
		) {
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
	document.querySelector("#headd").style = "display: block;";
	document.querySelector("#letterS").style = "display: inline;";
	document.querySelector("#wordAnd").style = "display:inline;";
	document.querySelector("#sAnd").textContent = "s are";
	if (noOfVowels === 0) {
		document.querySelector("#headd").style = "display: none;";
		document.querySelector("#wordAre").style = "display:none";
	};
	if (noOfVowels === 1) {
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