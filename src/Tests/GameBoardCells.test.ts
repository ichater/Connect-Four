import { GameBoard, GameCell } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Correct number of cells returned depending on starting game board x and y values", () => {
  it("returns 42 cells with an x of 6 and a y of 7", () => {
    let testBoard: GameBoard = { x: 6, y: 7 };
    expect(gameBoardCells(testBoard).length).toEqual(42);
  });
  it("returns 100 cells with an x of 10 and a y of 10", () => {
    let testBoard: GameBoard = { x: 10, y: 10 };
    expect(gameBoardCells(testBoard).length).toEqual(100);
  });
  it("returns appropriate array of objects", () => {
    let testBoard: GameBoard = { x: 2, y: 2 };
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: null },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: null },
    ];
    expect(gameBoardCells(testBoard)).toEqual(result);
  });
});
