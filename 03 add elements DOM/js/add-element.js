// Create a new element and store it in a variable
var newEl = document.createElement('li');

// Create a text node and store it in a variable
var newText = document.createTextNode('wild grain rice');

// Attach the new text node to 'newEl', the new element
newEl.appendChild(newText);

// Find the position where it should be added
var firstList = document.getElementsByTagName('ul')[0];

// Insert the new element into its position
firstList.appendChild(newEl);