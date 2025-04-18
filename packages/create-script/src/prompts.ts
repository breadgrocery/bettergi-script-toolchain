import * as prompts from "@clack/prompts";
import gitConfig from "git-config";
import os from "node:os";
import util from "node:util";

export const projectNameInput = () => {
  return prompts.text({
    message: "Project name:",
    defaultValue: "my-bettergi-script",
    placeholder: "my-bettergi-script",
    validate: value => (value.length === 0 ? `Project name is required!` : undefined)
  });
};

export const overwriteSelect = (targetDir: string) => {
  return prompts.select({
    message: `Target directory "${targetDir}"` + " is not empty. Please choose how to proceed:",
    options: [
      {
        label: "Cancel operation",
        value: "no"
      },
      {
        label: "Remove existing files and continue",
        value: "yes"
      },
      {
        label: "Ignore files and continue",
        value: "ignore"
      }
    ]
  });
};

export const versionInput = () => {
  return prompts.text({
    message: "Version:",
    defaultValue: "0.0.1",
    placeholder: "0.0.1",
    validate: value => (value.length === 0 ? `Version is required!` : undefined)
  });
};

export const descriptionInput = () => {
  return prompts.text({
    message: "Description:",
    validate: value => (value.length === 0 ? `Description is required!` : undefined)
  });
};

export const authorInput = async () => {
  const username = await (async () => {
    try {
      const config = (await util.promisify(gitConfig)()) as Record<string, any>;
      if (config?.user?.name) return config.user.name;

      const { username } = os.userInfo();
      if (username) return username;
    } catch {
      return undefined;
    }
  })();

  return prompts.text({
    message: "Author:",
    ...(username && {
      defaultValue: username,
      placeholder: username,
      validate: value => (value.length === 0 ? `Description is required!` : undefined)
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

  return prompts.text({
    message: "Author link:",
    ...(link && {
      defaultValue: link,
      placeholder: link
    })
  });
};
