import { GameCell } from "./GameBoard";

const isFourConnected = (gameCells: Array<GameCell>): boolean => {
  gameCells.filter((gameCell) => gameCell.token);
  return true;
};

export { isFourConnected };
