const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
ctx.fillStyle = '#808080';

function drawTiles() {
  for (let i = 80; i < 640; i += 160) {
    for (let j = 0; j < 640; j += 160) {
      ctx.fillRect(i, j, 80, 80);
    }
  }
  for (let i = 0; i < 640; i += 160) {
    for (let j = 80; j < 640; j += 160) {
      ctx.fillRect(i, j, 80, 80);
    }
  }
}

function drawPiece(an, type) {
  const pieces = [];
  pieces.K = '\u2654';
  pieces.Q = '\u2655';
  pieces.R = '\u2656';
  pieces.B = '\u2657';
  pieces.N = '\u2658';
  pieces.P = '\u2659';

  const column = 'abcdefgh';
  const columnIndex = column.indexOf(an[0]);

  const row = '87654321';
  const rowIndex = row.indexOf(an[1]);

  ctx.font = '80px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(pieces[type], (columnIndex * 80) + 40, (rowIndex * 80) + 70);
}

function initPieces() {
  drawPiece('a1', 'R');
  drawPiece('b1', 'N');
}

drawTiles();
initPieces();
