var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandomGen = document.getElementById("btnRandomGen");


// setting gradient when the body is loaded with defalt colors from inputs
setGradient();

function setGradient() {
	body.style.background =
	`linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
}

function getColorRandom() {
	return `#${Math.floor((Math.random() * 999999) + 1)}`
}

function generateRandomColors() {
	color1.value = getColorRandom();
	color2.value = getColorRandom();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btnRandomGen.addEventListener("click", generateRandomColors)