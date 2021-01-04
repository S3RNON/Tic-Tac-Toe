function pauseScreen() {
  fill(255);
  stroke(0);
  strokeWeight(8);
  rectMode(CORNERS);
  rect(width/6, height/6, (5*width)/6, (5*height)/6);
  strokeWeight(5);
  textSize(17);
  text('Tic-Tac-Toe v1.0   ~by Lucas North',151, 150);
  fill(255, 100, 100);
  textSize(90);
  strokeWeight(5);
  text('Paused', 200, 300);
  fill(0);
  textSize(30);
  strokeWeight(3);
  text('Controls:', 200, 450);
  strokeWeight(4);
  fill(100, 120, 230);
  text('Pause:    p', 200, 500);
  fill(100, 120, 230);
  text('Clear:    c', 200, 550);
  fill(100, 120, 230);
  text('Change boardsize:    1-9', 200, 600); 
}

function boardStateO() {
  stroke(0, 0, 255 - 155 * game.state);
  strokeWeight(5);
  ellipse(width/(2*length) * (2*i+1), height/(2*length) * (2*j+1), width/length - 11, height/length - 11);
}

function boardStateX() {
  stroke(255 - 155 * game.state, 0, 0);
  strokeWeight(5);
  textSize(20);
  line(width/length * i, height/length * j, width/length * (i+1), height/length * (j+1));
  line(width/length * (i+1), height/length * j, width/length * i, height/length * (j+1));  
}

function boardBlank() {
  fill(255 - 155 * game.state);
  stroke(0);
  strokeWeight(5);
  rectMode(CORNER);
  rect(width/length * i, height/length * j, width/length, height/length); 
}