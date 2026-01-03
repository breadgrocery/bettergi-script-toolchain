import * as prompts from "@clack/prompts";
import fs from "fs-extra";
import path from "node:path";
import {
  authorInput,
  authorLinkInput,
  descriptionInput,
  intro,
  keywordsInput,
  outro,
  overwriteSelect,
  projectNameInput,
  versionInput
} from "./prompts.js";
import { type UserInput, createTemplate } from "./template.js";
import { getPkgManager } from "./utils.js";

// Environment
const cwd = process.cwd();
const pkgManager = getPkgManager();

// Actions
const cancel = () => prompts.cancel("操作已取消");

(async () => {
  intro();

  // 获取项目名称
  const projectName = await projectNameInput();
  if (prompts.isCancel(projectName)) return cancel();

  // 处理已存在且非空的目录
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

  // 获取脚本版本
  const version = await versionInput();
  if (prompts.isCancel(version)) return cancel();

  // 获取脚本描述
  const description = await descriptionInput();
  if (prompts.isCancel(description)) return cancel();

  // 获取脚本标签
  const keywords = await keywordsInput();

  // 获取脚本作者和链接
  const author = await authorInput();
  if (prompts.isCancel(author)) return cancel();

  const authorLink = await authorLinkInput();
  if (prompts.isCancel(authorLink)) return cancel();

  // Wrap up
  const input: UserInput = {
    name: projectName.toString(),
    version: version.toString(),
    description: description.toString(),
    keywords: keywords.toString(),
    author: author.toString(),
    authorLink: authorLink?.toString()
  };

  // 创建模板
  const targetRoot = path.join(cwd, targetDir);
  createTemplate(targetRoot, input);

  // 根据包管理器打印完成信息
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
