// Find hot items
var elts = document.getElementsByClassName('hot');

// If 3 or more are found
if (elts.length >= 3) {
	// Select the 3rd one from the NodeList stored in 'elts'
	var elt = elts[2];
	// Make it a cool' item instead
	elt.className = 'cool';
}



