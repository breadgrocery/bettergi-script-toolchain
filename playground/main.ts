import { goShopping, greeting, openMailbox, showStatistics } from "./src/demos";

(async function () {
  // 案例1：打印欢迎语（读取用户的脚本设置）
  greeting();

  // 案例2：打印统计信息（持久化脚本数据）
  showStatistics();

  // 案例3：导航去蒙德杂货店（路径追踪）
  await goShopping();

  // 案例4：打开邮件（找图/找字）
  await openMailbox();
})();
