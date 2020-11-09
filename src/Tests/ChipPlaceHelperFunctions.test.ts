import {
  chipFallLength,
  validChipPlacement,
} from "../Commands/ChipPlaceHelperFunctions";
import { Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Chip placement helper functions", () => {
  it("returns true if placement is valid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 7)).toBe(true);
  });
  it("returns false if placement is invalid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 8)).toBe(
      false
    );
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
});
