import {
  isConnectedHorizontal,
  iterateThroughAllCells,
} from "./ConnectedFourHelperFunctions";
import { GameCell } from "./GameBoard";

const isFourConnected = (gameCells: GameCell[][]): boolean => {
  return iterateThroughAllCells(gameCells) ? true : false;
};

export { isFourConnected };
