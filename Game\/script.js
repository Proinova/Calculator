let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 8;
let ny = 8;
let sqside = 60;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "thinker_bell.jpg";
let darvoimg = new Image();
darvoimg.src = "1.png";


canvas.width = nx * sqside;
canvas.height = ny * sqside;

function drawMap() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside,	sqside, sqside);
	context.drawImage(darvoimg, 2 * sqside, 3 * sqside,	sqside, sqside);
	for (let i=0; i<nx; i++) {
		for (let j=0; j<ny; j++) {
			context.strokeRect(i*sqside, j*sqside, sqside, sqside);
		}
	}
}

drawMap();

canvas.onclick = function(d) {
		let x = d.x - canvas.offsetLeft;
		let y = d.y - canvas.offsetTop;
		herox = Math.floor(x / sqside);
		heroy = Math.floor(y / sqside);
		console.log(herox + " " + heroy);
		drawMap();
}
