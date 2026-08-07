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
import type { BvFlowAction } from "./BvFlowAction";
import type { BvLocator } from "./BvLocator";
import type { BvPage } from "./BvPage";

type Int32Value = number | StrongNumeric<Int32Host>;
type DoubleValue = number | StrongNumeric<DoubleHost>;

/**
 * 流程中的脚本回调，可同步完成或返回 Promise
 * @since 0.63.0
 */
export type BvFlowCallback = () => void | Promise<void>;

/**
 * BgiVision 链式流程，按添加顺序执行等待、输入与脚本动作
 * @since 0.63.0
 */
declare const bvFlowBrand: unique symbol;
export interface BvFlow extends ClrHostValue {
  readonly [bvFlowBrand]: true;
  /**
   * 设置后续等待步骤的默认超时时间；添加步骤后不可修改
   * @param milliseconds 超时时间（毫秒），必须大于 0
   * @returns 当前流程
   * @since 0.63.0
   */
  withDefaultTimeout(milliseconds: Int32Value): BvFlow;
  /**
   * 设置后续等待步骤的默认重试间隔；添加步骤后不可修改
   * @param milliseconds 重试间隔（毫秒），必须大于 0
   * @returns 当前流程
   * @since 0.63.0
   */
  withDefaultRetryInterval(milliseconds: Int32Value): BvFlow;
  /**
   * 添加脚本回调动作
   * @param action 同步或异步脚本回调
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  do(action: BvFlowCallback): BvFlowAction;
  /**
   * 添加键盘单击动作
   * @param key 虚拟键名称
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  keyPress(key: KeyCode): BvFlowAction;
  /**
   * 添加鼠标左键单击动作；省略坐标时使用上一步匹配区域中心
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  click(): BvFlowAction;
  click(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 添加鼠标右键单击动作；省略坐标时使用上一步匹配区域中心
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  rightClick(): BvFlowAction;
  rightClick(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 添加鼠标中键单击动作；省略坐标时使用上一步匹配区域中心
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  middleClick(): BvFlowAction;
  middleClick(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 添加鼠标移动动作；省略坐标时使用上一步匹配区域中心
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  moveTo(): BvFlowAction;
  moveTo(x: DoubleValue, y: DoubleValue): BvFlowAction;
  /**
   * 添加指定起止坐标的拖动动作
   * @param duration 拖动时长（毫秒），省略时为 300
   * @returns 可附加重试条件的动作
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
   * 从上一步匹配区域中心拖动到指定坐标
   * @param duration 拖动时长（毫秒），省略时为 300
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  dragTo(toX: DoubleValue, toY: DoubleValue): BvFlowAction;
  dragTo(toX: DoubleValue, toY: DoubleValue, duration: Int32Value): BvFlowAction;
  /**
   * 从指定坐标拖动到上一步匹配区域中心
   * @param duration 拖动时长（毫秒），省略时为 300
   * @returns 可附加重试条件的动作
   * @since 0.63.0
   */
  dragFrom(fromX: DoubleValue, fromY: DoubleValue): BvFlowAction;
  dragFrom(fromX: DoubleValue, fromY: DoubleValue, duration: Int32Value): BvFlowAction;
  /**
   * 等待指定文本出现
   * @param rect 感兴趣区域；省略时搜索整幅画面
   * @param timeout 超时时间（毫秒）；null 使用流程默认值
   * @param retryInterval 重试间隔（毫秒）；null 使用流程默认值
   * @returns 当前流程
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
   * 等待任一指定文本出现
   * @param texts 字符串集合或 ClearScript JS Array
   * @returns 当前流程
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
   * 等待定位器目标出现
   * @returns 当前流程
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
   * 等待任一定位器目标出现
   * @param targets 定位器集合或 ClearScript JS Array
   * @returns 当前流程
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
   * 等待定位器目标消失
   * @returns 当前流程
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
   * 等待全部定位器目标消失
   * @param targets 定位器集合或 ClearScript JS Array
   * @returns 当前流程
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
   * 添加固定等待步骤
   * @param milliseconds 等待时长（毫秒），不得小于 0
   * @returns 当前流程
   * @since 0.63.0
   */
  wait(milliseconds: Int32Value): BvFlow;
  /**
   * 执行流程；同一流程不可并发执行，开始后不可再添加步骤
   * @returns 在任务完成后兑现所属页面的 Promise
   * @since 0.63.0
   */
  run(): Promise<BvPage>;
}

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    type BvFlow = import("./BvFlow").BvFlow;
    type BvFlowCallback = import("./BvFlow").BvFlowCallback;
  }
}

export interface BvFlowHostType extends HostType<BvFlow, ReferenceTypeTrait> {}

export {};
