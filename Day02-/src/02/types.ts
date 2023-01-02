const SHAPES = {
  ROCK: ["A", "X"],
  PAPER: ["B", "Y"],
  SCISSORS: ["C", "Z"],
};

export const SHAPES_BY_PLAYERS = {
  A: SHAPES.ROCK[0],
  B: SHAPES.PAPER[0],
  C: SHAPES.SCISSORS[0],
  X: SHAPES.ROCK[1],
  Y: SHAPES.PAPER[1],
  Z: SHAPES.SCISSORS[1],
};

export const Player1Shapes =
  SHAPES_BY_PLAYERS.A || SHAPES_BY_PLAYERS.B || SHAPES_BY_PLAYERS.C;

export const Player2Shapes =
  SHAPES_BY_PLAYERS.X || SHAPES_BY_PLAYERS.Y || SHAPES_BY_PLAYERS.Z;

export const scoreByShape = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

export const scoreByOutcome = {
  Loss: 0,
  Draw: 3,
  Win: 6,
};

export interface Round {
  player1Input: typeof Player1Shapes;
  player2Input: typeof Player2Shapes;
}
