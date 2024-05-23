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

export class Logger {
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
    timestamp_style?: {
      info?: ChalkInstance;
      warn?: ChalkInstance;
      error?: ChalkInstance;
    };
    message_style?: {
      title?: ChalkInstance;
      status?: ChalkInstance;
      pass?: ChalkInstance;
      fail?: ChalkInstance;
      error?: ChalkInstance;
      errorTitle?: ChalkInstance;
    };
    symbols?: {
      pass?: string;
      fail?: string;
      error?: string;
    };
  }) {
    this._shouldLog = LOG;

    this._tsty = {
      info: config?.timestamp_style?.info ?? this._styleless,
      warn: config?.timestamp_style?.warn ?? this._styleless,
      error: config?.timestamp_style?.error ?? this._styleless,
    };
    this._msty = {
      title: config?.message_style?.title ?? this._styleless,
      status: config?.message_style?.status ?? this._styleless,
      pass: config?.message_style?.pass ?? this._styleless,
      fail: config?.message_style?.fail ?? this._styleless,
      error: config?.message_style?.error ?? this._styleless,
      errorTitle: config?.message_style?.errorTitle ?? this._styleless,
    };
    this._sym = {
      pass: config?.symbols?.pass ?? null,
      fail: config?.symbols?.fail ?? null,
      error: config?.symbols?.error ?? null,
    };
  }

  private _styleless(...text: unknown[]): string {
    return (text as string[]).join(" ");
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
