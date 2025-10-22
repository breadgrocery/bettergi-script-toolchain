import { libDemo } from "./src/demos/lib";
import { nativeDemo } from "./src/demos/native";

(async function () {
  // 返回主界面
  await genshin.returnMainUi();

  // 原生代码教程
  await nativeDemo();

  // 工具库代码教程
  await libDemo();
})();
