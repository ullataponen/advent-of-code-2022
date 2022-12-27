import { calculateRockPaperScissorsWinner } from "./02/app";
import {
  createClientForYearDay,
  getInputFromClient,
  submitAnswerToClient,
} from "./config";

const run = async () => {
  try {
    const client = createClientForYearDay(2022, 2);
    const input = await getInputFromClient(client);
    const result = await calculateRockPaperScissorsWinner(input);

    return await submitAnswerToClient(client, 2, result);
  } catch (err) {
    console.error("Error", err);
  }
};

run();
