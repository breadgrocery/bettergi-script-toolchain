import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/Rect";
import "../../../System/Collections/Generic/IEnumerable";
import type { KeyCode } from "../../Helpers/User32Helper";
import type { BvFlow, BvFlowCallback } from "./BvFlow";
import type { BvLocator } from "./BvLocator";
import type { BvPage } from "./BvPage";

type Int32Value = number | StrongNumeric<Int32Host>;
type DoubleValue = number | StrongNumeric<DoubleHost>;

/**
 * 尚未提交的 BgiVision 流程动作，可配置重试条件或衔接下一动作
 * @since 0.63.0
 */
declare const bvFlowActionBrand: unique symbol;
export interface BvFlowAction extends ClrHostValue {
  readonly [bvFlowActionBrand]: true;
  /**
   * 设置条件动作的超时时间
   * @param milliseconds 超时时间（毫秒），必须大于 0
   * @returns 当前动作
   * @since 0.63.0
   */
  withTimeout(milliseconds: Int32Value): BvFlowAction;
  /**
   * 设置条件动作的重试间隔
   * @param milliseconds 重试间隔（毫秒），必须大于 0
   * @returns 当前动作
   * @since 0.63.0
   */
  withRetryInterval(milliseconds: Int32Value): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加脚本回调动作
   * @since 0.63.0
   */
  do(action: BvFlowCallback): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加键盘单击动作
   * @since 0.63.0
   */
  keyPress(key: KeyCode): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加鼠标左键单击动作
   * @since 0.63.0
   */
  click(): BvFlowAction;
  click(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加鼠标右键单击动作
   * @since 0.63.0
   */
  rightClick(): BvFlowAction;
  rightClick(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加鼠标中键单击动作
   * @since 0.63.0
   */
  middleClick(): BvFlowAction;
  middleClick(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加鼠标移动动作
   * @since 0.63.0
   */
  moveTo(): BvFlowAction;
  moveTo(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并添加指定起止坐标的拖动动作
   * @since 0.63.0
   */
  drag(fromX: DoubleValue, fromY: DoubleValue, toX: DoubleValue, toY: DoubleValue): BvFlowAction;
  drag(
    fromX: DoubleValue,
    fromY: DoubleValue,
    toX: DoubleValue,
    toY: DoubleValue,
    duration: Int32Value
  ): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并从上一步匹配区域中心拖动到指定坐标
   * @since 0.63.0
   */
  dragTo(toX: DoubleValue, toY: DoubleValue): BvFlowAction;
  dragTo(toX: DoubleValue, toY: DoubleValue, duration: Int32Value): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，并从指定坐标拖动到上一步匹配区域中心
   * @since 0.63.0
   */
  dragFrom(fromX: DoubleValue, fromY: DoubleValue): BvFlowAction;
  dragFrom(fromX: DoubleValue, fromY: DoubleValue, duration: Int32Value): BvFlowAction;
  /**
   * 将当前动作作为一次性步骤提交，再等待指定文本出现
   * @since 0.63.0
   */
  waitUntilText(text: string): BvFlow;
  waitUntilText(text: string, rect: OpenCvSharp.Rect): BvFlow;
  waitUntilText(text: string, rect: OpenCvSharp.Rect, timeout: Int32Value | null): BvFlow;
  waitUntilText(
    text: string,
    rect: OpenCvSharp.Rect,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再等待任一指定文本出现
   * @since 0.63.0
   */
  waitUntilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>
  ): BvFlow;
  waitUntilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>,
    rect: OpenCvSharp.Rect
  ): BvFlow;
  waitUntilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>,
    rect: OpenCvSharp.Rect,
    timeout: Int32Value | null
  ): BvFlow;
  waitUntilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>,
    rect: OpenCvSharp.Rect,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再等待定位器目标出现
   * @since 0.63.0
   */
  waitUntil(target: BvLocator): BvFlow;
  waitUntil(target: BvLocator, timeout: Int32Value | null): BvFlow;
  waitUntil(
    target: BvLocator,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再等待任一定位器目标出现
   * @since 0.63.0
   */
  waitUntilAny(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>
  ): BvFlow;
  waitUntilAny(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>,
    timeout: Int32Value | null
  ): BvFlow;
  waitUntilAny(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再等待定位器目标消失
   * @since 0.63.0
   */
  waitUntilDisappear(target: BvLocator): BvFlow;
  waitUntilDisappear(target: BvLocator, timeout: Int32Value | null): BvFlow;
  waitUntilDisappear(
    target: BvLocator,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再等待全部定位器目标消失
   * @since 0.63.0
   */
  waitUntilAllDisappear(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>
  ): BvFlow;
  waitUntilAllDisappear(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>,
    timeout: Int32Value | null
  ): BvFlow;
  waitUntilAllDisappear(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>,
    timeout: Int32Value | null,
    retryInterval: Int32Value | null
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交，再添加固定等待步骤
   * @since 0.63.0
   */
  wait(milliseconds: Int32Value): BvFlow;
  /**
   * 重复当前动作直到指定文本出现
   * @since 0.63.0
   */
  untilText(text: string): BvFlow;
  untilText(text: string, rect: OpenCvSharp.Rect): BvFlow;
  /**
   * 重复当前动作直到任一指定文本出现
   * @since 0.63.0
   */
  untilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>
  ): BvFlow;
  untilAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>,
    rect: OpenCvSharp.Rect
  ): BvFlow;
  /**
   * 重复当前动作直到定位器目标出现
   * @since 0.63.0
   */
  until(target: BvLocator): BvFlow;
  /**
   * 重复当前动作直到任一定位器目标出现
   * @since 0.63.0
   */
  untilAny(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>
  ): BvFlow;
  /**
   * 重复当前动作直到定位器目标消失
   * @since 0.63.0
   */
  untilDisappear(target: BvLocator): BvFlow;
  /**
   * 重复当前动作直到全部定位器目标消失
   * @since 0.63.0
   */
  untilAllDisappear(
    targets: readonly BvLocator[] | System.Collections.Generic.IEnumerableInput<BvLocator>
  ): BvFlow;
  /**
   * 将当前动作作为一次性步骤提交并执行流程
   * @returns 在任务完成后兑现所属页面的 Promise
   * @since 0.63.0
   */
  run(): Promise<BvPage>;
}

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    type BvFlowAction = import("./BvFlowAction").BvFlowAction;
  }
}

export interface BvFlowActionHostType extends HostType<BvFlowAction, ReferenceTypeTrait> {}

export {};
