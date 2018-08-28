var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#808080";

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

function initPieces() {
	drawPiece("a1","R","white");
	drawPiece("b1","N","white");
	drawPiece("h1","R","white");
	drawPiece("a2","P","white");
	drawPiece("b2","P","white");
	drawPiece("c2","P","white");
	drawPiece("d2","P","white");
	drawPiece("e2","P","white");
	drawPiece("f2","P","white");
	drawPiece("g2","P","white");
	drawPiece("h2","P","white");
}

function drawPiece(an, type, colour) {
  const whitePieces = [];
  whitePieces.K = '\u2654';
  whitePieces.Q = '\u2655';
  whitePieces.R = '\u2656';
  whitePieces.B = '\u2657';
  whitePieces.N = '\u2658';
  whitePieces.P = '\u2659';

  const blackPieces = [];
  blackPieces.K = '\u265A';
  blackPieces.Q = '\u265B';
  blackPieces.R = '\u265C';
  blackPieces.B = '\u265D';
  blackPieces.N = '\u265E';
  blackPieces.P = '\u265F';

  const column = 'abcdefgh';
  const columnIndex = column.indexOf(an[0]);

  const row = '87654321';
  const rowIndex = row.indexOf(an[1]);

  ctx.font = '80px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  const columnCoord = (columnIndex * 80) + 40;
  const rowCoord = (rowIndex * 80) + 70;

  let pieces = [];
  if (colour === 'white') {
    pieces = whitePieces;
  } else {
    pieces = blackPieces;
  }

  ctx.fillText(pieces[type], columnCoord, rowCoord);
}

function highlightTile() {
  // TODO: highlight a tile with a coloured border
}

drawTiles();
initPieces();