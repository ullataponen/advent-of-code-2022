import { calculateRockPaperScissorsWinner } from "./02/app";
import { getInputFromClient, submitAnswerToClient } from "./config";

export const getInputForDay = async (): Promise<string> =>
  (await getInputFromClient()) as string;

submitAnswerToClient(calculateRockPaperScissorsWinner());
