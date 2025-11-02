import fs from "fs-extra";
import path from "node:path";
import url from "node:url";
import { kebabize } from "./utils.js";

export interface UserInput {
  name: string;
  version: string;
  description: string;
  author: string;
  authorLink?: string;
}

export const createTemplate = (targetRoot: string, input: UserInput) => {
  // 复制模板文件到目标目录
  const templateDir = path.resolve(url.fileURLToPath(import.meta.url), "../..", "template");
  fs.copySync(templateDir, targetRoot);

  // 替换 package.json 文件中的模板变量
  const pkg = fs.readJsonSync(path.join(templateDir, "package.json"), "utf-8");
  pkg.name = kebabize(input.name);
  pkg.version = input.version;
  pkg.description = input.description;
  if (input.authorLink) {
    pkg.author = {
      name: input.author,
      url: input.authorLink
    };
  } else {
    pkg.author = input.author;
  }
  fs.writeJsonSync(path.join(targetRoot, "package.json"), pkg, { spaces: 2 });

  // 替换 README.md 文件中的模板变量
  const readme = fs.readFileSync(path.join(templateDir, "README.md"), "utf-8");
  const updatedReadme = readme
    .replace(/\{\{name\}\}/g, input.name)
    .replace(/\{\{version\}\}/g, input.version)
    .replace(/\{\{description\}\}/g, input.description)
    .replace(/\{\{author\}\}/g, input.author)
    .replace(/\{\{authorLink\}\}/g, input.authorLink || "");
  fs.writeFileSync(path.join(targetRoot, "README.md"), updatedReadme);

  // 替换 bettergi.config.ts 文件中的模板变量
  const configPath = path.join(targetRoot, "bettergi.config.ts");
  const configContent = fs.readFileSync(configPath, "utf-8");
  const updatedConfigContent = configContent
    .replace(/\{\{name\}\}/g, input.name)
    .replace(/\{\{version\}\}/g, input.version)
    .replace(/\{\{description\}\}/g, input.description)
    .replace(/\{\{author\}\}/g, input.author)
    .replace(/\{\{authorLink\}\}/g, input.authorLink || "")
    .replace(/\{\{outDir\}\}/g, input.name);
  fs.writeFileSync(configPath, updatedConfigContent);
};
