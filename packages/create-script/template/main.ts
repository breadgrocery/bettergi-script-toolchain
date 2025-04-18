import { openMail } from "./src/demo";

const greeting = (name: string) => {
  name && log.info(`Hello, ${name}!`);
};

// 脚本入口
(async function () {
  // 读取脚本设置中的 `name` ，输出问候语
  greeting(settings.name);

  // 返回游戏页面
  await genshin.returnMainUi();

  // 打开邮箱
  await openMail();
})();
