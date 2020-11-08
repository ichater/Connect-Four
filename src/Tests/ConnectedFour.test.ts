import { ifFourConnected } from "../GameRules/ConnectedFour";
import { GameCell, Token } from "../GameRules/GameBoard";

describe("returns true opr false if four cells are connected", () => {
  it("returns true with 4 lines up vertically", () => {
    const result: Array<GameCell> = [
      { x: 2, y: 1, token: Token.Yellow },
      { x: 2, y: 2, token: Token.Yellow },
      { x: 2, y: 3, token: Token.Yellow },
      { x: 2, y: 4, token: Token.Yellow },
    ];
    expect(ifFourConnected(result)).toBe(true);
  });
  it("returns true with 4 lines up horizontally", () => {
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: Token.Yellow },
      { x: 2, y: 1, token: Token.Yellow },
      { x: 3, y: 1, token: Token.Yellow },
      { x: 4, y: 1, token: Token.Yellow },
    ];
    expect(ifFourConnected(result)).toBe(true);
  });
  it("returns true with 4 lines up diagonally", () => {
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: Token.Yellow },
      { x: 2, y: 2, token: Token.Yellow },
      { x: 3, y: 3, token: Token.Yellow },
      { x: 4, y: 4, token: Token.Yellow },
    ];
    expect(ifFourConnected(result)).toBe(true);
  });
  it("returns false without 4 lines up", () => {
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: null },
      { x: 1, y: 3, token: null },
      { x: 1, y: 4, token: null },
    ];
    expect(ifFourConnected(result)).toBe(false);
  });
});
