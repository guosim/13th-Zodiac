function submitForm() {
	document.getElementById('email-form').submit();
	document.getElementById('email-field').value = '';
	document.getElementById('email-field').style.pointerEvents = 'none';
	document.getElementById('email-label').style.textAlign = 'center';
	document.getElementById('email-label').innerHTML = 'Thank you for following us!';
	document.getElementById('submit-email').style.visibility = 'hidden';
}