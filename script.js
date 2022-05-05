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
}

createSketch(16);
