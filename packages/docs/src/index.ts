console.log("Hello via Bun!");

import { MarkdownFile } from "./utils/MarkdownFile";

const monorepo = new MarkdownFile("../../README_tmp.md", "MONOREPO:README");

monorepo.appendFile("markdown-files/monorepo/title.md");

monorepo.write();
