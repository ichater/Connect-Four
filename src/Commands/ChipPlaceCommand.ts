import { GameBoard, GameCell } from "../GameRules/GameBoard";
import {
  chipFallLength,
  isValidChipPlacment,
} from "./ChipPlaceHelperFunctions";

const chipPlaceCommand = (
  board: GameBoard,
  gameCells: GameCell[],
  command: number
): GameCell[] => {
  return isValidChipPlacment(board, command)
    ? chipFallLength(gameCells, command)
    : gameCells;
};

export { chipPlaceCommand };
