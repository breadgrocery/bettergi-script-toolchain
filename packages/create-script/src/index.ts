import * as prompts from "@clack/prompts";
import fs from "fs-extra";
import path from "node:path";
import {
  authorInput,
  authorLinkInput,
  descriptionInput,
  intro,
  outro,
  overwriteSelect,
  projectNameInput,
  versionInput
} from "./prompts.js";
import { type UserInput, createTemplate } from "./template.js";
import { getPkgManager } from "./utils/pkg.js";

// Environment
const cwd = process.cwd();
const pkgManager = getPkgManager();

// Actions
const cancel = () => prompts.cancel("操作已取消");

(async () => {
  intro();

  // Get project name
  const projectName = await projectNameInput();
  if (prompts.isCancel(projectName)) return cancel();

  // Handle directory if exist and not empty
  const targetDir = projectName.trim().replace(/\/+$/g, "");
  if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
    const overwrite = await overwriteSelect(targetDir);
    if (prompts.isCancel(overwrite)) return cancel();

    switch (overwrite) {
      case "yes":
        fs.emptyDirSync(targetDir);
        break;
      case "no":
        cancel();
        return;
    }
  }

  // Get script version
  const version = await versionInput();
  if (prompts.isCancel(version)) return cancel();

  // Get script description
  const description = await descriptionInput();
  if (prompts.isCancel(description)) return cancel();

  // Get script author and link
  const author = await authorInput();
  if (prompts.isCancel(author)) return cancel();

  const authorLink = await authorLinkInput();
  if (prompts.isCancel(authorLink)) return cancel();

  // Wrap up
  const input: UserInput = {
    name: projectName.toString(),
    version: version.toString(),
    description: description.toString(),
    author: author.toString(),
    authorLink: authorLink?.toString()
  };

  // Create template
  const targetRoot = path.join(cwd, targetDir);
  createTemplate(targetRoot, input);

  // Print done message according to package manager
  let doneMessage = "";
  if (targetRoot !== cwd) {
    const cdProjectName = path.relative(cwd, targetRoot);
    doneMessage += `  cd ${cdProjectName.includes(" ") ? `"${cdProjectName}"` : cdProjectName}`;
  }
  switch (pkgManager) {
    case "yarn":
      doneMessage += "\n  yarn";
      doneMessage += "\n  yarn dev";
      break;
    default:
      doneMessage += `\n  ${pkgManager} install`;
      doneMessage += `\n  ${pkgManager} run dev`;
      break;
  }
  outro();
  prompts.note(doneMessage);
})();
