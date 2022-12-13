import { calculateRockPaperScissorsWinner } from "./02/app";
import { getInputFromClient, submitAnswerToClient } from "./config";

export const getInputForDay = async (): Promise<string> =>
  (await getInputFromClient()) as string;


  const run = async () => {
    try {
      const result = await calculateRockPaperScissorsWinner();

      return await submitAnswerToClient(result);
    } catch (err) {
      console.error("Error", err);
    }
  };

  run();
