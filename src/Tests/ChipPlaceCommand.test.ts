import { chipPlaceCommand } from "../Commands/ChipPlaceCommand";
import { GameCell, Token } from "../GameRules/GameBoard";
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
  it("Token placed on other token", () => {
    const board: GameCell[][] = [[{ token: null }], [{ token: Token.Red }]];
    const result = chipPlaceCommand(board, 1, Token.Yellow);
    expect(result).toEqual([[{ token: Token.Yellow }], [{ token: Token.Red }]]);
  });
  it("board unchanged if token attempted to be placed in full column", () => {
    const board: GameCell[][] = [
      [{ token: Token.Yellow }],
      [{ token: Token.Red }],
    ];
    const result = chipPlaceCommand(board, 1, Token.Yellow);
    expect(result).toEqual(board);
  });
  it("Token falls to bottom", () => {
    const board: GameCell[][] = [
      [{ token: null }],
      [{ token: null }],
      [{ token: null }],
    ];
    const result = chipPlaceCommand(board, 1, Token.Yellow);
    expect(result).toEqual([
      [{ token: null }],
      [{ token: null }],
      [{ token: Token.Yellow }],
    ]);
  });
});
