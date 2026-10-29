import type {
  ClrHostValue,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/IDisposable";
import "./MaskWindowDrawingModels";

/**
 * 遮罩窗口绘制入口（业务侧）
 * @since 0.67.0
 */
declare const iMaskWindowDrawingBoardInputBrand: unique symbol;
export interface IMaskWindowDrawingBoardInput {
  readonly [iMaskWindowDrawingBoardInputBrand]: true;
}

export interface IMaskWindowDrawingBoard
  extends
    Microsoft.ClearScript.ClrInterfaceView<IMaskWindowDrawingBoardInput>,
    IMaskWindowDrawingBoardInput {
  /**
   * 整组替换图形
   * @param group 绘制分组
   * @param shapes 图形列表；为 null 或空时等价于 clear
   * @since 0.67.0
   */
  set(
    group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup | string,
    shapes:
      | System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape>
      | readonly BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape[]
      | null
  ): VoidResult;
  /**
   * 设置单个图形
   * @param group 绘制分组
   * @param shape 图形
   * @since 0.67.0
   */
  set(
    group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup | string,
    shape: BetterGenshinImpact.Core.Mask.MaskWindowDrawingShape
  ): VoidResult;
  /**
   * 清除指定分组
   * @param group 绘制分组
   * @since 0.67.0
   */
  clear(group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup | string): VoidResult;
  /**
   * 清除全部绘制内容
   * @since 0.67.0
   */
  clearAll(): VoidResult;
  /**
   * 返回一个作用域，Dispose 时清除该分组
   * @param group 绘制分组
   * @since 0.67.0
   */
  scope(group: BetterGenshinImpact.Core.Mask.MaskWindowDrawingGroup | string): System.IDisposable;
}

declare global {
  namespace BetterGenshinImpact.Core.Mask {
    type IMaskWindowDrawingBoardInput =
      import("./IMaskWindowDrawingBoard").IMaskWindowDrawingBoardInput;
    type IMaskWindowDrawingBoard = import("./IMaskWindowDrawingBoard").IMaskWindowDrawingBoard;
  }
}

export interface IMaskWindowDrawingBoardHostType extends HostType<
  IMaskWindowDrawingBoard,
  InterfaceTypeTrait
> {}

export {};
