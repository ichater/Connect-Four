import { GameCell, Token } from "./GameBoard";

const iterateThroughAllCells = (gameCells: GameCell[][]) => {
  for (var i = 1; i < gameCells.length; i++) {
    for (var j = 1; j < gameCells[i].length; j++) {
      const result = gameCells[i][j].token;
      if (result !== null) {
        if (isConnectedHorizontal(gameCells[i], j)) {
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

const isConnectedHorizontal = (gameCells: GameCell[], j: number): boolean => {
  const result = gameCells.slice(j, j + 4);
  return (
    result.every((x) => x.token === Token.Red) ||
    result.every((x) => x.token === Token.Yellow)
  );
};

const isConnectedVerticle = (
  gameCells: GameCell[][],
  i: number,
  j: number
): boolean => {
  const result = [
    gameCells[i][j],
    gameCells[i + 1][j],
    gameCells[i + 2][j],
    gameCells[i + 3][j],
  ];
  return (
    result.every((x) => x.token === Token.Red) ||
    result.every((x) => x.token === Token.Yellow)
  );
};

export { iterateThroughAllCells, isConnectedHorizontal, isConnectedVerticle };
