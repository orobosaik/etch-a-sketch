// Create sketch divs in html
function createSketch(num) {
	let container = document.createElement("div");
	container.className = "container";
	document.querySelector("body").appendChild(container);

	info = document.querySelector(".info");
	info.textContent = `Sketch Pad (${num}x${num})`;

	for (let i = 0; i < num; i++) {
		let div = document
			.querySelector(".container")
			.appendChild(document.createElement("div"));
		for (let i = 0; i < num; i++) {
			div.appendChild(document.createElement("div"));
		}
  }
  colorSketch()
}

// Event listener for color change
function colorSketch() {
	child = document.querySelectorAll(".container div div");
	child.forEach((div) => {
		div.addEventListener("mouseover", changeColor);
	});
}

// Change the color randomly
function changeColor(e) {
	x = Math.floor(Math.random() * 255) + 1;
	y = Math.floor(Math.random() * 255) + 1;
	z = Math.floor(Math.random() * 255) + 1;

	bColor = e.target.style.backgroundColor;

	if (bColor.includes("rgb")) {
    e.target.style.backgroundColor = "";

		split = bColor
			.substring(4, bColor.length - 1)
			.replace(/ /g, "")
      .split(",");

		r = parseInt(split[0]);
		g = parseInt(split[1]);
		b = parseInt(split[2]);

    // Subtract form the number till it gets to 0. 225/10 = 22.5
		e.target.style.backgroundColor = `rgb(${Math.floor(r - 22.5)}, ${Math.floor(
			g - 22.5
		)}, ${Math.floor(b - 22.5)})`;
	} else {
		e.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
	}
}

let btn = document.querySelector(".btn");

// Btn event Listener
btn.addEventListener("click", btnPrompt);

// Button prompt to enter number
function btnPrompt() {
	num = +prompt("Please enter a number between 5 and 100");
	if (!num || num < 5 || num > 100) return;
	document
		.querySelector("body")
		.removeChild(document.querySelector(".container"));
	createSketch(num);
}

createSketch(16);
