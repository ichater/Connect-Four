import {
  isConnectedHorizontal,
  isConnectedVerticle,
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

describe("testing the isConnectedVerticle helper functionm", () => {
  it("returns true when given 4 in a row in an array", () => {
    const arr: GameCell[][] = [
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
      [{ token: Token.Yellow }],
    ];
    expect(isConnectedVerticle(arr, 0, 0)).toBeTruthy();
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
