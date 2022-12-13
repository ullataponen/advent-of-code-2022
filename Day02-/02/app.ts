import { getInputForDay } from "..";
import {
  Player1Shapes,
  Player2Shapes,
  Round,
  scoreByOutcome,
  scoreByShape,
  SHAPES_BY_PLAYERS,
} from "./types";

export const parseInputToArrays = async (): Promise<Round[]> => {
  const input = await getInputForDay();

  const output = input.split("\n").map((row) => ({
    player1Input: row[row.indexOf(" ") - 1] as typeof Player1Shapes,
    player2Input: row[row.indexOf(" ") + 1] as typeof Player2Shapes,
  }));

  return output;
};

export const calculateRockPaperScissorsWinner = async (): Promise<number> => {
  const playedRounds = await parseInputToArrays();
  const totalScore = playedRounds.reduce(
    (acc, cur) => acc + calculateOutcomeForPlayer2(cur),
    0
  );
  return totalScore;
};

const calculateOutcomeForPlayer2 = (round: Round) => {
  let score = 0;
  if (
    (round.player1Input === SHAPES_BY_PLAYERS.A &&
      round.player2Input === SHAPES_BY_PLAYERS.Y) ||
    (round.player1Input === SHAPES_BY_PLAYERS.B &&
      round.player2Input === SHAPES_BY_PLAYERS.Z) ||
    (round.player1Input === SHAPES_BY_PLAYERS.C &&
      round.player2Input === SHAPES_BY_PLAYERS.X)
  ) {
    score = scoreByOutcome.Win;
  } else if (
    (round.player1Input === SHAPES_BY_PLAYERS.A &&
      round.player2Input === SHAPES_BY_PLAYERS.X) ||
    (round.player1Input === SHAPES_BY_PLAYERS.B &&
      round.player2Input === SHAPES_BY_PLAYERS.Y) ||
    (round.player1Input === SHAPES_BY_PLAYERS.C &&
      round.player2Input === SHAPES_BY_PLAYERS.Z)
  ) {
    score = scoreByOutcome.Draw;
  } else {
    score = scoreByOutcome.Loss;
  }

  return scoreByShape[round.player2Input] + score;
};
