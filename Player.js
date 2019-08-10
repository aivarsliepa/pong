class Player {
  constructor(isLeft = false) {
    this.width = 20;
    this.height = 160;
    this.speed = width / (3 * FRAME_RATE);
    this.isLeft = isLeft;
    this.y = (height - this.height) / 2;
    if (isLeft) {
      this.x = 0;
    } else {
      this.x = width - this.width;
    }
  }

  draw() {
    fill("#fff");
    // circle(this.x, this.y, this.r * 2);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    if (this.isLeft) {
      if (keyIsDown(87)) {
        this.y -= this.speed;
      }

      if (keyIsDown(83)) {
        this.y += this.speed;
      }
    } else {
      if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
      }
    }
  }
}
