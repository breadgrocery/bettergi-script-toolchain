import { assertRegionAppearing, assertRegionDisappearing } from "./asserts";
import { mouseMoveAlongWaypoints } from "./mouse";
import { ListView, findTextInDirection, findTextWithinBounds, findTextWithinListView } from "./ocr";

/**
 * 临时设置游戏分辨率和DPI缩放比例，执行指定动作后恢复
 * 适用于使用了鼠标移动的操作，保证在不同的分辨率和DPI下都能正确地复现鼠标操作
 * @param w 游戏宽度
 * @param h 游戏高度
 * @param dpi 系统屏幕的DPI缩放比例
 * @param action 执行动作
 */
export const withGameMetrics = async <T>(
  w: number,
  h: number,
  dpi: number,
  action: () => Promise<T> | T
): Promise<T> => {
  const [_w, _h, _dpi] = globalThis["getGameMetrics"] ? getGameMetrics() : [];
  try {
    setGameMetrics(w, h, dpi);
    return await action();
  } finally {
    globalThis["getGameMetrics"] && setGameMetrics(_w, _h, _dpi);
  }
};

/**
 * 打开派蒙菜单
 */
export const openPaimonMenu = async () => {
  // 1.返回主界面
  await genshin.returnMainUi();

  // 2.打开派蒙菜单
  await assertRegionAppearing(
    () => findTextWithinBounds("生日", 300, 230, 440, 100),
    "打开派蒙菜单超时",
    () => keyPress("ESCAPE")
  );
};

/**
 * 打开游戏菜单（左侧按钮）
 * @param name 菜单名称
 * @param stepBackwards 是否反向步进（可选）
 * @param options 搜索参数（可选）
 */
export const openMenu = async (
  name: "拍照" | "公告" | "邮件" | "时间" | "设置" | (string & {}),
  stepBackwards: boolean = false,
  options: { navWidth?: number; steps?: number } = {}
) => {
  // 1.打开派蒙菜单
  await openPaimonMenu();

  // 2.步进搜索菜单按钮
  const { navWidth = 95, steps: step = 30 } = options;
  const findTooltip = () => findTextWithinBounds(name, navWidth, 0, 20 + name.length * 20, 1080);
  const tooltip = await withGameMetrics(1920, 1080, 1.5, async () => {
    let result: Region | undefined = undefined;
    const steps = Math.ceil(1080 / step);
    for (let i = 0; i < steps; i++) {
      const o = i * step;
      const y = stepBackwards ? 1080 - o : o;
      moveMouseTo(Math.round(navWidth / 2), y);
      await sleep(30); // 等待提示文字出现
      if ((result = findTooltip()) !== undefined) return result;
    }
  });

  // 3.点击菜单按钮
  if (tooltip != undefined) {
    await assertRegionDisappearing(findTooltip, `打开菜单 ${name} 超时`, () => {
      click(Math.round(navWidth / 2), tooltip.y);
    });
  } else {
    throw new Error(`打开菜单 ${name} 失败`);
  }
};

/**
 * 打开游戏菜单页面（菜单按钮列表）
 * @param name 菜单页面名称
 * @param listView 菜单页面视图参数
 */
export const openMenuPage = async (
  name:
    | "商城"
    | "队伍配置"
    | "好友"
    | "成就"
    | "图鉴"
    | "角色图鉴"
    | "角色"
    | "提升指南"
    | "背包"
    | "任务"
    | "地图"
    | "活动"
    | "冒险之证"
    | "祈愿"
    | "纪行"
    | "多人游戏"
    | "千星商城"
    | "人气奇域"
    | "奇域收藏"
    | "我的奇域"
    | "大厅"
    | "装扮搭配"
    | "颂愿"
    | "纪游"
    | (string & {}),
  listView?: ListView
) => {
  // 1.打开派蒙菜单
  await openPaimonMenu();

  // 2.搜索菜单页面按钮
  const button = await withGameMetrics(1920, 1080, 1.5, async () => {
    const { x = 95, y = 330, w = 670, h = 730, lineHeight = 142 } = listView || {};
    return await findTextWithinListView(name, { x, y, w, h, lineHeight, scrollLines: 2 });
  });
  if (!button) throw new Error(`搜索菜单页面 ${name} 失败`);

  // 3.点击打开菜单页面
  await assertRegionDisappearing(
    () => findTextWithinBounds(name, button.x, button.y, button.width, button.height),
    `打开菜单页面 ${name} 超时`,
    () => {
      button.click();
    }
  );
};

export type ClockOptions = {
  /** 时钟中心X坐标 */
  centerX?: number;
  /** 时钟中心Y坐标 */
  centerY?: number;
  /** 偏移小时数（默认: 6） */
  offsetHours?: number;
  /** 时钟半径（默认: 154） */
  radius?: number;
  /** 平滑度（默认: 3） */
  smooth?: number;
};

/**
 * 调整游戏时间到指定时分
 * @param hour 小时
 * @param minute 分钟
 * @param options 时钟参数
 */
export const setTimeTo = async (hour: number, minute: number, options?: ClockOptions) => {
  // 1.打开时间页面
  await openMenu("时间", true);

  // 2.计算调整时钟的路径点
  const {
    centerX = 1440,
    centerY = 502,
    offsetHours = 6,
    radius = 150,
    smooth = 4
  } = options || {};
  const radian = ((((hour + offsetHours) * 60 + minute) % 1440) / 1440) * Math.PI * 2;
  const trackRadius = radius + 150; // 增加拨动半径，提高准确度
  const waypoints = [{ x: centerX, y: centerY }].concat(
    Array.from({ length: Math.max(smooth, 3) })
      // 计算弧度
      .map((_, i) => radian + (1 + i / (Math.max(smooth, 3) - 1)) * Math.PI)
      // 计算相对圆点坐标
      .map(rad => ({ x: trackRadius * Math.cos(rad), y: trackRadius * Math.sin(rad) }))
      // 计算绝对坐标
      .map(p => ({ x: Math.round(p.x + centerX), y: Math.round(p.y + centerY) }))
  );

  // 3.调整时间
  await withGameMetrics(1920, 1080, 1.5, async () => {
    // 拨动指针
    await mouseMoveAlongWaypoints(waypoints, { shouldDrag: true });

    // 点击确认按钮，等待调整结束
    await assertRegionAppearing(
      () => findTextInDirection("时间少于", "south-east", { contains: true }),
      "调整时间超时",
      () => {
        findTextInDirection("确认", "south-east")?.click();
      },
      { maxAttempts: 20, retryInterval: 1000 }
    );
  });

  // 4.返回主界面
  await genshin.returnMainUi();
};

/**
 * 调整游戏时间到指定时间段
 * @param period 时间段
 * @param options 时钟参数
 */
export const setTime = async (
  period: "night" | "morning" | "noon" | "evening",
  options?: ClockOptions
) => {
  switch (period) {
    case "night":
      return setTimeTo(0, 5, options);
    case "morning":
      return setTimeTo(6, 5, options);
    case "noon":
      return setTimeTo(12, 5, options);
    case "evening":
      return setTimeTo(18, 5, options);
  }
};

/** tab 翻页配置 */
export type TabNavigationOptions = {
  /** 标签页图标宽度（默认：96） */
  tabIconWidth?: number;
  /** 翻页按钮垂直偏移（默认：540） */
  verticalOffset?: number;
  /** 翻页按钮左侧内边距（默认：72） */
  paddingLeft?: number;
  /** 翻页按钮右侧内边距（默认：72） */
  paddingRight?: number;
  /** 是否向前翻页（默认：false） */
  backwards?: boolean;
  /** 最大尝试次数（默认：屏幕宽度 / 标签页图标宽度） */
  maxAttempts?: number;
  /** 每次尝试间隔时间（毫秒，默认：1000） */
  retryInterval?: number;
};

/**
 * 导航到指定标签页
 * @param condition 导航成功的条件
 * @param options 翻页配置
 * @returns - true  条件满足
 *          - false 达到最大重试次数
 */
export const navigateToTab = async (condition: () => boolean, options?: TabNavigationOptions) => {
  const {
    tabIconWidth = 96,
    verticalOffset = 540,
    paddingLeft = 72,
    paddingRight = 72,
    backwards = false,
    retryInterval = 1000
  } = options || {};
  const attempts = Math.floor(options?.maxAttempts ?? 1920 / tabIconWidth);

  for (let i = 0; i < attempts; i++) {
    if (i === 0 && condition()) return true; // fast path
    click(backwards ? paddingLeft : 1920 - paddingRight, verticalOffset); // prev or next
    await sleep(retryInterval);
    if (condition()) return true;
  }
  return false;
};
