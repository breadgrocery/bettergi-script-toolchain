本项目是一个为[Better Genshin Impact](https://github.com/babalae/better-genshin-impact) 设计的 JavaScript 开发工具集，旨在帮助开发者简化代码、不用重复造轮子。工具函数支持按需引入，轻量依赖。

## 安装

### 使用 npm

```shell
npm install @bettergi/utils
```

### 使用 pnpm

```shell
pnpm install @bettergi/utils
```

## 函数清单

### 游戏内操作

> 常见游戏内操作封装，省去手动实现的繁琐。

```ts
// 打开派蒙菜单
await openPaimonMenu();

// 打开菜单
await openMenu("邮件");

// 打开菜单页面
await openMenuPage("问卷");

// 调整游戏到指定时间
await setTimeTo(12, 35);

// 调整游戏时间段
await setTime("evening");

// tab 翻页到指定页面
await navigateToTab(() => {
  return findTextWithinBounds("小道具", 0, 0, 220, 96) !== undefined;
});
```

### 图文识别

> 对 RecognitionObject 代码的封装，对于简单的找图、找字操作，不再需要编写复杂的代码。

```ts
const i1 = findImage("assets/关闭.png");

// 在指定方向上搜索图片，找不到返回 undefined
const i2 = findImageInDirection("assets/关闭.png", "north-east");

// 在指定区域内搜索图片，找不到返回 undefined
const i3 = findImageWithinBounds("assets/关闭.png", 960, 0, 960, 1080);

// 在整个画面内搜索文本（不包含、忽略大小写），找不到返回 undefined
const t1 = findText("购买");

// 在指定方向上搜索文本（包含、忽略大小写），找不到返回 undefined
const t2 = findTextInDirection("师傅", "east", { contains: true, ignoreCase: true });

// 在指定区域内搜索文本（不包含、忽略大小写），找不到返回 undefined
const t3 = findTextWithinBounds("确认", 960, 540, 960, 540);
```

### 行为流程

> 对脚本开发过程中常见工作流的抽象，例如: 等待/断言 操作/元素/区域 完成/出现/消失。

```ts
// 等待直到找不到[关闭按钮] 或 5秒后超时，每隔1秒检查一次，期间按 Esc 键
const done = await waitForAction(
  () => findImageInDirection("assets/关闭.png", "north-east") === undefined,
  () => keyPress("ESCAPE"),
  { maxAttempts: 5, retryInterval: 1000 }
);
if (!done) throw new Error("关闭页面超时");

// 断言 "世界等级" 区域即将出现 或 5秒后超时抛出异常，每隔1秒检查一次，期间按 Esc 键
await assertRegionAppearing(
  () => findTextInDirection("世界等级", "north-west"),
  "打开派蒙菜单超时",
  () => keyPress("ESCAPE"),
  { maxAttempts: 5, retryInterval: 1000 }
);

// 断言 "购买" 区域不存在 或 5秒后超时抛出异常，每隔1秒检查一次，期间如果存在 "购买" 按钮则点击
const findButton = () => findTextWithinBounds("购买", 500, 740, 900, 110);
await assertRegionDisappearing(findButton, "点击购买按钮超时", () => findButton()?.click(), {
  maxAttempts: 5,
  retryInterval: 1000
});
```

### 鼠标操作

> 对常见鼠标操作的封装，如鼠标滚动、拖拽等。

```ts
// 鼠标从 (745, 610) 平滑自然地移动 (1920, 1080)
await naturalMouseMove(0, 0, 1920, 1080);

// 鼠标从 (745, 610) 拖拽到 (1280, 610)
await mouseDrag(745, 610, 1280, 610);

// 鼠标滚轮向上滚动 175 像素
await mouseScrollUp(175);

// 鼠标滚轮向下滚动 175 像素
await mouseScrollDown(175);

// 鼠标滚轮向上滚动 99 行，行高 175（默认: 背包物品行高）
await mouseScrollUpLines(99);

// 鼠标滚轮向下滚动 1 行，行高 115（自定义: 商店物品行高）
await mouseScrollDownLines(1, 115);
```

### 数据存储

> 对象数据持久化，通过 Proxy 实现自动存储。从而可以无感知地读取/更新数据，而无需考虑如何持久化。

```ts
import { useStore } from "@bettergi/utils";

// 创建/读取存储对象，保存到存储文件 store/state.json 中
const state = useStore<{ lastUsedTime?: number; count: number }>("state");
if (state?.lastUsedTime) {
  log.info(`欢迎回来！上次使用时间: ${state.lastUsedTime}，计数器已累计至: ${state.count}`);
}
try {
  // 模拟脚本运行期间状态的变化
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    state.count = (state.count || 0) + 1; // 自动同步保存到文件
  }
} finally {
  state.lastUsedTime = Date.now(); // 自动同步保存到文件
}
```

### 网络请求

> 对网络请求的简易封装。

```ts
import { getForBody, postForBody } from "@bettergi/utils";

// 发送 GET 请求获取响应体内容
// 提示: 需要在 `manifest.json` 文件中配置 `http_allowed_urls`，并在 调度器 -> 修改通用配置 中启用
const body1 = await getForBody("https://example.com/", undefined, { "User-Agent": "BetterGI" });
const body2 = await postForBody("https://example.com/", undefined, { "User-Agent": "BetterGI" });
log.info(`GET 请求响应体内容${body1}`);
log.info(`POST 请求响应体内容${body2}`);
```

### 文件操作

```ts
// 列出指定文件夹内所有文件路径
const files = listFiles("assets");

// 读取文件文本行（非空白、去除首尾空白、去重）
const lines = readLinesSync("assets/data.txt", { notBlank: true, trim: true, distinct: true });
```

### 日期时间

```ts
// 获取下一个（含当日）凌晨4点的时间
const d1 = getNextDay4AM();
// 获取下一个（含当日）周一凌晨4点的时间
const d2 = getNextMonday4AM();
```

### 杂项

```ts
// 生成UUID（不带连字符）
const uuid = generateUUID(false);

// 数组洗牌
const arr = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(arr);
```
