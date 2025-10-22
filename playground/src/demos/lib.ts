import {
  assertRegionAppearing,
  assertRegionDisappearing,
  findImageInDirection,
  findImageWithinBounds,
  useStore
} from "@bettergi/utils";

const printStatistics = () => {
  // 自定义数据持久化（数据保存在 `脚本目录/store/my-custom-data.json` 文件中）
  const mycustomData = useStore<{ lastUsedTime?: number; count?: number }>("my-custom-data");
  try {
    log.info(`这是您第 ${(mycustomData.count || 0) + 1} 次使用本脚本`);
    if (mycustomData.lastUsedTime) {
      log.info(`欢迎回来，上次退出时间: ${mycustomData.lastUsedTime}`);
    }
  } finally {
    mycustomData.lastUsedTime = Date.now();
    mycustomData.count = (mycustomData.count || 0) + 1;
  }
};

const openMailbox = async () => {
  // 等待邮件图标出现
  await assertRegionAppearing(
    () => findImageWithinBounds("assets/邮件.png", 0, 0, 95, 1080),
    "打开派蒙菜单超时",
    () => keyPress("ESCAPE"), // 按 Esc 键打开菜单
    { maxAttempts: 5, retryInterval: 1000 } // 重试5次，每秒重试一次
  );

  // 等待关闭图标出现
  await assertRegionAppearing(
    () => findImageInDirection("assets/关闭.png", "north-east"), // 在右上角寻找关闭图标
    "打开邮件超时",
    () => {
      // 如果发现邮件图标，则点击它
      findImageInDirection("assets/邮件.png", "west")?.click();
    },
    { maxAttempts: 6, retryInterval: 500 } // 重试6次，每500毫秒重试一次
  );

  await sleep(1000);

  // 等待关闭图标消失
  const findCloseButton = () => findImageInDirection("assets/关闭.png", "north-east");
  await assertRegionDisappearing(
    findCloseButton,
    "关闭邮件超时",
    () => {
      // 如果发现关闭图标，则点击它
      findImageInDirection("assets/关闭.png", "north-east")?.click();
    },
    { maxAttempts: 6, retryInterval: 500 } // 重试6次，每500毫秒重试一次
  );
};

export const libDemo = async () => {
  // 案例1：打印统计信息（自定义数据持久化）
  printStatistics();

  // 案例2：使用工具函数找图/找字（打开邮件后关闭邮件）
  await openMailbox();
};
