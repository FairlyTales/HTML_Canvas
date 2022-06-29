const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // Rectangles
// ctx.fillStyle = 'green';
// ctx.fillRect(30, 30, 100, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(140, 30, 100, 100);

// // Rectangle outline
// ctx.strokeRect(250, 30, 100, 100);

// // Clear the rectangle
// ctx.clearRect(25, 25, 140, 90);

// // Text
// ctx.fillStyle = 'black';
// ctx.font = '30px Arial';
// ctx.fillText('Text', 400, 50);

// ctx.lineWidth = 2;
// ctx.strokeStyle = 'green'
// ctx.strokeText('Text', 400, 100);

//
// ----------------------------------------------------------------------------
//

// Paths

// drawing a triangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 150);
// ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke();

ctx.fill();