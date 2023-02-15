var canvas,
  canvasContext,
  ballX = 15,
  ballSpeed = 2,
  ballY = 15,
  ballYSpeed = 2,
  player1Score = 0,
  player2Score = 0,
  showWinningScreen = false,
  winner;
const ballRadius = 15,
  paddleHeight = 100,
  paddleWidth = 10,
  netWidth = 4,
  winningScore = 3;
canvas = document.getElementById("gameCanvas");
canvasContext = canvas.getContext("2d");
var paddle1Y = canvas.height / 2 - paddleHeight / 2,
  paddle2Y = canvas.height / 2 - paddleHeight / 2;

calculateMousePos = (event) => {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = event.clientX - rect.left - root.scrollLeft;
  var mouseY = event.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
};
handleMouseClick = () => {
  if (showWinningScreen) {
    showWinningScreen = false;
  }
};
window.onload = function () {
  setInterval(() => {
    move();
    draw();
  }, 1);
  canvas.addEventListener("mousedown", handleMouseClick);
  canvas.addEventListener("mousemove", function (event) {
    var mousePos = calculateMousePos(event);
    paddle1Y = mousePos.y - paddleHeight / 2;
  });
};
drawNet = () => {
  for (var i = 0; i < canvas.height; i += 40) {
    colorReact(canvas.width / 2 - netWidth, i, netWidth, 20, "white");
  }
};
ballReset = () => {
  if (player1Score >= winningScore) {
    player1Score = 0;
    player2Score = 0;
    winner = "player 1";
    showWinningScreen = true;
  } else if (player2Score >= winningScore) {
    player1Score = 0;
    player2Score = 0;
    winner = "player 2";
    showWinningScreen = true;
  }
  ballX = canvas.width / 2 - 2;
  ballY = canvas.height / 2;
  ballSpeed = -ballSpeed;
};
computerMoverment = () => {
  var paddle2CenterY = paddle2Y + paddleHeight / 2;
  if (paddle2CenterY < ballY - 35) {
    paddle2Y += 3;
  } else if (paddle2CenterY > ballY + 35) {
    paddle2Y -= 3;
  }
};
move = () => {
  computerMoverment();
  ballX += ballSpeed;
  ballY += ballYSpeed;
  if (ballX <= ballRadius) {
    if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
      ballSpeed = -ballSpeed;
      var DeltaY = ballY - (paddle1Y + paddleHeight / 2);
      ballYSpeed = DeltaY * 0.08;
    } else {
      player2Score++;
      ballReset();
    }
  }
  if (ballX >= canvas.width - ballRadius) {
    if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      ballSpeed = -ballSpeed;
      var DeltaY = ballY - (paddle2Y + paddleHeight / 2);
      ballYSpeed = DeltaY * 0.08;
    } else {
      player1Score++;
      ballReset();
    }
  }
  if (ballY >= canvas.height - ballRadius || ballY <= ballRadius) {
    ballYSpeed = -ballYSpeed;
  }
};
draw = () => {
  //background
  colorReact(0, 0, canvas.width, canvas.height, "black");
  if (showWinningScreen) {
    colorReact(0, 0, canvas.width, canvas.height, "black");
    canvasContext.fillStyle = "white";
    canvasContext.font = "30px Arial";
    canvasContext.fillText(
      `${winner} is the winner`,
      canvas.width / 2 - 90,
      100
    );
    return;
  }
  //left paddle
  colorReact(0, paddle1Y, paddleWidth, paddleHeight, "white");
  //Right paddle
  colorReact(
    canvas.width - paddleWidth,
    paddle2Y,
    paddleWidth,
    paddleHeight,
    "white"
  );
  //center line

  drawNet();
  // ball
  colorCircle(ballX, ballY, ballRadius, "white");
  //score
  canvasContext.font = "22px Arial";
  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width - 100, 100);
};
colorCircle = (centerX, centerY, radius, drawColor) => {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
};
colorReact = (leftX, leftY, width, height, drawColor) => {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, leftY, width, height);
};
