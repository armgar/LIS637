var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
// Apply the class name of 'inStock' to the element
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;