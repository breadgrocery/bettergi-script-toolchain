import { mouseSlide } from "./mouse";
import { ListView, findTextInDirection, findTextWithinBounds, findTextWithinListView } from "./ocr";
import { assertRegionAppear, assertRegionDisappear } from "./workflow";

/**
 * 打开派蒙菜单
 */
export const openPaimonMenu = async () => {
  // 1.返回主界面
  await genshin.returnMainUi();

  // 2.打开派蒙菜单
  await assertRegionAppear(
    () => findTextInDirection("世界等级", "north-west"),
    "打开派蒙菜单超时",
    () => keyPress("ESCAPE")
  );
};

/**
 * 打开游戏菜单（左侧按钮）
 * @param name 菜单名称
 * @param reverse 是否反向搜索（可选）
 * @param options 搜索参数（可选）
 */
export const openMenu = async (
  name: "拍照" | "公告" | "邮件" | "时间" | "设置" | (string & {}),
  reverse: boolean = false,
  options: { x?: number; step?: number; timeout?: number } = {}
) => {
  // 1.打开派蒙菜单
  await openPaimonMenu();

  // 2.搜索菜单按钮
  const { x = 50, step = 30, timeout = 3000 } = options;
  const findTooltip = () => findTextWithinBounds(name, 0, 0, x + 150, genshin.height);

  let result: Region | undefined = undefined;
  const steps = Math.ceil(genshin.height / step);
  for (let i = 0; i < steps; i++) {
    const o = i * step;
    const y = reverse ? genshin.height - o : o;
    moveMouseTo(x, y);
    await sleep(30); // 等待提示文字出现
    if ((result = findTooltip()) !== undefined) break;
  }

  // 3.点击菜单按钮
  if (result != undefined) {
    await assertRegionDisappear(findTooltip, `打开菜单 ${name} 超时`, () => {
      click(x, result.y);
    });
  } else {
    throw new Error(`打开菜单 ${name} 失败`);
  }
};

/**
 * 打开游戏菜单页面（菜单按钮列表）
 * @param name 菜单页面名称
 * @param config 菜单页面视图参数
 */
export const openMenuPage = async (name: string, listView?: ListView) => {
  // 1.打开派蒙菜单
  await openPaimonMenu();

  // 2.搜索菜单页面
  const { x = 100, y = 330, w = 670, h = 730, maxItems = 5, lineHeight = 142 } = listView || {};
  const pageButton = await findTextWithinListView(name, { x, y, w, h, maxItems, lineHeight });
  if (!pageButton) throw new Error(`搜索菜单页面 ${name} 失败`);

  // 3.点击打开菜单页面
  pageButton.click();
};

/**
 * 调整游戏时间
 * @param period 时间段
 * @param config 时钟参数
 */
export const setTime = async (
  period: "night" | "morning" | "noon" | "evening",
  config: {
    centerX?: number;
    centerY?: number;
    radius?: number;
    offset?: number;
  } = {}
) => {
  // 1.打开时间页面
  await openMenu("时间", true);

  // 2.拨动指针
  const { centerX = 1440, centerY = 502, radius = 400, offset = 5 } = config;
  const index = ["night", "morning", "noon", "evening"].indexOf(period);
  const periodsDirections = [
    () => mouseSlide(centerX, centerY, centerX - offset, centerY + radius),
    () => mouseSlide(centerX, centerY, centerX - radius, centerY - offset),
    () => mouseSlide(centerX, centerY, centerX + offset, centerY - radius),
    () => mouseSlide(centerX, centerY, centerX + radius, centerY + offset)
  ];

  const jobs = Array.from(
    { length: 4 },
    (_, i) => periodsDirections[(index + i + 1) % periodsDirections.length]
  );

  for (const job of jobs) await job();

  // 3.点击确认按钮，等待调整结束
  await assertRegionAppear(
    () => findTextInDirection("时间少于", "south-east", { contains: true }),
    "调整时间超时",
    () => {
      findTextInDirection("确认", "south-east")?.click();
    },
    { maxAttempts: 20, retryInterval: 1000 }
  );

  // 4.返回主界面
  await genshin.returnMainUi();
};
