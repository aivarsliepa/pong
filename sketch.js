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
  createCanvas(1280, 720).parent("sketch-container");
  setupGame();
}

function draw() {
  background(55);
  game.update();
  game.draw();

  textSize(40);
  textAlign(CENTER);

  text(`${chaossMode ? "Chaoss |" : ""} Score ${leftScore} : ${rightScore}`, width / 2, height);

  if (gameOver) {
    text("Score!", width / 2, height / 2);
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

  // 79 -> "O"
  if (keyCode === 79) {
    chaossMode = !chaossMode;
  }
}
