import type { ChalkInstance } from "chalk";
import type { DeepReadonly } from "./util/types";
import { LOG } from "env";

type StyleFn = ChalkInstance | ((...message: unknown[]) => string);
enum LogType {
  TITLE = "LOG",
  STATUS = "LOG",
  PASS = "LOG",
  FAIL = "WARN",
  ERROR = "ERROR",
}

export class ReLogger {
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
    this._sym = {
      pass: config?.pass_symbol ?? null,
      fail: config?.fail_symbol ?? null,
      error: config?.error_symbol ?? null,
    };
  }

  private _styleless(...message: unknown[]): string {
    return (message as string[]).join(" ");
  }

  private _logger(
    t_style: StyleFn,
    m_style: StyleFn,
    logType: LogType,
    message: unknown[],
    sym_start?: string | null,
    sym_end?: string | null
  ) {
    if (!this._shouldLog) return;

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const TIMESTAMP = t_style(`[${hours}:${minutes}:${seconds} ${logType}]`);

    let content: unknown[] = message;
    if (sym_start) content = [sym_start, ...content];
    if (sym_end) content = [...content, sym_end];

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

  title(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(this._tsty.info, this._msty.title, LogType.TITLE, message);
  }

  status(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(this._tsty.info, this._msty.status, LogType.STATUS, message);
  }

  pass(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.info,
      this._msty.pass,
      LogType.PASS,
      message,
      this._sym.pass
    );
  }

  fail(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.warn,
      this._msty.fail,
      LogType.FAIL,
      message,
      this._sym.fail
    );
  }

  error(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(this._tsty.error, this._msty.error, LogType.ERROR, message);
  }

  errorTitle(...message: unknown[]): void {
    if (!this._shouldLog) return;

    this._logger(
      this._tsty.error,
      this._msty.errorTitle,
      LogType.ERROR,
      message,
      this._sym.error,
      this._sym.error
    );
  }
}
