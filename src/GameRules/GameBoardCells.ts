import { GameBoard, GameCell } from "./GameBoard";

const gameBoardCells = (board: GameBoard): GameCell[][] => {
  const cell: GameCell = { token: null };
  return [...Array(board.y)].map(() => [...Array(board.x)].map((_, i) => cell));
};

export { gameBoardCells };
