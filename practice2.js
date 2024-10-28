const rgbInput = document.getElementById("rgb");
const borderInput = document.getElementById("border-width");
const paragraph = document.getElementById("paragraph");

rgbInput.value = "#000000";
borderInput.value = 2;

function update() {
	paragraph.style["color"] = rgbInput.value;
	paragraph.style["border-color"] = rgbInput.value;
	paragraph.style["border-width"] = `${borderInput.value}px`;
}
