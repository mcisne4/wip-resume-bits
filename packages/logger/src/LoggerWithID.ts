import type { ChalkInstance } from "chalk";
import type { DeepReadonly } from "./util/types";
import { LOG } from "env";
import chalk from "chalk";

type StyleFn = ChalkInstance | ((...message: unknown[]) => string);
enum LogType {
  TITLE = "INFO",
  STATUS = "INFO",
  PASS = "INFO",
  FAIL = "WARN",
  ERROR = "ERROR",
}
enum IdPlacement {
  TIMESTAMP_END,
  MESSAGE_START,
  MESSAGE_END,
}

export class LoggerWithID {
  private readonly _shouldLog: boolean;

  private readonly _tsty: DeepReadonly<{
    info: StyleFn;
    warn: StyleFn;
    error: StyleFn;
  }>;
  private readonly _msty: DeepReadonly<{
    title: StyleFn;
    status: StyleFn;
    pass: StyleFn;
    fail: StyleFn;
    error: StyleFn;
    errorTitle: StyleFn;
  }>;
  private readonly _sym: DeepReadonly<{
    pass: string | null;
    fail: string | null;
    error: string | null;
  }>;

  private readonly _idPlacement: IdPlacement;
  private readonly _idFormatFn: (id: string) => string;

  constructor(config?: {
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

    id_placement?: "Timestamp End" | "Message Start" | "Message End";
    id_format_fn?: (id: string) => string;
  }) {
    this._shouldLog = LOG;

    this._tsty = {
      info: config?.info_timestamp_style ?? this._styleless,
      warn: config?.warn_timestamp_style ?? this._styleless,
      error: config?.error_timestamp_style ?? this._styleless,
    };
    this._msty = {
      title: config?.title_message_style ?? this._styleless,
      status: config?.status_message_style ?? this._styleless,
      pass: config?.pass_message_style ?? this._styleless,
      fail: config?.fail_message_style ?? this._styleless,
      error: config?.error_message_style ?? this._styleless,
      errorTitle: config?.error_title_message_style ?? this._styleless,
    };

    let sym = {
      pass: config?.pass_symbol || null,
      fail: config?.fail_symbol || null,
      error: config?.error_symbol || null,
    };

    if (sym.pass && config?.pass_symbol_style) {
      sym.pass = config.pass_symbol_style(sym.pass);
    }
    if (sym.fail && config?.fail_symbol_style) {
      sym.fail = config.fail_symbol_style(sym.fail);
    }
    if (sym.error && config?.error_symbol_style) {
      sym.error = config.error_symbol_style(sym.error);
    }

    this._sym = sym;

    let x = config?.id_placement;

    switch (config?.id_placement) {
      case "Timestamp End":
        this._idPlacement = IdPlacement.TIMESTAMP_END;
        break;

      case "Message Start":
        this._idPlacement = IdPlacement.MESSAGE_START;
        break;

      case "Message End":
        this._idPlacement = IdPlacement.MESSAGE_END;
        break;

      default:
        this._idPlacement = IdPlacement.TIMESTAMP_END;
        break;
    }

    this._idFormatFn = config?.id_format_fn ?? ((id) => id);
  }

  private _styleless(...message: unknown[]): string {
    return (message as string[]).join(" ");
  }

  private _logger(
    t_style: StyleFn,
    m_style: StyleFn,
    logType: LogType,
    id: string,
    message: unknown[],
    sym_start?: string | null,
    sym_end?: string | null
  ) {
    if (!this._shouldLog) return;

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const idStr =
      this._idPlacement === IdPlacement.TIMESTAMP_END
        ? " " + this._idFormatFn(id)
        : "";

    const TIMESTAMP = t_style(
      `[${hours}:${minutes}:${seconds} ${
        logType !== LogType.ERROR ? " " : ""
      }${chalk.underline(logType)}${idStr}]`
    );

    let content: unknown[] = message;

    if (sym_start) content = [sym_start, ...content];
    if (this._idPlacement === IdPlacement.MESSAGE_END)
      content = [...content, this._idFormatFn(id)];

    if (sym_end) content = [...content, sym_end];
    if (this._idPlacement === IdPlacement.MESSAGE_START)
      content = [this._idFormatFn(id), ...content];

    const MESSAGE = m_style(...content);

    switch (logType) {
      case LogType.ERROR:
        console.error(TIMESTAMP, MESSAGE);
        break;

      case LogType.FAIL:
        console.warn(TIMESTAMP, MESSAGE);
        break;

      default:
        console.log(TIMESTAMP, MESSAGE);
        break;
    }
  }

  title(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(this._tsty.info, this._msty.title, LogType.TITLE, id, message);
  }

  status(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.info,
      this._msty.status,
      LogType.STATUS,
      id,
      message
    );
  }

  pass(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.info,
      this._msty.pass,
      LogType.PASS,
      id,
      message,
      this._sym.pass
    );
  }

  fail(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.warn,
      this._msty.fail,
      LogType.FAIL,
      id,
      message,
      this._sym.fail
    );
  }

  error(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.error,
      this._msty.error,
      LogType.ERROR,
      id,
      message
    );
  }

  errorTitle(id: string, ...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.error,
      this._msty.errorTitle,
      LogType.ERROR,
      id,
      message,
      this._sym.error,
      this._sym.error
    );
  }
}
