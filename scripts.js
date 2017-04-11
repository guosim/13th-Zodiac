function submitForm () {
	document.getElementById('email-form').submit();
	document.getElementById('email-field').value = '';
	document.getElementById('email-field').style.pointerEvents = 'none';
	document.getElementById('email-label').style.textAlign = 'center';
	document.getElementById('email-label').innerHTML = 'Thank you!';
	document.getElementById('submit-email').style.visibility = 'hidden';
}
window.onload = function () {

	var modal = document.getElementsByClassName('modal')[0];
	var snapchat = document.getElementById('snapchat-modal');
	var close = document.getElementsByClassName('close-modal')[0];

	snapchat.onclick = function() {
		modal.style.display="block";
	}

	close.onclick = function() {
		modal.style.display="none";
	}
	window.onclick = function(e) {
		if (e.target == modal) {
			modal.style.display = "none";
		}
	}
};