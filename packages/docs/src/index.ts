import { MarkdownFile } from "./utils/MarkdownFile";

async function generateMonorepoReadMe() {
  const monorepo = new MarkdownFile("MONOREPO:README", "../../README.md");

  await monorepo.appendFile("markdown-files/monorepo/title.md");
  await monorepo.appendFile("markdown-files/monorepo/monorepo-packages.md");
  await monorepo.appendFile("markdown-files/monorepo/dev-environment.md");
  await monorepo.appendFile("markdown-files/monorepo/env-variables.md");

  monorepo.write();
}
generateMonorepoReadMe();
