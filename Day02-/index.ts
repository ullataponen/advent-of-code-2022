import { calculateRockPaperScissorsWinner } from "./02/app";
import { getInputFromClient, submitAnswerToClient } from "./utils";

export const getInputForDay = async (): Promise<string> =>
  (await getInputFromClient()) as string;

submitAnswerToClient(calculateRockPaperScissorsWinner());
