import "../../../Fischless/WindowsInput/IKeyboardSimulator";
import "../../../Fischless/WindowsInput/IMouseSimulator";
import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../OpenCvSharp/Rect";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/Collections/Generic/List";
import "../../../System/Threading/CancellationToken";
import "../../GameTask/Model/Area/ImageRegion";
import "../../GameTask/Model/Area/Region";
import "../Recognition/RecognitionObject";
import "./BvFlow";
import "./BvImage";
import "./BvLocator";

/**
 * BgiVision 页面，提供截图、定位与输入能力
 * @since 0.57.0
 */
declare const bvPageBrand: unique symbol;
export interface BvPage extends ClrHostValue {
  readonly [bvPageBrand]: true;
  /**
   * 键盘模拟器
   * @since 0.57.0
   */
  readonly keyboard: Fischless.WindowsInput.IKeyboardSimulator;
  /**
   * 鼠标模拟器
   * @since 0.57.0
   */
  readonly mouse: Fischless.WindowsInput.IMouseSimulator;
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
  /**
   * 创建使用当前超时与重试间隔的链式流程
   * @returns 新的空流程
   * @since 0.63.0
   */
  flow(): BetterGenshinImpact.Core.BgiVision.BvFlow;
  /**
   * 截取当前游戏画面为图像区域
   * @returns 当前游戏画面的图像区域
   * @since 0.57.0
   */
  screenshot(): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
  /**
   * 等待指定毫秒后返回自身
   * @param milliseconds 等待时长（毫秒）
   * @returns 在任务完成后兑现当前页面的 Promise
   * @since 0.57.0
   */
  wait(
    milliseconds: number | StrongNumeric<Int32Host>
  ): Promise<BetterGenshinImpact.Core.BgiVision.BvPage>;
  /**
   * 按 BgiVision 图像定位目标
   * @param image BgiVision 模板图像
   * @returns 对应目标的定位器
   * @since 0.57.0
   */
  locator(
    image: BetterGenshinImpact.Core.BgiVision.BvImage
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 按识别配置定位目标
   * @param ro 识别配置
   * @returns 对应目标的定位器
   * @since 0.57.0
   */
  locator(
    ro: BetterGenshinImpact.Core.Recognition.RecognitionObject
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 按文本定位目标
   * @param text 待匹配文本
   * @param rect 感兴趣区域；省略时搜索整幅画面
   * @returns 对应目标的定位器
   * @since 0.57.0
   */
  locator(text: string): BetterGenshinImpact.Core.BgiVision.BvLocator;
  locator(text: string, rect: OpenCvSharp.Rect): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 按文本创建定位器
   * @param text 待匹配文本；省略时匹配任意 OCR 结果
   * @param rect 感兴趣区域；省略时搜索整幅画面
   * @returns 对应目标的定位器
   * @since 0.57.0
   */
  getByText(): BetterGenshinImpact.Core.BgiVision.BvLocator;
  getByText(text: string): BetterGenshinImpact.Core.BgiVision.BvLocator;
  getByText(text: string, rect: OpenCvSharp.Rect): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 按任一指定文本创建定位器
   * @param texts 字符串集合或 ClearScript JS Array
   * @param rect 感兴趣区域；省略时搜索整幅画面
   * @returns 对应目标的定位器
   * @since 0.63.0
   */
  getByAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  getByAnyText(
    texts: readonly string[] | System.Collections.Generic.IEnumerableInput<string>,
    rect: OpenCvSharp.Rect
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 按图像创建定位器
   * @param image BgiVision 模板图像
   * @returns 对应目标的定位器
   * @since 0.57.0
   */
  getByImage(
    image: BetterGenshinImpact.Core.BgiVision.BvImage
  ): BetterGenshinImpact.Core.BgiVision.BvLocator;
  /**
   * 在指定区域内执行 OCR 并返回识别区域列表
   * @param rect 感兴趣区域；省略时识别整幅画面
   * @returns OCR 识别到的区域列表
   * @since 0.57.0
   */
  ocr(): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  ocr(
    rect: OpenCvSharp.Rect
  ): System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;
  /**
   * 按 1080P 坐标系点击指定坐标
   * @param x 1080P 坐标系下的 X 坐标
   * @param y 1080P 坐标系下的 Y 坐标
   * @returns ClearScript 宿主空结果
   * @since 0.57.0
   */
  click(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.BgiVision {
    type BvPage = import("./BvPage").BvPage;
  }
}

export interface BvPageHostType extends HostType<BvPage, ReferenceTypeTrait> {
  /**
   * 创建 BgiVision 页面
   * @param cancellationToken 取消令牌
   * @since 0.57.0
   */
  new (): BvPage;
  new (cancellationToken: System.Threading.CancellationToken): BvPage;
}

export {};
