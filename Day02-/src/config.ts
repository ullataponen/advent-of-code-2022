import { AocClient } from "advent-of-code-client";
import * as dotenv from "dotenv";

dotenv.config();

export const createClientForYearDay = (year: number, day: number) => {
  return new AocClient({
    year: year,
    day: day,
    token: process.env.SESSION_COOKIE,
  });
};

export const getInputFromClient = async (client: AocClient): Promise<any> => {
  return await client.getInput();
};

export const submitAnswerToClient = async (
  client: AocClient,
  part: number,
  result: any
) => {
  console.log(result);

  return await client.submit(part, result);
};
