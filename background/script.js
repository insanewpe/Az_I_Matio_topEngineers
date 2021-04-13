var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color1.value 
	+ ", "
	+ color2.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// background-image: linear-gradient(
//     to right,
//     #ff8177 0%,
//     #ff867a 0%,
//     #ff8c7f 21%,
//     #f99185 52%,
//     #cf556c 78%,
//     #b12a5b 100%
//   );