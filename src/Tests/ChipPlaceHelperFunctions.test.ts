import {
  chipFallLength,
  validChipPlacement,
  chipPlaceSuccess,
} from "../Commands/ChipPlaceHelperFunctions";
import { GameCell, Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Chip placement helper functions", () => {
  it("returns true if placement number is valid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 7)).toBe(true);
  });
  it("returns false if placement number is invalid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 8)).toBe(
      false
    );
  });
  it("returns false if the column of choice is full", () => {
    const board: GameCell[][] = [
      [{ token: Token.Red }],
      [{ token: Token.Red }],
    ];
    expect(validChipPlacement(board[0], 1)).toBe(false);
  });
  it("returns the same number as the array length (7)", () => {
    expect(chipFallLength(gameBoardCells({ x: 7, y: 7 }), 5)).toBe(7);
  });
  it("returns the same number as the array length (3)", () => {
    expect(chipFallLength(gameBoardCells({ x: 7, y: 3 }), 5)).toBe(3);
  });
  it("Lands on top of existing chips", () => {
    const board = [[{ token: null }], [{ token: Token.Red }]];
    expect(chipFallLength(board, 1)).toBe(1);
  });
  it("Places token successfully on board", () => {
    const initialBoard: GameCell[][] = [
      [{ token: null }],
      [{ token: Token.Red }],
    ];
    const result: GameCell[][] = [
      [{ token: Token.Red }],
      [{ token: Token.Red }],
    ];
    expect(chipPlaceSuccess(initialBoard, 1, Token.Red)).toEqual(result);
  });
});
