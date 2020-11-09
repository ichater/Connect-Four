import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Right amount of cells rendered depending on game board params", () => {
  it("renders 10 arrays of 10 with a 10x10 board", () => {
    expect(gameBoardCells({ x: 10, y: 10 }).length).toBe(10);
    expect(gameBoardCells({ x: 10, y: 10 })[0].length).toBe(10);
  });
  it("renders 6 arrays of 7 with a 10x10 board", () => {
    expect(gameBoardCells({ x: 7, y: 6 }).length).toBe(6);
    expect(gameBoardCells({ x: 7, y: 6 })[0].length).toBe(7);
  });
});
