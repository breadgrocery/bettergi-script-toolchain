import * as prompts from "@clack/prompts";
import gitConfig from "git-config";
import os from "node:os";
import util from "node:util";

export const intro = () => {
  return prompts.intro("创建您的第一个 BetterGI 脚本！");
};

export const projectNameInput = () => {
  return prompts.text({
    message: "脚本名称:",
    initialValue: "MyScript",
    placeholder: "MyScript",
    validate: value => (value.length === 0 ? `脚本名称不能为空！` : undefined)
  });
};

export const overwriteSelect = (targetDir: string) => {
  return prompts.select({
    message: `目标目录 "${targetDir}"` + " 不为空，请选择如何处理:",
    options: [
      {
        label: "取消操作",
        value: "no"
      },
      {
        label: "移除文件并继续",
        value: "yes"
      },
      {
        label: "忽略并继续",
        value: "ignore"
      }
    ]
  });
};

export const versionInput = () => {
  return prompts.text({
    message: "脚本版本:",
    initialValue: "0.1",
    placeholder: "0.1",
    validate: value => (value.length === 0 ? `脚本版本不能为空！` : undefined)
  });
};

export const descriptionInput = () => {
  return prompts.text({
    message: "脚本描述:",
    initialValue: "我的脚本",
    validate: value => (value.length === 0 ? `脚本描述不能为空！` : undefined)
  });
};

export const authorInput = async () => {
  const author = await (async () => {
    try {
      const config = (await util.promisify(gitConfig)()) as Record<string, any>;
      if (config?.user?.name) return config.user.name as string;

      const { username } = os.userInfo();
      if (username) return username;
    } catch {}
    return "Anonymous";
  })();

  return prompts.text({
    message: "脚本作者:",
    ...(author && {
      initialValue: author,
      placeholder: author,
      validate: value => (value.length === 0 ? `脚本作者不能为空！` : undefined)
    })
  });
};

export const authorLinkInput = async () => {
  const link = await (async () => {
    try {
      const config = (await util.promisify(gitConfig)()) as Record<string, any>;
      if (config?.user?.name) return `https://github.com/${config.user.name}`;
    } catch {
      return undefined;
    }
  })();

  if (!link) return undefined;

  return prompts.text({
    message: "作者主页:",
    ...(link && {
      initialValue: link,
      placeholder: link
    })
  });
};

export const outro = () => {
  return prompts.intro("构建完成，现在运行：");
};
