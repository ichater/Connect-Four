import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";

const isValidChipPlacment = (board: GameBoard, command: number): boolean =>
  command > 0 && command <= board.x;

const chipFallLength = (
  gameCells: GameCell[],
  command: number
): GameCell | undefined => {
  const yCellColumn = gameCells
    .filter((cell) => cell.x === command && cell.token === null)
    .map((cell) => cell.y);

  const cellToPlaceToken = cellToToken(gameCells, yCellColumn, command);

  return cellToPlaceToken;
};

const cellToToken = (
  gameCells: GameCell[],
  yCellColumn: number[],
  command: number
): GameCell | undefined =>
  gameCells.find(
    (cell) => cell.y === Math.min(...yCellColumn) && cell.x === command
  );

export { isValidChipPlacment, chipFallLength };
