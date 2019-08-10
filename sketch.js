/**
 * @type {Game}
 */
let game;
let gameOver = false;
const FRAME_RATE = 60;

let leftScore = 0;
let rightScore = 0;

let chaossMode = false;

function setup() {
  frameRate(FRAME_RATE);
  createCanvas(1280, 768).parent("sketch-container");
  setupGame();
}

function draw() {
  background(55);
  game.update();
  game.draw();

  textSize(40);
  textAlign(CENTER);
  text(`Score ${leftScore} : ${rightScore}`, width / 2, height);

  if (gameOver) {
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop();
  }
}

function setupGame() {
  game = new Game();
  gameOver = false;
  loop();
}

function keyPressed() {
  // 32 -> SPACE KEY
  if (gameOver && keyCode === 32) {
    setupGame();
  }
}

// wrapper for p5 dist()
function distance(pos1, pos2) {
  return dist(pos1.x, pos1.y, pos2.x, pos2.y);
}
