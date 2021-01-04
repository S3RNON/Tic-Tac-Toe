// some variables/arguments in neat fashion
let length = 3;
let game = {
  state: 0
};
let board = make2DMatrix(length, length);
let state = {
  empty: 0,
  X: 1,
  O: 2,
};

// initalizing
var turn = state.X;

function setup() {
  createCanvas(900, 900);
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      board[i][j] = state.empty;
    }
  }
}

// this is actually just on loop, while(1) {}
function draw() {
  background(100, 100, 200);
  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
    boardBlank();
      if (board[i][j] === state.X) {
        boardStateX();
      }
      if (board[i][j] ===  state.O) {
        boardStateO();
      }
    }
  }
  if (game.state === 1) {
    pauseScreen();
  }
}

// this is called whenever a mouseclick is registered
function mouseClicked() {
  if (game.state === 0) {
    for (i = 0; i < length; i++) {
      for (j = 0; j < length; j++) {
        if (i === floor(map(mouseX, 0, width, 0, length))) {
          if (j === floor(map(mouseY, 0, height, 0, length))) {
            if (turn === state.X) {
              board[i][j] = state.X;
              turn = state.O;
            } 
            else {
              if (turn === state.O) {
                board[i][j] = state.O;
                turn = state.X;
              }
            }
          }
        }
      }
    }
  }
}

// this is called whenever any key is pressed
function keyPressed() {
  if (game.state === 0) {
    if (key === 'c') {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          board[i][j] = state.empty;
        }
      }
    }
    for (k = 1; k < 10; k++) {
      if (key === char(48 + k)) {
        length = k;
        board = make2DMatrix(length, length);
      }
    }
  }
  if (key === 'p') {
    game.state = 1 - game.state;
  }
}

// this function allows me to create the matrix in which i store the boardstates
function make2DMatrix(x, y) {
  let arr = new Array(x);
  for (i = 0; i < y; i++) {
    arr[i] = new Array(y);
  }
  return arr;
}

// unfinished win detection function
function boardWin() {
}