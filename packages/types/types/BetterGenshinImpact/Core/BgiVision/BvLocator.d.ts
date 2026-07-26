import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../OpenCvSharp/Rect";
import "../../../System/Action";
import "../../../System/Collections/Generic/List";
import "../../../System/Func";
import "../../../System/Nullable";
import "../../../System/Threading/CancellationToken";
import "../../GameTask/Model/Area/Region";
import "../Recognition/RecognitionObject";

/**
 * BgiVision 定位器，按识别配置查找并操作匹配区域
 * @since 0.57.0
 */
declare const bvLocatorBrand: unique symbol;
export interface BvLocator extends ClrHostValue {
  readonly [bvLocatorBrand]: true;
  /**
   * 识别配置
   * @since 0.57.0
   */
  readonly recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject;
  /**
   * 每次重试前执行的回调
   * @since 0.57.0
   */
  retryAction: System.Func<
    System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
    Promise<void>
  >;
  /**
   * 按当前识别配置查找全部匹配区域；不建议脚本直接调用
   * @returns 匹配到的区域列表
   * @since 0.57.0
   */
  findAll(): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 检查目标是否存在
   * @returns 目标是否存在
   * @since 0.57.0
   */
  isExist(): boolean;
  /**
   * 等待目标出现并单击
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现被点击区域的 Promise；超时则拒绝
   * @since 0.57.0
   */
  click(): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  click(
    timeout: number | StrongNumeric<Int32Host> | null | null
  ): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 单击目标并等待其消失
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现被点击区域的 Promise；超时则拒绝
   * @since 0.57.0
   */
  clickUntilDisappears(): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  clickUntilDisappears(
    timeout: number | StrongNumeric<Int32Host> | null | null
  ): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 等待目标出现并双击
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现被双击区域的 Promise；超时则拒绝
   * @since 0.57.0
   */
  doubleClick(): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  doubleClick(
    timeout: number | StrongNumeric<Int32Host> | null | null
  ): Promise<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 等待目标出现并返回匹配区域列表
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现匹配区域列表的 Promise；超时则拒绝
   * @since 0.57.0
   */
  waitFor(): Promise<
    System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
  >;
  waitFor(
    timeout: number | StrongNumeric<Int32Host> | null | null
  ): Promise<System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>>;
  /**
   * 尝试等待目标出现；超时返回空列表而不拒绝
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现匹配区域列表的 Promise；超时兑现空列表
   * @since 0.57.0
   */
  tryWaitFor(): Promise<
    System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
  >;
  tryWaitFor(
    timeout: number | StrongNumeric<Int32Host> | null | null
  ): Promise<System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>>;
  /**
   * 等待目标消失
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现的 Promise；超时则拒绝
   * @since 0.57.0
   */
  waitForDisappear(): Promise<void>;
  waitForDisappear(timeout: number | StrongNumeric<Int32Host> | null | null): Promise<void>;
  /**
   * 尝试等待目标消失；超时不拒绝
   * @param timeout 超时时间（毫秒）
   * @returns 在任务完成后兑现的 Promise
   * @since 0.57.0
   */
  tryWaitForDisappear(): Promise<void>;
  tryWaitForDisappear(timeout: number | StrongNumeric<Int32Host> | null | null): Promise<void>;
  /**
   * 设置感兴趣区域（ROI），覆盖识别配置中的 RegionOfInterest
   * @param deltaFunc 由当前最大 1080P 捕获矩形计算 ROI 的回调
   * @returns 当前定位器，便于链式调用
   * @since 0.57.0
   */
  withRoi(
    deltaFunc: System.Func<OpenCvSharp.Rect, OpenCvSharp.Rect>
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 设置感兴趣区域（ROI），覆盖识别配置中的 RegionOfInterest
   * @param rect 感兴趣区域矩形
   * @returns 当前定位器，便于链式调用
   * @since 0.57.0
   */
  withRoi(rect: OpenCvSharp.Rect): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 设置超时时间（毫秒）
   * @param timeout 超时时间（毫秒）
   * @returns 当前定位器，便于链式调用
   * @since 0.61.0
   */
  withTimeout(
    timeout: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 设置重试间隔（毫秒）
   * @param retryInterval 重试间隔（毫秒）
   * @returns 当前定位器，便于链式调用
   * @since 0.61.0
   */
  withRetryInterval(
    retryInterval: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 设置每次重试前执行的回调；支持同步与异步脚本函数
   * @param action 收到当前匹配区域列表时调用的回调；传入 null 清除回调
   * @returns 当前定位器，便于链式调用
   * @since 0.61.0
   */
  withRetryAction(
    action: System.Action<
      System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
    > | null
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 设置每次重试前执行的回调；供脚本传入无法隐式转为 Action 的函数
   * @param action 脚本回调；可为同步函数或返回 Promise 的异步函数
   * @returns 当前定位器，便于链式调用
   * @since 0.61.0
   */
  withRetryAction(action: unknown): BetterGenshinImpact.Core.BgiVision.BvLocator;
}

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    type BvLocator = import("./BvLocator").BvLocator;
  }
}

export interface BvLocatorHostType extends HostType<BvLocator, ReferenceTypeTrait> {
  /**
   * 由识别配置与取消令牌创建定位器
   * @param recognitionObject 识别配置
   * @param cancellationToken 取消令牌
   * @since 0.57.0
   */
  new (
    recognitionObject: BetterGenshinImpact.Core.Recognition.RecognitionObject,
    cancellationToken: System.Threading.CancellationToken
  ): BvLocator;
  /**
   * 默认超时时间（毫秒）
   * @since 0.57.0
   */
  defaultTimeout: number;
  /**
   * 默认重试间隔（毫秒）
   * @since 0.57.0
   */
  defaultRetryInterval: number;
}

export {};
