class Obstacle {
  constructor(img, x) {
    this.pos = createVector(400 + x * 100, height - 30 - x * 15);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
    
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  display() {
    fill(25, 150, 30);
    stroke(255);
    image(this.pic, this.pos.x, this.pos.y, 50, 40);
  }

  edges() {
    if (this.pos.y > height - 50) {
      this.vel.y = 0;
      this.pos.y = height - 50;
    }
  }

}
