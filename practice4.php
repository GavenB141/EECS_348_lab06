<!DOCTYPE html>
<html>
<head>
	<script src="practice4.js" type="text/javascript" defer></script>
</head>
<body>
<form action="javascript:reload()">
<label for="size">Set size:</label>
<input id="size"/>
<button type="submit">Go</button>
</form>
<table>
<?php

$n = $_GET["size"];
if (!$n) {
	$n = 5;
}

echo "<tr><th></th>";
for($i = 1; $i <= $n; $i++)
	echo "<th>" . $i . "</th>";
echo "</tr>";

for($y = 1; $y <= $n; $y++) {
	echo "<tr><th>" . $y . "</th>";
	for($x = 1; $x <= $n; $x++) {
		echo "<td>" . $x * $y . "</td>";
	}
	echo "</tr>";
}

?>
</table>
</body>
<style>
	table {
		border-style: solid;
		border-width: 2px;
	}

	td, th {
		text-align: center;
		border-style: solid;
		border-width: 1px;
		width: 36px;
	}
</style>
</html>
