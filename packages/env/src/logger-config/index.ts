import { ConfigParser } from "./ConfigParser";

const parser = new ConfigParser();

parser.parseEnvStyle("info_timestamp_style", Bun.env.INFO_TIMESTAMP_STYLE);
parser.parseEnvStyle("warn_timestamp_style", Bun.env.WARN_TIMESTAMP_STYLE);
parser.parseEnvStyle("error_timestamp_style", Bun.env.ERROR_TIMESTAMP_STYLE);

parser.parseEnvStyle("title_message_style", Bun.env.TITLE_MESSAGE_STYLE);
parser.parseEnvStyle("status_message_style", Bun.env.STATUS_MESSAGE_STYLE);
parser.parseEnvStyle("pass_message_style", Bun.env.PASS_MESSAGE_STYLE);
parser.parseEnvStyle("fail_message_style", Bun.env.FAIL_MESSAGE_STYLE);
parser.parseEnvStyle("error_message_style", Bun.env.ERROR_MESSAGE_STYLE);
parser.parseEnvStyle(
  "error_title_message_style",
  Bun.env.ERROR_TITLE_MESSAGE_STYLE
);

parser.parseEnvStyle("pass_symbol_style", Bun.env.PASS_SYMBOL_STYLE);
parser.parseEnvStyle("fail_symbol_style", Bun.env.FAIL_SYMBOL_STYLE);
parser.parseEnvStyle("error_symbol_style", Bun.env.ERROR_SYMBOL_STYLE);

parser.parseEnvSymbol("pass_symbol", Bun.env.PASS_SYMBOL);
parser.parseEnvSymbol("fail_symbol", Bun.env.FAIL_SYMBOL);
parser.parseEnvSymbol("error_symbol", Bun.env.ERROR_SYMBOL);

export const LOGGER_CONFIG = parser.config;
