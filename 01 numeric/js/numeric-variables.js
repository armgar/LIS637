var price;
var quantity;
var total;

price = 6;
quantity = 14;
total = price * quantity;

var el  = document.getElementById('cost');
el.textContent = '$' + total;