import { existsSync, mkdirSync } from "fs";
import { dirname, basename, extname } from "path";
import chalk from "chalk";
import type { BunFile } from "bun";
import { logger } from "./logger";

function logError(id: string, title: string, details: string) {
  logger.errorTitle(id, title);
  logger.error(id, details);
}

export class MarkdownFile {
  private readonly _file: BunFile;
  private _data = "";

  private str_style1 = chalk.yellowBright.italic;
  private str_style2 = chalk.yellow.bold;

  constructor(private id: string, file_path: string) {
    const filename = basename(file_path);
    let dir = dirname(file_path);
    if (!dir.endsWith("/")) dir += "/";

    logger.title(id, "Initializing Markdown File");
    logger.status(
      id,
      "File Path:",
      `${this.str_style1(dir)}${this.str_style2(filename)}`
    );

    if (extname(file_path) !== ".md") {
      logError(
        id,
        "Invalid Markdown File Path",
        "The file path must point to a markdown file with the extension of '.md'"
      );

      throw new Error("Invalid Markdown File Path");
    }

    if (existsSync(file_path)) {
      logger.pass(
        id,
        "Markdown File Found.",
        this.str_style2("NOTE:"),
        this.str_style1("Existing data will be overwritten")
      );
      this._file = Bun.file(file_path);
      return;
    }

    if (existsSync(dir)) {
      logger.fail(id, "Markdown File Does Not Exist");
      logger.pass(id, "Markdown File Directory Exists");
      this._file = Bun.file(file_path);

      this._createMdFile();
      return;
    }

    logger.fail(id, "Markdown File Does Not Exist");
    logger.fail(id, "Markdown File Directory Does Not Exist");

    this._createMdDir(dir);

    this._file = Bun.file(file_path);

    this._createMdFile();
  }
  private _createMdDir(dir: string) {
    try {
      mkdirSync(dir, { recursive: true });
      logger.pass(this.id, "Markdown File Directory Created");
    } catch (error) {
      if (error instanceof Error) {
        logError(
          this.id,
          "Unable to Create Markdown File Directory",
          error.message
        );

        throw error;
      }
    }
  }
  private _createMdFile() {
    try {
      Bun.write(this._file, this._data);
      logger.pass(this.id, "Markdown File Created");
    } catch (error) {
      if (error instanceof Error) {
        logError(this.id, "Unable to Create Markdown File", error.message);
        throw error;
      }
    }
  }

  write() {
    logger.title(this.id, "Writting Data to Disk");

    try {
      Bun.write(this._file, this._data);
      logger.pass(this.id, "Data written to disk successfully");
    } catch (error) {
      if (error instanceof Error) {
        logError(this.id, "Unable to Write Data to Disk", error.message);
        throw error;
      }
    }
  }

  async appendFile(file_path: string) {
    const filename = basename(file_path);
    let dir = dirname(file_path);
    if (!dir.endsWith("/")) dir += "/";

    logger.title(this.id, "Appending Markdown Data from File");
    logger.status(
      this.id,
      "File Path:",
      `${this.str_style1(dir)}${this.str_style2(filename)}`
    );

    if (extname(file_path) !== ".md") {
      logError(
        this.id,
        "Invalid Markdown File Path",
        "The file path must point to a markdown file with the extension of '.md'"
      );

      throw new Error("Invalid Markdown File Path");
    }

    if (!existsSync(file_path)) {
      logError(
        this.id,
        "Markdown File Does Not Exist",
        "The file path must point to an existing markdown file"
      );
      throw new Error("Invalid Markdown File Path");
    }

    logger.pass(this.id, "Markdown file found.");

    let contents: string;

    try {
      contents = await Bun.file(file_path).text();
      logger.pass(this.id, "Markdown file contents successfully read");
    } catch (error) {
      if (error instanceof Error) {
        logError(this.id, "Unable to Read Markdown File", error.message);
        throw error;
      }

      contents = "";
    }

    while (!contents.endsWith("\n\n\n")) {
      contents += "\n";
    }

    this._data += contents;
  }
}
