import type { BunFile } from "bun";
import chalk from "chalk";
import { existsSync, mkdirSync, statSync } from "fs";
import { dirname, resolve, normalize, extname, basename } from "path";
import { logger } from "logger";

export class MarkdownFile {
  private readonly _file: BunFile;
  private readonly _id: string;
  private readonly _sty1 = chalk.yellowBright;
  private _data: string = "";

  private log_title(...message: unknown[]) {
    const style = chalk.hex("#d22d9b");
    logger.title(style(this._id), ...message);
  }
  private log_status(...message: unknown[]) {
    const style = chalk.hex("#d22d9b");
    logger.status(style(this._id), ...message);
  }
  private log_pass(...message: unknown[]) {
    const style = chalk.hex("#ec13a4").italic;
    logger.pass(style(this._id), ...message);
  }
  private log_fail(...message: unknown[]) {
    const style = chalk.hex("#d22d9b");
    logger.fail(style(this._id), ...message);
  }
  private log_error(title: string, details: string) {
    const style = chalk.hex("#ec1313");
    logger.errorTitle(style(this._id), title);
    logger.error(details);
  }

  constructor(file_path: string, id?: string) {
    const dir = dirname(file_path);
    const ext = extname(file_path);
    const name = basename(file_path, ext);

    this._id = id ? `[${id}]` : `[${name.toUpperCase()}]`;

    this.log_title("Initializing MarkdownFile");
    this.log_status("File Directory:", this._sty1(`"${dir}"`));
    this.log_status("File Name:", this._sty1(`"${name}${ext}"`));

    switch (true) {
      case ext !== ".md":
        this.log_error(
          "Invalid Markdown File Path",
          "The file path must point to a markdown file with the extension of '.md'"
        );

        throw new Error("Invalid Markdown File Path");

      case existsSync(file_path):
        this.log_pass("Markdown File Exists");
        this.log_fail("NOTE: Existing data will be overwritten");
        this._file = Bun.file(file_path);
        break;

      case existsSync(dir):
        this.log_fail("Markdown File Does Not Exist");
        this.log_pass("Markdown File Directory Exists");
        this._file = Bun.file(file_path);

        this._createMdFile();
        break;

      default:
        logger.fail("Markdown File Does Not Exist");
        logger.fail("Markdown File Directory Does Not Exist");

        this._createMdDir(dir);

        this._file = Bun.file(file_path);

        this._createMdFile();
        break;
    }
  }
  private _createMdDir(dir: string) {
    try {
      mkdirSync(dir, { recursive: true });
      this.log_pass("Markdown File Directory Created");
    } catch (error) {
      if (error instanceof Error) {
        this.log_error(
          "Unable To Create Markdown File Directory",
          error.message
        );

        throw error;
      }
    }
  }
  private _createMdFile() {
    try {
      Bun.write(this._file, this._data);
      this.log_pass("Markdown File Created");
    } catch (error) {
      if (error instanceof Error) {
        this.log_error("Unable To Create Markdown File", error.message);

        throw error;
      }
    }
  }

  write() {
    this.log_title("Writting data to disk");

    try {
      Bun.write(this._file, this._data);
      this.log_pass("Successful in writting data to disk");
    } catch (error) {
      if (error instanceof Error) {
        this.log_error("Failed in writting data to disk", error.message);

        throw error;
      }
    }
  }

  appendFile(file_path: string) {
    this.log_title("Appending Markdown Data from File");
    this.log_status("File Path:", this._sty1(`"${file_path}"`));

    // switch (true) {
    //   case extname(file_path) !== ".md":
    //     break;

    //   default:
    //     break;
    // }
  }
}
