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

// // drawing a triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 150);
// // ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();

// ctx.fill();

// drawing circles and an arcs, drawing smiley face
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.beginPath();

// head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// Mouth (clockwise)
ctx.moveTo(centerX + 100, centerY);
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// Left eye
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// Right eye
ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.stroke();