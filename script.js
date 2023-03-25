// Variabel untuk menyimpan canvas dan konteksnya
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variabel untuk menyimpan ukuran dan posisi snake
var snakeSize = 10;
var snakeX = canvas.width / 2 - snakeSize / 2;
var snakeY = canvas.height / 2 - snakeSize / 2;

// Variabel untuk menyimpan arah snake
var direction = "right";

// Fungsi untuk menggambar snake
function drawSnake() {
  ctx.fillStyle = "green";
  ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
}

// Fungsi untuk menghapus canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Fungsi untuk menggerakkan snake
function moveSnake() {
  if (direction == "up") {
    snakeY -= snakeSize;
  } else if (direction == "down") {
    snakeY += snakeSize;
  } else if (direction == "left") {
    snakeX -= snakeSize;
  } else if (direction == "right") {
    snakeX += snakeSize;
  }
}

// Fungsi untuk mengatur arah snake
function setDirection(event) {
  if (event.keyCode == 38) {
    direction = "up";
  } else if (event.keyCode == 40) {
    direction = "down";
  } else if (event.keyCode == 37) {
    direction = "left";
  } else if (event.keyCode == 39) {
    direction = "right";
  }
}

// Fungsi utama
function main() {
  clearCanvas();
  moveSnake();
  drawSnake();
}

// Memanggil fungsi setDirection() ketika tombol ditekan
document.addEventListener("keydown", setDirection);

// Memanggil fungsi main() setiap 100ms
setInterval(main, 100);

// Memanggil fungsi main() ketika tombol ditekan
document.getElementById("up").addEventListener("click", function() {
  direction = "up";
  main();
});

document.getElementById("down").addEventListener("click", function() {
  direction = "down";
  main();
});

document.getElementById("left").addEventListener("click", function() {
  direction = "left";
  main();
});

document.getElementById("right").addEventListener("click", function() {
  direction = "right";
  main();
});
