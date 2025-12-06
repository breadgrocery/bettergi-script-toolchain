import {
  assertRegionAppearing,
  assertRegionDisappearing,
  findImageInDirection,
  findImageWithinBounds,
  useStoreWithDefaults,
  waitForAction
} from "@bettergi/utils";

const printStatistics = () => {
  //! 自定义数据持久化（数据保存在 `脚本目录/store/my-custom-data.json` 文件中）
  const mycustomData = useStoreWithDefaults("my-custom-data", { count: 0, lastUsedTime: 0 });
  try {
    log.info(`这是您第 ${mycustomData.count + 1} 次使用本脚本`);
    if (mycustomData.lastUsedTime > 0) {
      log.info(`欢迎回来，上次退出时间: ${mycustomData.lastUsedTime}`);
    }
  } finally {
    mycustomData.lastUsedTime = Date.now();
    mycustomData.count += 1;
  }
};

const openMailbox = async () => {
  //! 等待直到邮件图标出现
  //! 期间按 Esc 键打开菜单，每秒重试一次，最多重试5次
  const ok = await waitForAction(
    () => findImageWithinBounds("assets/邮件.png", 0, 0, 95, 1080) !== undefined,
    () => {
      keyPress("ESCAPE");
    },
    { maxAttempts: 5, retryInterval: 1000 }
  );
  if (!ok) throw new Error("打开派蒙菜单超时");

  //! 断言关闭图标即将出现，否则抛出错误
  // 期间如果发现邮件图标，则点击它，每500毫秒重试一次，最多重试6次
  await assertRegionAppearing(
    () => findImageInDirection("assets/关闭.png", "north-east"),
    "打开邮件超时",
    () => {
      findImageInDirection("assets/邮件.png", "west")?.click();
    },
    { maxAttempts: 6, retryInterval: 500 }
  );

  await sleep(1000);

  //! 断言关闭图标即将消失，否则抛出错误
  // 期间如果发现关闭图标，则点击它，每500毫秒重试一次，最多重试6次
  await assertRegionDisappearing(
    () => findImageInDirection("assets/关闭.png", "north-east"),
    "关闭邮件超时",
    () => {
      findImageInDirection("assets/关闭.png", "north-east")?.click();
    },
    { maxAttempts: 6, retryInterval: 500 }
  );

  await genshin.returnMainUi();
};

export const libDemo = async () => {
  //! 示例1：打印统计信息（自定义脚本数据持久化）
  printStatistics();

  //! 示例2：打开邮件后稍等一会再关闭邮件（使用工具函数找图/找字）
  await openMailbox();
};
