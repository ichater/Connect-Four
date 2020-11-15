import { GameCell, Token } from "./GameBoard";

// Would be nice to convert this into a true boolean function
const iterateThroughAllCells = (gameCells: GameCell[][]) => {
  for (var row = 0; row < gameCells.length; row++) {
    for (var col = 0; col < gameCells[row].length; col++) {
      const result = gameCells[row][col].token;
      if (result !== null) {
        if (
          isConnectedHorizontal(gameCells[row], col) ||
          isConnectedVerticle(gameCells, row, col) ||
          isConnectedDiagonalDown(gameCells, row, col) ||
          isConnectedDiagonalUp(gameCells, row, col)
        ) {
          return true;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
};

const isConnectedHorizontal = (gameCells: GameCell[], col: number): boolean => {
  const result = gameCells.slice(col, col + 4);
  return isFourCells(result) ? checkIfFourConnected(result) : false;
};

const isConnectedVerticle = (
  gameCells: GameCell[][],
  row: number,
  col: number
): boolean => {
  const result = [
    gameCells[row][col],
    gameCells?.[row + 1]?.[col],
    gameCells?.[row + 2]?.[col],
    gameCells?.[row + 3]?.[col],
  ];

  return isFourCells(result) ? checkIfFourConnected(result) : false;
};

const isConnectedDiagonalDown = (
  gameCells: GameCell[][],
  row: number,
  col: number
): boolean => {
  const result = [
    gameCells[row][col],
    gameCells?.[row + 1]?.[col + 1],
    gameCells?.[row + 2]?.[col + 2],
    gameCells?.[row + 3]?.[col + 3],
  ];
  return isFourCells(result) ? checkIfFourConnected(result) : false;
};

const isConnectedDiagonalUp = (
  gameCells: GameCell[][],
  row: number,
  col: number
): boolean => {
  const result = [
    gameCells[row][col],
    gameCells?.[row - 1]?.[col + 1],
    gameCells?.[row - 2]?.[col + 2],
    gameCells?.[row - 3]?.[col + 3],
  ];
  return isFourCells(result) ? checkIfFourConnected(result) : false;
};

const isFourCells = (table: GameCell[]): boolean =>
  table.every((x) => x !== undefined);

const checkIfFourConnected = (result: GameCell[]): boolean =>
  result.every((x) => x.token === Token.Red) ||
  result.every((x) => x.token === Token.Yellow);

export {
  iterateThroughAllCells,
  isConnectedHorizontal,
  isConnectedVerticle,
  isConnectedDiagonalDown,
  isConnectedDiagonalUp,
  checkIfFourConnected,
};
