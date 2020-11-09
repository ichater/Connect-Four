import { GameBoard, GameCell } from "./GameBoard";

const gameBoardCells = (board: GameBoard): GameCell[][] => {
  const cell: GameCell = { token: null };
  return [...Array(board.x)].map(() => [...Array(board.y)].map((_, i) => cell));
};

export { gameBoardCells };
