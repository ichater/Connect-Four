import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";
import {
  cellToPlaceToken,
  isValidChipPlacment,
} from "./ChipPlaceHelperFunctions";

const chipPlaceCommand = (
  board: GameBoard,
  gameCells: GameCell[],
  command: number,
  token: Token
): GameCell[] => {
  if (isValidChipPlacment(board, command)) {
    let chipFall = cellToPlaceToken(gameCells, command);

    if (chipFall) {
      gameCells.splice(gameCells.indexOf(chipFall), 1, {
        x: chipFall.x,
        y: chipFall.y,
        token: token === Token.Yellow ? Token.Yellow : Token.Red,
      });
      return gameCells;
    } else {
      return gameCells;
    }
  } else {
    return gameCells;
  }
};

export { chipPlaceCommand };
