let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
 let text = document.getElementById("name");

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
// function displayText(){
// 	text.
// }

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