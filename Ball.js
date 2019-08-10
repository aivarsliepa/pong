class Ball {
  /**
   *
   * @param {Game} game
   */
  constructor(game, isLeft = false) {
    this.game = game;
    this.r = 25;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(7, 7);

    if (random(1) > 0.5) {
      this.velocity.set(-this.velocity.x, this.velocity.y);
    }
  }

  draw() {
    fill("#fff");
    circle(this.position.x, this.position.y, this.r * 2);
    // rect(this.position.x, this.position.y, this.r * 2, this.r * 2, 25);
  }

  update() {
    const nextPosition = this.getNextPosition();

    if (this.isTopCollision(nextPosition) || this.isBottomCollision(nextPosition)) {
      this.velocity.set(this.velocity.x, -this.velocity.y);
    } else if (this.isLeftPlayerCollision(nextPosition)) {
      this.velocity.set(Math.abs(this.velocity.x), this.velocity.y);
    } else if (this.isRightPlayerCollision(nextPosition)) {
      this.velocity.set(-Math.abs(this.velocity.x), this.velocity.y);
    } else if (this.isLeftCollision(nextPosition)) {
      gameOver = true;
      rightScore++;
    } else if (this.isRightCollision(nextPosition)) {
      gameOver = true;
      leftScore++;
    }

    if (chaossMode) {
      if (random(1) < 0.001) {
        this.velocity.set(-this.velocity.x, -this.velocity.y);
      } else {
        if (random(1) < 0.005) {
          this.velocity.set(this.velocity.x, -this.velocity.y);
        }
        if (random(1) < 0.002) {
          this.velocity.set(-this.velocity.x, this.velocity.y);
        }
      }
    }

    this.position.add(this.velocity);
  }

  getNextPosition() {
    return this.position.copy().add(this.velocity);
  }

  isTopCollision(nextPosition) {
    return nextPosition.y - this.r < 0;
  }

  isLeftCollision(nextPosition) {
    return nextPosition.x - this.r < 0;
  }

  isBottomCollision(nextPosition) {
    return nextPosition.y + this.r > height;
  }

  isRightCollision(nextPosition) {
    return nextPosition.x + this.r > width;
  }

  isLeftPlayerCollision(nextPosition) {
    const player = this.game.playerLeft;

    return player.x + player.width > this.position.x - this.r && this.isInVerticalRangeOfPlayer(nextPosition, player);
  }

  isRightPlayerCollision(nextPosition) {
    const player = this.game.playerRight;

    return player.x < this.position.x + this.r && this.isInVerticalRangeOfPlayer(nextPosition, player);
  }

  /**
   *
   * @param {*} nextPosition
   * @param {Player} player
   */
  isInVerticalRangeOfPlayer(nextPosition, player) {
    return player.y <= nextPosition.y && player.y + player.height >= nextPosition.y;
  }
}
