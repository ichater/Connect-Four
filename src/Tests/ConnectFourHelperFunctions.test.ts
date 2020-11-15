import {
  checkIfFourConnected,
  iterateThroughAllCells,
} from "../GameRules/ConnectedFourHelperFunctions";
import { GameCell, Token } from "../GameRules/GameBoard";

describe("IterateThroughAllCells responds appropriately to a given board", () => {
  it("does not return true when board is less than four", () => {
    const arr: GameCell[][] = [
      [{ token: Token.Yellow }, { token: Token.Red }, { token: null }],
    ];
    expect(iterateThroughAllCells(arr)).not.toBe(true);
  });
  it("returns true when the board is horizonal", () => {
    const arr: GameCell[][] = [
      [
        { token: Token.Yellow },
        { token: Token.Yellow },
        { token: Token.Yellow },
        { token: Token.Yellow },
      ],
    ];
    expect(iterateThroughAllCells(arr)).toBe(true);
  });
  it("returns false when four are not connected", () => {
    const board: GameCell[][] = [
      [{ token: null }],
      [{ token: Token.Yellow }],
      [{ token: null }],
      [{ token: null }],
    ];
    expect(iterateThroughAllCells(board)).toEqual(false);
  });
  it("returns false when four are connected vertically but colors are different", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }],
      [{ token: Token.Yellow }],
      [{ token: Token.Red }],
      [{ token: null }],
    ];
    expect(iterateThroughAllCells(board)).not.toEqual(true);
  });
  it("returns false when four are connected vertically but colors are different", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }, { token: null }],
      [{ token: Token.Yellow }, { token: null }],
      [{ token: null }, { token: null }],
      [{ token: null }, { token: null }],
    ];
    expect(iterateThroughAllCells(board)).not.toEqual(true);
  });
});

describe("check if Cour Connected function is the rteason for failing tests", () => {
  it("returns true with all tokens the same", () => {
    const arr: GameCell[] = [
      { token: Token.Yellow },
      { token: Token.Yellow },
      { token: Token.Yellow },
      { token: Token.Yellow },
    ];
    expect(checkIfFourConnected(arr)).toEqual(true);
  });
  it("returns true with all tokens the same", () => {
    const arr: GameCell[] = [
      { token: Token.Yellow },
      { token: Token.Yellow },
      { token: Token.Red },
    ];
    expect(checkIfFourConnected(arr)).toEqual(false);
  });
});
