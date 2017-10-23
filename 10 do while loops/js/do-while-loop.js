var i = 1;         //Set counter to 1
var msg = '';      //Initialize message to empty string


// Store 5 times table in a variable
do {
	msg += i + ' x 5 = ' + (i * 5) + '<br/>';
	i++;
} while (i < 1);
// This code in the loop still runs even though i is 1

document.getElementById('answer').innerHTML = msg;