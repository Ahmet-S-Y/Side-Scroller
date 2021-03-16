// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(img) {
  this.pos = createVector(10, height - 50);
  this.vel = createVector(2, 0);
  this.acc = createVector(0, 0);
  this.pic = img;
  this.score = 0;
  this.distance = 0;
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.distance = this.pos.x - 10;
  }

  this.display = function() {
    noStroke();
    fill(25, 150, 30);
    textSize(50);
    text("Score: " + this.score, this.pos.x, 100);
    text("Distance: "+ this.distance, this.pos.x, 150);
    image(this.pic, this.pos.x, this.pos.y - 20, 70, 70);
  }

  this.edges = function() {
    if (this.pos.y > height - 50) {
      this.vel.y = 0;
      this.pos.y = height - 50;
    }
  }

  this.hits = function(obs) {
    if ((obs.pos.x >= this.pos.x && obs.pos.x <= (this.pos.x + 40)) &&
      (obs.pos.y >= this.pos.y && obs.pos.y <= (this.pos.y + 40))) {
      obs.pos.y = -400;
      this.score++;
    }
  };

}
