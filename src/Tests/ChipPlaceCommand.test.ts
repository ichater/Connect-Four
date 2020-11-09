import { chipPlaceCommand } from "../Commands/ChipPlaceCommand";
import { Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Chip placed in correct depth and position", () => {
  it("board altered by command", () => {
    const result = chipPlaceCommand(
      gameBoardCells({ x: 7, y: 6 }),
      5,
      Token.Yellow
    );
    expect(result).not.toBe(gameBoardCells({ x: 7, y: 6 }));
  });
});
