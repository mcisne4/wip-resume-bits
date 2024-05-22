const DEFAULT = true;
const env_log = Bun.env.LOG;

export const LOG = evaluateLog(env_log);

function evaluateLog(str_log: string | undefined): boolean {
  if (str_log === undefined) return DEFAULT;

  const str = str_log.toUpperCase();

  switch (str) {
    case "TRUE":
      return true;

    case "FALSE":
      return false;

    case "0":
      return false;

    case "1":
      return true;

    case "":
      return true;

    default:
      return DEFAULT;
  }
}
