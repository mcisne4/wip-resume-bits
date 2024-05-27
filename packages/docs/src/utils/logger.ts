import { LoggerWithID } from "logger";
import { LOGGER_CONFIG } from "env";
import chalk from "chalk";

export const logger = new LoggerWithID({
  ...LOGGER_CONFIG,
  id_placement: "Timestamp End",
  id_format_fn: (id: string) => `| ${chalk.italic.dim(id)}`,
});
