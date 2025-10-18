import { findImageInDirection, findImageWithinBounds, useStore, waitUntil } from "@bettergi/utils";

// 自定义数据持久化（数据保存在 `脚本目录/store/my-custom-data.json` 文件中）
const mycustomData = useStore<{ lastUsedTime?: number; count?: number }>("my-custom-data");

export const greeting = () => {
  // 如果设置中禁用了打印欢迎语，则跳过
  if (!settings.welcome) return;

  // 打印欢迎语，使用设置中的用户名
  if (settings.username) {
    log.info(`Hello, ${settings.username}!`);
  }

  if (!mycustomData.lastUsedTime) {
    log.info("欢迎使用！");
  } else {
    log.info(`欢迎回来！上次退出时间: ${mycustomData.lastUsedTime}`);
  }
};

export const showStatistics = () => {
  try {
    log.info(`这是您第 ${(mycustomData.count ?? 0) + 1} 次使用本脚本`);
  } finally {
    mycustomData.lastUsedTime = Date.now();
    mycustomData.count = (mycustomData.count ?? 0) + 1;
  }
};

export const goShopping = async () => {
  await pathingScript.runFile("assets/蒙德-布兰琪.json");
};

export const openMailbox = async () => {
  log.info("打开邮件界面...");

  // 返回主界面
  await genshin.returnMainUi();

  // 等待直到找到邮件图标，超时5秒，每秒检查一次，等待期间按 Esc 键打开菜单
  const findMail = () => findImageWithinBounds("assets/邮件.png", 0, 0, 95, 1080);
  const ok1 = await waitUntil(
    () => findMail() !== undefined,
    5000,
    1000,
    () => keyPress("ESCAPE")
  );
  if (!ok1) throw new Error("等待邮件图标出现超时");

  // 等待直到找到关闭图标，超时5秒，每秒检查一次，等待期间点击邮件图标（如果发现）
  const findClose = () => findImageInDirection("assets/关闭.png", "north-east");
  const ok2 = await waitUntil(
    () => findClose() !== undefined,
    5000,
    1000,
    () => findMail()?.click()
  );
  if (!ok2) throw new Error("打开邮件超时");
};
