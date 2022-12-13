import { AocClient } from "advent-of-code-client";
import * as dotenv from "dotenv";

dotenv.config();

const client = new AocClient({
  year: 2022,
  day: 2,
  token: process.env.SESSION_COOKIE,
});

export const getInputFromClient = async () => {
  return await client.getInput();
};

export const submitAnswerToClient = async (result: any) => {
  console.log(result);

  return await client.submit(1, result);
};
