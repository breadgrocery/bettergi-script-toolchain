import { greeting, openMailbox } from "./src/demo";

(async function () {
  // 问候欢迎语
  greeting();

  // 打开邮件
  await openMailbox();
})();
