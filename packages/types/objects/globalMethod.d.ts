import "../types/BetterGenshinImpact/GameTask/Model/Area/ImageRegion";
import type { KeyCode } from "../types/BetterGenshinImpact/Helpers/User32Helper";

declare global {
  /**
   * 休眠执行指定时长
   * @param duration - 休眠时长（毫秒）
   * @since 0.32.0
   */
  function sleep(duration: number): Promise<void>;

  /**
   * 获取 BetterGI 版本号
   * @since 0.56.0
   */
  function getVersion(): string;

  /**
   * 模拟按下键盘按键（持续按住状态）
   * @param key - 要按下的按键
   * @since 0.34.5
   */
  function keyDown(key: KeyCode): void;

  /**
   * 模拟释放键盘按键
   * @param key - 要释放的按键
   * @since 0.34.5
   */
  function keyUp(key: KeyCode): void;

  /**
   * 模拟完整的按键操作（按下后释放）
   * @param key - 要按下的按键
   * @since 0.34.5
   */
  function keyPress(key: KeyCode): void;

  /**
   * 配置游戏窗口尺寸和显示缩放
   * @param w - 窗口宽度（像素，必须为16:9比例）
   * @param h - 窗口高度（像素，必须为16:9比例）
   * @param dpi - DPI（默认值：1）
   * @since 0.34.5
   */
  function setGameMetrics(w: number, h: number): void;
  // overload
  function setGameMetrics(w: number, h: number, dpi: number | null): void;

  /**
   * 获取游戏窗口尺寸和显示缩放
   * @since 0.53.0
   */
  function getGameMetrics(): number[];

  /**
   * 相对当前鼠标位置移动光标
   * @param x - 水平方向偏移量（像素）
   * @param y - 垂直方向偏移量（像素）
   * @since 0.34.5
   */
  function moveMouseBy(x: number, y: number): void;

  /**
   * 移动鼠标到绝对屏幕坐标
   * @param x - 目标水平位置（像素）
   * @param y - 目标垂直位置（像素）
   * @since 0.34.5
   */
  function moveMouseTo(x: number, y: number): void;

  /**
   * 在指定坐标执行鼠标点击
   * @param x - 点击水平位置（像素）
   * @param y - 点击垂直位置（像素）
   * @since 0.34.5
   */
  function click(x: number, y: number): void;

  /**
   * 左键单击（按下后释放）
   * @since 0.34.5
   */
  function leftButtonClick(): void;

  /**
   * 按下鼠标左键
   * @since 0.34.5
   */
  function leftButtonDown(): void;

  /**
   * 释放鼠标左键
   * @since 0.34.5
   */
  function leftButtonUp(): void;

  /**
   * 右键单击（按下后释放）
   * @since 0.34.5
   */
  function rightButtonClick(): void;

  /**
   * 按下鼠标右键
   * @since 0.34.5
   */
  function rightButtonDown(): void;

  /**
   * 释放鼠标右键
   * @since 0.34.5
   */
  function rightButtonUp(): void;

  /**
   * 中键单击（按下后释放）
   * @since 0.34.5
   */
  function middleButtonClick(): void;

  /**
   * 按下鼠标中键
   * @since 0.34.5
   */
  function middleButtonDown(): void;

  /**
   * 释放鼠标中键
   * @since 0.34.5
   */
  function middleButtonUp(): void;

  /**
   * 鼠标滚动
   * @param scrollAmountInClicks - 滚动的点击数 正数向上滚动，负数向下滚动
   * @since 0.44.7
   */
  function verticalScroll(scrollAmountInClicks: number): void;

  /**
   * 捕获当前游戏窗口内容
   * @since 0.34.5
   */
  function captureGameRegion(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;

  /**
   * 当前队伍 角色名称 数组
   * @since 0.48.0
   */
  function getAvatars(): string[];

  /**
   * 模拟输入文本
   * @param text - 输入的文本
   * @since 0.44.4
   */
  function inputText(text: string): void;
}

export {};
