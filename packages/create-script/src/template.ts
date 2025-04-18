import fs from "fs-extra";
import path from "node:path";
import url from "node:url";

export interface UserInput {
  name: string;
  version: string;
  description: string;
  author: string;
  authorLink?: string;
}

export const createTemplate = (targetRoot: string, input: UserInput) => {
  // Copy template files to target directory
  const templateDir = path.resolve(url.fileURLToPath(import.meta.url), "../..", "template");
  fs.copySync(templateDir, targetRoot);

  // Replace template variables in files
  const pkg = fs.readJsonSync(path.join(templateDir, "package.json"), "utf-8");
  pkg.name = input.name;
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
};
