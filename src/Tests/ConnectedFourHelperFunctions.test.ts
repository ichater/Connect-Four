import {
  isConnectedDiagonalDown,
  isConnectedHorizontal,
  isConnectedVerticle,
  isConnectedDiagonalUp,
} from "../GameRules/ConnectedFourHelperFunctions";
import { GameCell, Token } from "../GameRules/GameBoard";

describe("testing the isHorizontal helper functionm", () => {
  it("isCOnnectedHorizontal returns true when given 4 in a row in an array", () => {
    const arr: GameCell[] = [
      { token: Token.Yellow },
      { token: Token.Yellow },
      { token: Token.Yellow },
      { token: Token.Yellow },
    ];
    expect(isConnectedHorizontal(arr, 0)).toBeTruthy();
  });
  it("isCOnnectedHorizontal returns false when given a mixed group of 4", () => {
    const arr: GameCell[] = [
      { token: Token.Yellow },
      { token: Token.Red },
      { token: null },
      { token: Token.Yellow },
    ];
    expect(isConnectedHorizontal(arr, 0)).toBeFalsy();
  });
});

describe("testing the isConnectedVerticle helper function", () => {
  it("returns true when given 4 in a row in an array", () => {
    const arr: GameCell[][] = [
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
    ];
    expect(isConnectedVerticle(arr, 0, 0)).toEqual(true);
  });
  it("isCOnnectedHorizontal returns false when given a mixed group of 4", () => {
    const arr: GameCell[][] = [
      [{ token: Token.Yellow }],
      [{ token: Token.Red }],
      [{ token: null }],
      [{ token: Token.Yellow }],
    ];
    expect(isConnectedVerticle(arr, 0, 0)).toBeFalsy();
  });
});

describe("testing the diagonal connection helper functions", () => {
  const board: GameCell[][] = [
    [
      { token: Token.Red },
      { token: null },
      { token: null },
      { token: Token.Yellow },
    ],
    [
      { token: null },
      { token: Token.Red },
      { token: Token.Yellow },
      { token: null },
    ],
    [
      { token: null },
      { token: Token.Yellow },
      { token: Token.Red },
      { token: null },
    ],
    [
      { token: Token.Yellow },
      { token: null },
      { token: null },
      { token: Token.Red },
    ],
  ];
  it("returns true when board is connected diagnoally", () => {
    expect(isConnectedDiagonalDown(board, 0, 0)).toBe(true);
  });
  it("returns true when board is connected diagnoally", () => {
    board[3].splice(3, 1, { token: null });
    expect(isConnectedDiagonalDown(board, 0, 0)).toBe(false);
  });

  it("returns true when board is connected diagnoally", () => {
    expect(isConnectedDiagonalUp(board, 3, 0)).toBe(true);
  });
  it("returns true when board is connected diagnoally", () => {
    board[0].splice(3, 1, { token: null });
    expect(isConnectedDiagonalUp(board, 3, 0)).toBe(false);
  });
});

describe("testing to see if undefined rows cause a false bool", () => {
  it("horizontal function returns false when array is only 3 long", () => {
    const arr: GameCell[] = [
      { token: Token.Yellow },
      { token: Token.Red },
      { token: null },
    ];
    expect(isConnectedHorizontal(arr, 0)).toBeFalsy();
  });
  it("verticle function returns false when array is only 3 long", () => {
    const arr: GameCell[][] = [
      [{ token: Token.Yellow }],
      [{ token: Token.Red }],
      [{ token: null }],
    ];
    expect(isConnectedVerticle(arr, 0, 0)).toBeFalsy();
  });
});
