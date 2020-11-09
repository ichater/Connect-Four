import { GameCell, Token } from "../GameRules/GameBoard";
import { chipFallLength, validChipPlacement } from "./ChipPlaceHelperFunctions";

const chipPlaceCommand = (
  board: GameCell[][],
  chipPlaceLocation: number,
  token: Token
): GameCell[][] => {
  const roomInColumn = () => {
    if (chipFallLength(board, chipPlaceLocation)) {
      board[chipFallLength(board, chipPlaceLocation)].splice(
        chipPlaceLocation - 1,
        1,
        {
          token: token,
        }
      );

      return board;
    } else {
      return board;
    }
  };

  return validChipPlacement(board[0], chipPlaceLocation)
    ? roomInColumn()
    : board;
};

export { chipPlaceCommand };
