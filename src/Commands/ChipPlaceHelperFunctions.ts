import { GameCell, Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

const validChipPlacement = (board: GameCell[], chipPlace: number): boolean =>
  chipPlace > 0 &&
  chipPlace < board.length + 1 &&
  board[chipPlace - 1].token === null;

const chipFallLength = (board: GameCell[][], chipPlace: number): number =>
  board.map((row) => row[chipPlace - 1]).filter((cell) => cell.token === null)
    .length;

const chipPlaceSuccess = (
  board: GameCell[][],
  chipPlaceLocation: number,
  token: Token
): GameCell[][] => {
  board[chipFallLength(board, chipPlaceLocation) - 1].splice(
    chipPlaceLocation - 1,
    1,
    {
      token: token,
    }
  );
  return board;
};

export { validChipPlacement, chipFallLength, chipPlaceSuccess };
