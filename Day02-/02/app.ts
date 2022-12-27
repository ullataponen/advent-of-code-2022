import {
  Player1Shapes,
  Player2Shapes,
  Round,
  scoreByOutcome,
  scoreByShape,
  SHAPES_BY_PLAYERS,
} from "./types";

export const parseInputToArrays = async (input: any): Promise<Round[]> => {
  const output = input.split("\n").map((row) => ({
    player1Input: row[row.indexOf(" ") - 1] as typeof Player1Shapes,
    player2Input: row[row.indexOf(" ") + 1] as typeof Player2Shapes,
  }));

  return output;
};

export const calculateRockPaperScissorsWinner = async (
  input: any
): Promise<number> => {
  const playedRounds = await parseInputToArrays(input);
  const totalScore = playedRounds.reduce(
    (acc, cur) => acc + calculateOutcomeForPlayer2(cur),
    0
  );
  return totalScore;
};

const calculateOutcomeForPlayer2 = (round: Round) => {
  let score = 0;
  if (round.player2Input === SHAPES_BY_PLAYERS.Z) {
    score = scoreByOutcome.Win;
  }
  if (round.player2Input === SHAPES_BY_PLAYERS.Y) {
    score = scoreByOutcome.Draw;
  }
  if (round.player2Input === SHAPES_BY_PLAYERS.X) {
    score = scoreByOutcome.Loss;
  }

  return calculateScoreByShape(round) + score;
};

const calculateScoreByShape = (round: Round): number => {
  let score = 0;
  if (round.player2Input === SHAPES_BY_PLAYERS.X) {
    if (round.player1Input === SHAPES_BY_PLAYERS.A) {
      score = scoreByShape.SCISSORS;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.B) {
      score = scoreByShape.ROCK;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.C) {
      score = scoreByShape.PAPER;
    }
  }
  if (round.player2Input === SHAPES_BY_PLAYERS.Y) {
    if (round.player1Input === SHAPES_BY_PLAYERS.A) {
      score = scoreByShape.ROCK;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.B) {
      score = scoreByShape.PAPER;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.C) {
      score = scoreByShape.SCISSORS;
    }
  }
  if (round.player2Input === SHAPES_BY_PLAYERS.Z) {
    if (round.player1Input === SHAPES_BY_PLAYERS.A) {
      score = scoreByShape.PAPER;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.B) {
      score = scoreByShape.SCISSORS;
    }
    if (round.player1Input === SHAPES_BY_PLAYERS.C) {
      score = scoreByShape.ROCK;
    }
  }
  return score;
};
