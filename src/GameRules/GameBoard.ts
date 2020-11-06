interface GameBoard {
  x: number;
  y: number;
}

interface GameCell {
  x: number;
  y: number;
  token: Token | null;
}

enum Token {
  Yellow = "Yellow",
  Red = "Red",
}

export { GameBoard, GameCell };
