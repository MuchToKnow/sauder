var PF = require("pathfinding");

/**
 * Returns an array of coordinates [{x:n, y:m},...] representing a path to destination.
 * @param {*} state Unaltered game state
 * @param {*} snake The snake object to find the path for
 * @param {x:n, y:m} destination The desired destination
 */
const getPath = (state, snake, destination) => {
  // var matrix = [
  //   [0, 0, 0, 1, 0],
  //   [1, 0, 0, 0, 1],
  //   [0, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 0]
  // ];
  // var grid = new PF.Grid(matrix);
  // var finder = new PF.AStarFinder();
  // var path = finder.findPath(1, 2, 4, 2, grid);

  const matrix = gernerateMatrix(state.body.board);

  return path;
};

// generate a matrix with
function gernerateMatrix(board) {
  var x = new Array(board.height);
  for (var i = 0; i < board.height; i++) {
    x[i] = new Array(board.width);
    x[i].fill(0);
  }

  return matrix;
}

// returns a matrix with other snakes as walls
function addblocks(matrix, state) {
  addItself(matrix, state);
  addOtherSnake(matrix, state);
  return matrix;
}

//add the snake itself other than the head
function addItself(matrix, state) {
  var bodySnake = state.body.you.body;
  var removeHead = bodySnake.splice(0, 1);

  for(var xy in removeHead){
      turnZeroToOne(matrix, xy);
  }

}

function turnZeroToOne(matrix, xy) {
    x = xy.x;
    y = xy.y;
    matrix[x][y] = 1;
}

module.exports = {
  getPath
};
