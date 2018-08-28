var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#808080";
drawTiles();
initPieces();

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

	column = "abcdefgh";
	column_index = column.indexOf(an[0]);

	row = "87654321";
	row_index = row.indexOf(an[1]);

	ctx.font = "80px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText(pieces[type],column_index*80+40,row_index*80+70);
}

function initPieces() {
	drawPiece("a1","R");
	drawPiece("b1","N");
	drawPiece("h1","R");
	drawPiece("a2","P");
	drawPiece("b2","P");
	drawPiece("c2","P");
	drawPiece("d2","P");
	drawPiece("e2","P");
	drawPiece("f2","P");
	drawPiece("g2","P");
	drawPiece("h2","P");
}