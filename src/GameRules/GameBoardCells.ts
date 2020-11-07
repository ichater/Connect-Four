import { GameBoard, GameCell } from "./GameBoard";

const gameBoardCells = (board: GameBoard): GameCell[] => {
  const x = numberToArray(board.x);
  const y = numberToArray(board.y);

  return x
    .map((x) =>
      y.map((y) => {
        return { x: x, y: y, token: null };
      })
    )
    .reduce((acc, cur) => acc.concat(cur));
};

const numberToArray = (number: number): Array<number> => {
  return [...Array(number)].map((_, i) => i + 1);
};

export { gameBoardCells };
