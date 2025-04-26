import { findImageInDirection, findImageWithinBounds, useStore, waitUntil } from "@bettergi/utils";

export const greeting = () => {
  // 读取用户配置的脚本设置
  if (settings.name) {
    log.info(`Hello, ${settings.name}!`);
  }

  // 数据持久化
  const myData = useStore<{ lastUsedTime?: number }>("my-data");
  if (!myData.lastUsedTime) {
    log.info("欢迎使用！");
  } else {
    log.info(`欢迎回来！上次退出时间: ${myData.lastUsedTime}`);
  }
  myData.lastUsedTime = Date.now();
};

export const openMailbox = async () => {
  // 定义图标位置
  const findMail = () => findImageWithinBounds("assets/邮件.png", 0, 0, 95, 1080);
  const findClose = () => findImageInDirection("assets/关闭.png", "north-east");

  // 返回主界面
  await genshin.returnMainUi();

  // 等待直到找到邮件图标，超时5秒，每秒检查一次，等待期间按 Esc 键打开菜单
  const done1 = await waitUntil(
    () => findMail() !== undefined,
    5000,
    1000,
    () => keyPress("ESCAPE")
  );
  if (!done1) throw new Error("等待邮件图标出现超时");

  // 等待直到找到关闭图标，超时5秒，每秒检查一次，等待期间点击邮件图标（如果发现）
  const done2 = await waitUntil(
    () => findClose() !== undefined,
    5000,
    1000,
    () => findMail()?.click()
  );
  if (!done2) throw new Error("打开邮件超时");
};
