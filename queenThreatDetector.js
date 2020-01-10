const generateBoard = function (whiteQueen, blackQueen) {
  let dimension = [8, 8];
  let board = [];
  for (let y = 0; y < dimension[1]; y++) {
    board[y] = [];
    for (let x = 0; x < dimension[0]; x++) {
      board[y].push(0);
    }
  }

  board[whiteQueen[1]][whiteQueen[0]] = 1;
  board[blackQueen[1]][blackQueen[0]] = 1;
  return board; //returns generatedBoard
}

const queenThreat = function (board) {
  let location = [];
  for (let y in board) {
    for (let x in board[y]) {
      if (board[y][x]) {
        location.push([x - 0, y - 0]);
      }
    }
  }

  if (location[0][0] === location[1][0] || location[0][1] === location[1][1]) {
    return true;
  }

  const vectorNW = [-1, -1];
  const vectorNE = [-1, 1];
  const vectorSE = [1, 1];
  const vectorSW = [-1, 1];

  if (calcVector(vectorNE, location) || calcVector(vectorNW, location) || calcVector(vectorSE, location) || calcVector(vectorSW, location)) {
    return true;
  }

  function calcVector(vector, coords) {
    while (coords[0][0] >= 0 || coords[0][1] < 8) {
      coords[0][0] -= -vector[0]
      coords[0][1] -= -vector[1]
      if (coords[0][0] === coords[1][0] && coords[0][1] === coords[1][1]) {
        return true;
      }
    }
    return false;
  }
  return false;
}

console.log(queenThreat(generateBoard([5, 4], [0, 2])));

