class Game {
  constructor() {
    this.playerLeft = new Player(true);
    this.playerRight = new Player();
    this.ball = new Ball(this);
  }

  draw() {
    this.playerLeft.draw();
    this.playerRight.draw();
    this.ball.draw();
  }

  update() {
    this.playerLeft.update();
    this.playerRight.update();
    this.ball.update();
  }
}
