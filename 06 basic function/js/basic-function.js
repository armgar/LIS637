var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage() {
	// These statements are not run until the function is called
	var el = document.getElementById('message');
	el.textContent = msg;
}
// Call the function
updateMessage();