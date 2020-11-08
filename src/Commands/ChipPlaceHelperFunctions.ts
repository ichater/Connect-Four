import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";

const isValidChipPlacment = (board: GameBoard, command: number): boolean =>
  command > 0 && command <= board.x;

const cellToPlaceToken = (
  gameCells: GameCell[],
  command: number
): GameCell | undefined => {
  const yCellColumn = gameCells
    .filter((cell) => cell.x === command && cell.token === null)
    .map((cell) => cell.y);

  const cellToPlaceToken = cellToTokenDepth(gameCells, yCellColumn, command);

  return cellToPlaceToken;
};

const cellToTokenDepth = (
  gameCells: GameCell[],
  yCellColumn: number[],
  command: number
): GameCell | undefined =>
  gameCells.find(
    (cell) => cell.y === Math.min(...yCellColumn) && cell.x === command
  );

export { isValidChipPlacment, cellToPlaceToken };
