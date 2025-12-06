import { libDemo } from "./src/demos/lib";
import { nativeDemo } from "./src/demos/native";

(async function () {
  //! 返回主界面
  await genshin.returnMainUi();

  //! 原生JS代码示例
  await nativeDemo();

  //! @bettergi/utils 工具库代码示例
  //! 函数清单详见：https://github.com/breadgrocery/bettergi-script-toolchain/tree/main/packages/utils
  await libDemo();

  //! @bettergi/cli 同时支持 loaders
  //! 详见：https://github.com/breadgrocery/bettergi-script-toolchain/tree/main/packages/cli
})();
