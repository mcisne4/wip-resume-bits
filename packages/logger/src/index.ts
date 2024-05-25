import { LOGGER_CONFIG } from "env";
import { Logger } from "./Logger";

export const logger = new Logger(LOGGER_CONFIG);
