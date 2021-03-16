var helicopter;
let img, img2, img3, img4;
// let rock;
let coin = [];

function setup() {
  createCanvas(800, 400);
  img = loadImage("dinosaur.jpg");
  img2 = loadImage("coin.png");
  img3 = loadImage("scene.jfif");
  img4 = loadImage("grass.png");
  helicopter = new Person(img);

  //obstacles
  for (let i = 0; i < 50; i++) {
    coin[i] = new Obstacle(img2, random(50));
  }
}


function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -16);
    helicopter.applyForce(force);
  }
}

//when will the game end
function draw() {
  if (helicopter.pos.x < 3200) {
    game();
  } else {
    gameOver();
  }
}

//reasons for the game to end
function gameOver() {
  if (gameOver && helicopter.score > 18) {
    background(200, 220, 0);
    noStroke();
    text("You Won!" + '\n' + "  Score: " + helicopter.score, 250, 200)
  } else {
    background(200, 150, 0);
    noStroke();
    text("      Better luck next time" + '\n' + "              Score: " + helicopter.score + '\n' + "You need to score 18 points", 100, 200)
  }

}

function game() {
  background(img3);


  //point of view around "helicopter"
  translate(-helicopter.pos.x + 50, 0);

  let gravity = createVector(0, 1);
  helicopter.applyForce(gravity);

  //the player
  helicopter.update();
  helicopter.display();
  helicopter.edges();

  //obstacles
  for (let i = 0; i < 50; i++) {
    coin[i].update();
    coin[i].display();
    coin[i].edges();
    helicopter.hits(coin[i])
  }

}
