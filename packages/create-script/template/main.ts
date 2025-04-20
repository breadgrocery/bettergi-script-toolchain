import { openMail } from "./src/demo";

const greeting = (name: string) => {
  name && log.info(`Hello, ${name}!`);
};

(async function () {
  // 读取脚本设置中的 `name` ，输出问候语
  greeting(settings.name);

  // 打开邮件
  await genshin.returnMainUi().then(openMail);
})();
