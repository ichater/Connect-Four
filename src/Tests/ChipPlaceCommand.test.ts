import { TokenClass } from "typescript";
import { chipPlaceCommand } from "../Commands/ChipPlaceCommand";
import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Correct chip placement depending on board", () => {
  it("Yellow Token falls to the bottom", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: null },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: Token.Yellow },
    ];
    const answer = chipPlaceCommand(testBoard, gameBoardCells(testBoard), 2);
    console.log(answer);
    expect(answer).toEqual(result);
  });
  it("Yellow Token falls to the bottom", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: Token.Yellow },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: null },
    ];
    const answer = chipPlaceCommand(testBoard, gameBoardCells(testBoard), 1);
    console.log(answer);
    expect(answer).toEqual(result);
  });
  it("Yellow Token falls to the bottom", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };
    const testBoardTokens = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: Token.Yellow },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: null },
    ];
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: Token.Yellow },
      { x: 1, y: 2, token: Token.Yellow },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: null },
    ];
    const answer = chipPlaceCommand(testBoard, testBoardTokens, 1);
    console.log(answer);
    expect(answer).toEqual(result);
  });
});
