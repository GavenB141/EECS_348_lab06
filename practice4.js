const input = document.getElementById("size");

function reload() {
	window.location.href =
		"https://people.eecs.ku.edu/~g490b151/practice4.php?size=" + input.value;
}
