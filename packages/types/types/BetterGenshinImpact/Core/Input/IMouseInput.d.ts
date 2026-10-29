import type {
  DoubleHost,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

/**
 * 鼠标输入接口
 * @since 0.67.0
 */
declare const iMouseInputInputBrand: unique symbol;
export interface IMouseInputInput {
  readonly [iMouseInputInputBrand]: true;
}

export interface IMouseInput
  extends Microsoft.ClearScript.ClrInterfaceView<IMouseInputInput>, IMouseInputInput {
  /**
   * 相对移动鼠标（视角控制）
   * @param dx 水平偏移量
   * @param dy 垂直偏移量
   * @since 0.67.0
   */
  moveMouseBy(
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 绝对定位鼠标。桌面绝对坐标，按主屏幕归一化到 0~65535
   * @param absX 归一化横坐标
   * @param absY 归一化纵坐标
   * @since 0.67.0
   */
  moveMouseTo(
    absX: number | StrongNumeric<DoubleHost>,
    absY: number | StrongNumeric<DoubleHost>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 按下鼠标左键
   * @since 0.67.0
   */
  leftButtonDown(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 抬起鼠标左键
   * @since 0.67.0
   */
  leftButtonUp(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 单击鼠标左键
   * @since 0.67.0
   */
  leftButtonClick(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 按下鼠标右键
   * @since 0.67.0
   */
  rightButtonDown(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 抬起鼠标右键
   * @since 0.67.0
   */
  rightButtonUp(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 单击鼠标右键
   * @since 0.67.0
   */
  rightButtonClick(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 按下鼠标中键
   * @since 0.67.0
   */
  middleButtonDown(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 抬起鼠标中键
   * @since 0.67.0
   */
  middleButtonUp(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 单击鼠标中键
   * @since 0.67.0
   */
  middleButtonClick(): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 按下侧键
   * @param buttonId 1 = 侧键1（XBUTTON1），2 = 侧键2（XBUTTON2）
   * @since 0.67.0
   */
  xButtonDown(
    buttonId: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 抬起侧键
   * @param buttonId 1 = 侧键1（XBUTTON1），2 = 侧键2（XBUTTON2）
   * @since 0.67.0
   */
  xButtonUp(
    buttonId: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 单击侧键
   * @param buttonId 1 = 侧键1（XBUTTON1），2 = 侧键2（XBUTTON2）
   * @since 0.67.0
   */
  xButtonClick(
    buttonId: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 垂直滚轮滚动
   * @param scrollAmountInClicks 滚动量（正数为向上，负数为向下）
   * @since 0.67.0
   */
  verticalScroll(
    scrollAmountInClicks: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.Input.IMouseInput;
  /**
   * 等待指定毫秒数
   * @param ms 等待毫秒数
   * @since 0.67.0
   */
  sleep(ms: number | StrongNumeric<Int32Host>): BetterGenshinImpact.Core.Input.IMouseInput;
}

declare global {
  namespace BetterGenshinImpact.Core.Input {
    type IMouseInputInput = import("./IMouseInput").IMouseInputInput;
    type IMouseInput = import("./IMouseInput").IMouseInput;
  }
}

export interface IMouseInputHostType extends HostType<IMouseInput, InterfaceTypeTrait> {}

export {};
