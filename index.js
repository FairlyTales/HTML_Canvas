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
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();

// ctx.fill();

// // drawing circles and an arcs, drawing smiley face
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// ctx.beginPath();

// // head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// // Mouth (clockwise)
// ctx.moveTo(centerX + 100, centerY);
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// // Left eye
// ctx.moveTo(centerX - 60, centerY - 80);
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// // Right eye
// ctx.moveTo(centerX + 100, centerY - 80);
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// ctx.stroke();

// // drawing a text bubble using quadratic curves
// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

//
// ----------------------------------------------------------------------------
//

// Animation
const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = 'purple';
  ctx.fill();
};

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;

  // walls bouncing
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    circle.dx *= -1
  }

  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    circle.dy *= -1
  }

  requestAnimationFrame(update);
};

update();
