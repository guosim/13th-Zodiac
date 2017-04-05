function submitForm() {
	document.getElementById('email-form').submit();
	document.getElementById('email-field').value = '';
	document.getElementById('email-field').style.pointerEvents = 'none';
	document.getElementById('email-label').style.textAlign = 'center';
	document.getElementById('email-label').innerHTML = 'Thank yous! You will now receive updates for releases, show dates, etc. for 13th Zodiac!';
	document.getElementById('submit-email').style.visibility = 'hidden';
}