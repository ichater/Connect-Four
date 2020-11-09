import {
  chipFallLength,
  validChipPlacement,
} from "../Commands/ChipPlaceHelperFunctions";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Chip placement helper functions", () => {
  it("returns true if placement is valid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 5)).toBe(true);
  });
  it("returns false if placement is invalid", () => {
    expect(validChipPlacement(gameBoardCells({ x: 7, y: 7 })[0], 10)).toBe(
      false
    );
  });
  it("returns the same number as the array length", () => {
    expect(chipFallLength(gameBoardCells({ x: 7, y: 7 }), 5)).toBe(7);
  });
  it("returns the same number as the array length", () => {
    expect(chipFallLength(gameBoardCells({ x: 7, y: 3 }), 5)).toBe(3);
  });
});
