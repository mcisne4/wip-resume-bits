import type { ChalkInstance } from "chalk";

export type LoggerConfig = {
  info_timestamp_style?: ChalkInstance;
  warn_timestamp_style?: ChalkInstance;
  error_timestamp_style?: ChalkInstance;

  title_message_style?: ChalkInstance;
  status_message_style?: ChalkInstance;
  pass_message_style?: ChalkInstance;
  fail_message_style?: ChalkInstance;
  error_message_style?: ChalkInstance;
  error_title_message_style?: ChalkInstance;

  pass_symbol_style?: ChalkInstance;
  fail_symbol_style?: ChalkInstance;
  error_symbol_style?: ChalkInstance;

  pass_symbol?: string;
  fail_symbol?: string;
  error_symbol?: string;
};

export type LoggerConfigStyleKeys = Exclude<
  keyof LoggerConfig,
  "pass_symbol" | "fail_symbol" | "error_symbol"
>;
export type LoggerConfigSymbolKeys = keyof Pick<
  LoggerConfig,
  "pass_symbol" | "fail_symbol" | "error_symbol"
>;

export type ChalkKeyword = keyof Pick<
  ChalkInstance,
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray"
  | "grey"
  | "blackBright"
  | "redBright"
  | "greenBright"
  | "yellowBright"
  | "blueBright"
  | "magentaBright"
  | "cyanBright"
  | "whiteBright"
  | "bgBlack"
  | "bgRed"
  | "bgGreen"
  | "bgYellow"
  | "bgBlue"
  | "bgMagenta"
  | "bgCyan"
  | "bgWhite"
  | "bgGray"
  | "bgGrey"
  | "bgBlackBright"
  | "bgRedBright"
  | "bgGreenBright"
  | "bgYellowBright"
  | "bgBlueBright"
  | "bgMagentaBright"
  | "bgCyanBright"
  | "bgWhiteBright"
  | "bold"
  | "italic"
  | "underline"
>;
export const chalkKeywordList: Set<ChalkKeyword> = new Set([
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "grey",
  "blackBright",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
  "bgBlack",
  "bgRed",
  "bgGreen",
  "bgYellow",
  "bgBlue",
  "bgMagenta",
  "bgCyan",
  "bgWhite",
  "bgGray",
  "bgGrey",
  "bgBlackBright",
  "bgRedBright",
  "bgGreenBright",
  "bgYellowBright",
  "bgBlueBright",
  "bgMagentaBright",
  "bgCyanBright",
  "bgWhiteBright",
  "bold",
  "italic",
  "underline",
]);
