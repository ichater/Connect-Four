interface GameBoard {
  x: number;
  y: number;
}

interface GameCell {
  token: Token | null;
}

enum Token {
  Yellow = "Yellow",
  Red = "Red",
}

export { GameBoard, GameCell, Token };
