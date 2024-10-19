<template>
    <div class="display-flex-row game-container flex-one">
      <canvas ref="gameCanvas" width="800" height="600"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'BreakoutGame',
    setup() {
      const gameCanvas = ref(null);
  
      onMounted(() => {
        const canvas = gameCanvas.value;
        const ctx = canvas.getContext('2d');
  
        const ballRadius = 10;
        let x = canvas.width / 2;
        let y = canvas.height - 30;
        let dx = 2;
        let dy = -2;
  
        const paddleHeight = 10;
        const paddleWidth = canvas.width / 2;
        let paddleX = (canvas.width - paddleWidth) / 2;
  
        const brickRowCount = 3;
        const brickColumnCount = 15;
        const brickWidth = (canvas.width - 30) / brickColumnCount;
        const brickHeight = 20;
        const brickPadding = 5;
        const brickOffsetTop = 30;
        const brickOffsetLeft = 15;
  
        let rightPressed = false;
        let leftPressed = false;
  
        const bricks = [];
        for (let c = 0; c < brickColumnCount; c++) {
          bricks[c] = [];
          for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
          }
        }
  
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
  
        function keyDownHandler(e) {
          if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = true;
          } else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = true;
          }
        }
  
        function keyUpHandler(e) {
          if (e.key == "Right" || e.key == "ArrowRight") {
            rightPressed = false;
          } else if (e.key == "Left" || e.key == "ArrowLeft") {
            leftPressed = false;
          }
        }
  
        function collisionDetection() {
          for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
              const b = bricks[c][r];
              if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                  dy = -dy;
                  b.status = 0;
                }
              }
            }
          }
        }
  
        function drawBall() {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
  
        function drawPaddle() {
          ctx.beginPath();
          ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
  
        function drawBricks() {
          for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
              if (bricks[c][r].status == 1) {
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
              }
            }
          }
        }
  
        function draw() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawBricks();
          drawBall();
          drawPaddle();
          collisionDetection();
  
          if (x + dx > canvas.width - ballRadius || x - dx < ballRadius) {
            dx = -dx;
          }
  
          if (y + dy < ballRadius) {
            dy = -dy;
          } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
              dy = -dy;
            } else {
              document.location.reload();
            }
          }
  
          if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
          } else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
          }
  
          x += dx;
          y += dy;
          requestAnimationFrame(draw);
        }
  
        draw();
      });
  
      return {
        gameCanvas
      };
    }
  };
  </script>
  
  <style scoped>
  .game-container {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  