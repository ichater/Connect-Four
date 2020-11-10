import { isFourConnected } from "../GameRules/ConnectedFour";
import { GameCell, Token } from "../GameRules/GameBoard";

describe("checks if four tokens are connected horizontally, vertically or diagonally", () => {
  it("returns true when four are connected horizontally", () => {
    const board: GameCell[][] = [
      [
        { token: Token.Red },
        { token: Token.Red },
        { token: Token.Red },
        { token: Token.Red },
      ],
    ];
    expect(isFourConnected(board)).toEqual(true);
  });
  it("returns true when four are connected vertically", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }],
      [{ token: Token.Red }],
      [{ token: Token.Red }],
      [{ token: Token.Red }],
    ];
    expect(isFourConnected(board)).toEqual(true);
  });

  it("returns false when four are connected vertically but colors are different", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }],
      [{ token: Token.Yellow }],
      [{ token: Token.Red }],
      [{ token: Token.Red }],
    ];
    expect(isFourConnected(board)).toEqual(false);
  });
  it("returns false when four are not connected", () => {
    const board: GameCell[][] = [
      [{ token: null }],
      [{ token: Token.Yellow }],
      [{ token: null }],
      [{ token: null }],
    ];
    expect(isFourConnected(board)).toEqual(false);
  });
  it("returns true when four are connected diagonally", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }, { token: null }, { token: null }, { token: null }],
      [{ token: null }, { token: Token.Red }, { token: null }, { token: null }],
      [{ token: null }, { token: null }, { token: Token.Red }, { token: null }],
      [{ token: null }, { token: null }, { token: null }, { token: Token.Red }],
    ];
    expect(isFourConnected(board)).toEqual(true);
  });
});
