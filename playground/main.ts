import {
  assertExists,
  assertNotExists,
  findImageInDirection,
  findTextInDirection,
  findTextWithinBounds,
  waitUntil
} from "@bettergi/utils";

// 等待直到找不到[关闭按钮] 或 5秒后超时，每隔1秒检查一次，期间按 Esc 键
const done = await waitUntil(
  () => findImageInDirection("assets/关闭.png", "north-east") === undefined,
  5000,
  1000,
  () => keyPress("ESCAPE")
);
if (!done) throw new Error("关闭页面超时");

// 断言 "世界等级" 区域存在 或 5秒后超时抛出异常，每隔1秒检查一次，期间按 Esc 键
await assertExists(
  () => findTextInDirection("世界等级", false, true, "north-west"),
  "打开派蒙菜单超时",
  5000,
  1000,
  () => keyPress("ESCAPE")
);

// 断言 "购买" 区域存在 或 5秒后超时抛出异常，每隔1秒检查一次，期间按 "购买" 按钮
const findButton = () => findTextWithinBounds("购买", true, true, 500, 740, 900, 110);
await assertNotExists(findButton, "点击购买按钮超时", 5000, 1000, () => findButton()?.click());
