import chalk from "chalk";
import { toHex } from "khroma";
import {
  type LoggerConfig,
  type LoggerConfigStyleKeys,
  type LoggerConfigSymbolKeys,
  type ChalkKeyword,
  chalkKeywordList,
} from "./types";

type RgbData = {
  r: number;
  g: number;
  b: number;
  bg: boolean;
};
type HexData = {
  hex: string;
  bg: boolean;
};

export class ConfigParser {
  private readonly _config: LoggerConfig = {};

  get config() {
    return this._config;
  }

  parseEnvStyle(key: LoggerConfigStyleKeys, value: string | undefined): void {
    if (value === undefined) return;

    let values = value
      .replace(/\s|_|;|:|%|-|\.|"/g, "")
      .toUpperCase()
      .split("|")
      .map((str) => {
        return str.startsWith("FG") ? str.slice(2) : str;
      })
      .filter((str) => str.length > 0);

    let hasData = false;
    let output = chalk;

    for (const str of values) {
      const isKeyword = this._isChalkKeyword(str);
      if (isKeyword) {
        output = output[isKeyword];
        hasData = true;

        continue;
      }

      const isRgb = this._isRgb(str);
      if (isRgb) {
        const { r, g, b, bg } = isRgb;
        output = bg ? output.bgRgb(r, g, b) : output.rgb(r, g, b);
        hasData = true;

        continue;
      }

      const isHsl = this._isHsl(str);
      if (isHsl) {
        const { bg, hex } = isHsl;
        output = bg ? output.bgHex(hex) : output.hex(hex);
        hasData = true;

        continue;
      }

      const isHex = this._isHex(str);
      if (isHex) {
        const { bg, hex } = isHex;
        output = bg ? output.bgHex(hex) : output.hex(hex);
        hasData = true;

        continue;
      }
    }

    if (hasData) this._config[key] = output;
  }

  private _isChalkKeyword(str: string): ChalkKeyword | false {
    for (const method of chalkKeywordList) {
      if (method.toUpperCase() === str) return method;
    }

    return false;
  }

  private _isRgb(str: string): RgbData | false {
    const rgbRegex = /(BG)?RGB\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

    type MatchResults = [string, string | undefined, string, string, string];
    const results = str.match(rgbRegex) as MatchResults | null;

    if (!results) return false;

    const data: RgbData = {
      bg: results[1] ? true : false,
      r: parseInt(results[2]),
      g: parseInt(results[3]),
      b: parseInt(results[4]),
    };

    if (data.r > 255) data.r = 255;
    if (data.g > 255) data.g = 255;
    if (data.b > 255) data.b = 255;

    if (data.r < 0) data.r = 0;
    if (data.g < 0) data.g = 0;
    if (data.b < 0) data.b = 0;

    return data;
  }

  private _isHsl(str: string): HexData | false {
    const hslRegex = /(BG)?HSL\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

    type MatchResults = [string, string | undefined, string, string, string];
    const results = str.match(hslRegex) as MatchResults | null;

    if (!results) return false;

    const [, bg, _h, _s, _l] = results;

    let h = parseInt(_h);
    let s = parseInt(_s);
    let l = parseInt(_l);

    if (h > 360) h = 360;
    if (s > 100) s = 100;
    if (l > 100) l = 100;

    if (h < 0) h = 0;
    if (s < 0) s = 0;
    if (l < 0) l = 0;

    const data: HexData = {
      bg: bg ? true : false,
      hex: toHex(`hsl(${h},${s}%,${l}%)`),
    };

    return data;
  }

  private _isHex(str: string): HexData | false {
    const hexRegex = /(BG)?(0X|#)([A-F0-9]{6})/;

    type MatchResults = [string, string | undefined, string, string];
    const results = str.match(hexRegex) as MatchResults | null;

    if (!results) return false;

    const data: HexData = {
      bg: results[1] ? true : false,
      hex: `#${results[3]}`,
    };

    return data;
  }

  parseEnvSymbol(key: LoggerConfigSymbolKeys, value: string | undefined): void {
    if (value === undefined) return;

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    this._config[key] = value;
  }
}
