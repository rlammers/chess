var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#808080";
drawTiles();
drawPiece("a1", "R");

function drawTiles() {
	for (i=80; i<640; i+=160) {
		for (j=0; j<640; j+=160) {
			ctx.fillRect(i,j,80,80);
		}
	}
	for (i=0; i<640; i+=160) {
		for (j=80; j<640; j+=160) {
			ctx.fillRect(i,j,80,80);
		}
	}
}

function drawPiece(an, type) {
	var pieces = [];
	pieces["K"] = '\u2654';
	pieces["Q"] = '\u2655';
	pieces["R"] = '\u2656';
	pieces["B"] = '\u2657';
	pieces["N"] = '\u2658';
	pieces["P"] = '\u2659';
	
	ctx.font = "80px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(pieces[type],40,630);
}