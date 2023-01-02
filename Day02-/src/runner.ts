import yargs from "yargs";

import { run } from "./index";

export type runOptions = {
  year: number;
  day: number;
};

yargs
  .scriptName("")
  .usage("$0 <cmd> [args]")
  .command<runOptions>(
    "start:dev",
    "Start program in development mode",
    (yargs) =>
      yargs
        .option("year", {
          alias: "y",
          type: "number",
          describe: "Select year of Advent of Code to run",
          demandOption: true,
        })
        .option("day", {
          alias: "d",
          type: "number",
          describe: "Select day of Advent of Code to run",
          demandOption: true,
        }),
    (args: runOptions) => {
      const options: runOptions = { ...args };
      run(options);
    }
  )
  .command<runOptions>(
    "start",
    "Start program in production mode",
    (yargs) =>
      yargs
        .option("year", {
          alias: "y",
          type: "number",
          describe: "Select year of Advent of Code to run",
          demandOption: true,
        })
        .option("day", {
          alias: "d",
          type: "number",
          describe: "Select day of Advent of Code to run",
          demandOption: true,
        }),
    (args: runOptions) => {
      const options: runOptions = { ...args };
      run(options);
    }
  )
  .help()
  .demandCommand().argv;
