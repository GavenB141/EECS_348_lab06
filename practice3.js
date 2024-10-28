const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const message = document.getElementById("message");

function verify () {
	if (password.value.length < 8) {
		message.innerHTML = "*Password must be at least 8 characters in length!";
		message.style.color = "red";
		return;
	} else if (password.value != confirmPassword.value) {
		message.innerHTML = "*Passwords do not match!";
		message.style.color = "red";
		return;
	}

	message.innerHTML = "Password verified successfully!";
	message.style.color = "green";
}
