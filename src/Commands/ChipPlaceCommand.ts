import { GameCell, Token } from "../GameRules/GameBoard";
import {
  validChipPlacement,
  chipPlaceSuccess,
} from "./ChipPlaceHelperFunctions";

const chipPlaceCommand = (
  board: GameCell[][],
  chipPlaceLocation: number,
  token: Token
): GameCell[][] => {
  return validChipPlacement(board[0], chipPlaceLocation)
    ? chipPlaceSuccess(board, chipPlaceLocation, token)
    : board;
};

export { chipPlaceCommand };
