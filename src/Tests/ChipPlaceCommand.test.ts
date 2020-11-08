import { chipPlaceCommand } from "../Commands/ChipPlaceCommand";
import { GameBoard, GameCell, Token } from "../GameRules/GameBoard";
import { gameBoardCells } from "../GameRules/GameBoardCells";

describe("Correct chip placement depending on board", () => {
  it("Yellow Token falls to the bottom", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: null },
      { x: 1, y: 2, token: null },
      { x: 2, y: 1, token: Token.Yellow },
      { x: 2, y: 2, token: null },
    ];
    const answer = chipPlaceCommand(
      testBoard,
      gameBoardCells(testBoard),
      2,
      Token.Yellow
    );

    expect(result).toEqual(answer);
  });
  it("Yellow Token falls to the bottom", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };
    const result: Array<GameCell> = [
      { x: 1, y: 1, token: Token.Yellow },
      { x: 1, y: 2, token: null },
      { x: 2, y: 1, token: null },
      { x: 2, y: 2, token: null },
    ];
    const answer = chipPlaceCommand(
      testBoard,
      gameBoardCells(testBoard),
      1,
      Token.Yellow
    );
    console.log(answer);
    expect(result).toEqual(answer);
  });
  it("Yellow Token falls on top of 2nd yellow token", () => {
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
    const answer = chipPlaceCommand(
      testBoard,
      testBoardTokens,
      1,
      Token.Yellow
    );
    expect(answer).toEqual(result);
  });
  it("Invalid command does not change state of board", () => {
    const testBoard: GameBoard = { x: 2, y: 2 };

    const answer = chipPlaceCommand(
      testBoard,
      gameBoardCells(testBoard),
      5,
      Token.Yellow
    );

    expect(answer).toEqual(gameBoardCells(testBoard));
  });
});
