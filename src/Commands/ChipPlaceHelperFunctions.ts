import { GameCell } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

const validChipPlacement = (board: GameCell[], chipPlace: number): boolean =>
  chipPlace > 0 && chipPlace < board.length + 1;

const chipFallLength = (board: GameCell[][], chipPlace: number): number =>
  board.map((row) => row[chipPlace - 1]).filter((cell) => cell.token === null)
    .length;

console.log(chipFallLength(gameBoardCells({ x: 7, y: 6 }), 5));

export { validChipPlacement, chipFallLength };
