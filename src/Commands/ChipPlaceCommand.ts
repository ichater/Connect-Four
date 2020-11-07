import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";
import {
  chipFallLength,
  isValidChipPlacment,
} from "./ChipPlaceHelperFunctions";

const chipPlaceCommand = (
  board: GameBoard,
  gameCells: GameCell[],
  command: number
): GameCell[] => {
  if (isValidChipPlacment(board, command)) {
    let chipFall = chipFallLength(gameCells, command);

    if (chipFall) {
      gameCells.splice(gameCells.indexOf(chipFall), 1, {
        x: chipFall.x,
        y: chipFall.y,
        token: Token.Yellow,
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
