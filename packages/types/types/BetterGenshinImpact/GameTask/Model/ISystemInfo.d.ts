import type { HostType, InterfaceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/Rect";
import "../../../System/Diagnostics/Process";
import "../../../System/Drawing/Size";
import "../../../Vanara/PInvoke/RECT";
import "./Area/DesktopRegion";

/**
 * 系统与游戏窗口信息，提供显示器、捕获区域与缩放比例
 * @since 0.43.1
 */
declare const iSystemInfoInputBrand: unique symbol;
export interface ISystemInfoInput {
  readonly [iSystemInfoInputBrand]: true;
}

export interface ISystemInfo
  extends Microsoft.ClearScript.ClrInterfaceView<ISystemInfoInput>, ISystemInfoInput {
  /**
   * 显示器分辨率（无缩放）
   * @since 0.43.1
   */
  readonly displaySize: System.Drawing.Size;
  /**
   * 游戏窗口内分辨率
   * @since 0.43.1
   */
  readonly gameScreenSize: Vanara.PInvoke.RECT;
  /**
   * 以 1080P 为标准的素材缩放比例，不会大于 1，与 `zoomOutMax1080PRatio` 相等
   * @since 0.43.1
   */
  readonly assetScale: number;
  /**
   * 游戏区域相对 1080P 的缩小比例，最大值为 1
   * @since 0.43.1
   */
  readonly zoomOutMax1080PRatio: number;
  /**
   * 捕获游戏区域缩放至 1080P 的比例
   * @since 0.43.1
   */
  readonly scaleTo1080PRatio: number;
  /**
   * 捕获窗口区域，与实际游戏画面一致
   * @since 0.43.1
   */
  captureAreaRect: Vanara.PInvoke.RECT;
  /**
   * 限制到最大 1080P 的捕获窗口区域；大于 1080P 时为 1920×1080
   * @since 0.43.1
   */
  scaleMax1080PCaptureRect: OpenCvSharp.Rect;
  /**
   * 游戏进程
   * @since 0.43.1
   */
  readonly gameProcess: System.Diagnostics.Process;
  /**
   * 游戏进程名称
   * @since 0.43.1
   */
  readonly gameProcessName: string;
  /**
   * 游戏进程 ID
   * @since 0.43.1
   */
  readonly gameProcessId: number;
  /**
   * 桌面区域
   * @since 0.43.1
   */
  readonly desktopRectArea: BetterGenshinImpact.GameTask.Model.Area.DesktopRegion;
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model {
    type ISystemInfoInput = import("./ISystemInfo").ISystemInfoInput;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.Model {
    type ISystemInfo = import("./ISystemInfo").ISystemInfo;
  }
}

export interface ISystemInfoHostType extends HostType<ISystemInfo, InterfaceTypeTrait> {}

export {};
