import { ui_touch_icon_plus_b } from "@bettergi/assets";
import { findImage } from "@bettergi/utils";
import { ces } from "./src/util";

(async function () {
  const res = findImage(ui_touch_icon_plus_b(), { useMask: false });
  res?.drawSelf("sadas");
  const arr = ces(ui_touch_icon_plus_b);
  for (const [size, sim] of arr) {
    log.info(`大小: ${size}, 相似度: ${sim}`);
  }
})();
