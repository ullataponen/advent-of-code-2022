import { calculateRockPaperScissorsWinner } from "./02/app";
import { parseInputToEqualSizedStrings } from "./03/app";
import {
  createClientForYearDay,
  getInputFromClient,
  submitAnswerToClient,
} from "./config";
import { runOptions } from "./runner";

export const run = async (argv: runOptions) => {
  try {
    console.log(`Fetching data for year ${argv.year}, day ${argv.day}`);

    const client = createClientForYearDay(argv.year, argv.day);
    const input: string = await getInputFromClient(client);
    const result = await calculateRockPaperScissorsWinner(input);

    return await submitAnswerToClient(client, 2, result);
  } catch (err) {
    console.error("Error", err);
  }
};
