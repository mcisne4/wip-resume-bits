import { LOGGER_CONFIG } from "env";
import { Logger } from "./Logger";
import { LoggerWithID } from "./LoggerWithID";

export { Logger, LoggerWithID };
export const logger = new Logger(LOGGER_CONFIG);
