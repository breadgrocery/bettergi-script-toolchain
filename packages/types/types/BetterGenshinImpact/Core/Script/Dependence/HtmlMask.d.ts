import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/IDisposable";
import "../../../../System/Nullable";
import "../../../../System/Text/Json/JsonElement";

/**
 * HTML 遮罩层
 * 提供窗口管理与消息通信
 * @since 0.61.0
 */
declare const htmlMaskBrand: unique symbol;
export interface HtmlMask extends ClrHostValue, System.IDisposableInput {
  readonly [htmlMaskBrand]: true;
  /**
   * 显示 HTML 遮罩窗口
   * url 可为 http(s) 地址，或脚本目录下的相对路径；禁止 file:// 绝对路径
   * @param url 页面 URL 或相对路径
   * @param id 窗口 ID，省略时由宿主生成
   * @returns 窗口 ID
   * @since 0.61.0
   */
  show(url: string): string;
  show(url: string, id: string | null): string;
  /**
   * 关闭指定窗口
   * @param id 窗口 ID
   * @returns 是否关闭成功
   * @since 0.61.0
   */
  close(id: string): boolean;
  /**
   * 关闭本实例打开的全部窗口
   * @returns ClearScript 宿主空结果
   * @since 0.61.0
   */
  closeAll(): VoidResult;
  /**
   * 获取全部窗口 ID
   * @returns 当前打开的窗口 ID 数组
   * @since 0.61.0
   */
  getWindowIds(): HostArray<string>;
  /**
   * 检查窗口是否存在
   * @param id 窗口 ID
   * @returns 是否存在
   * @since 0.61.0
   */
  exists(id: string): boolean;
  /**
   * 设置窗口点击穿透模式
   * @param windowId 窗口 ID
   * @param enabled 是否启用点击穿透；true 为穿透，false 为可交互
   * @returns ClearScript 宿主空结果
   * @since 0.61.0
   */
  setClickThrough(windowId: string, enabled: boolean): VoidResult;
  /**
   * 获取窗口点击穿透状态
   * @param windowId 窗口 ID
   * @returns 是否处于点击穿透；true 为穿透，false 为可交互
   * @since 0.61.0
   */
  getClickThrough(windowId: string): boolean;
  /**
   * 切换窗口点击穿透模式
   * @param windowId 窗口 ID
   * @returns ClearScript 宿主空结果
   * @since 0.61.0
   */
  toggleClickThrough(windowId: string): VoidResult;
  /**
   * 单向推送消息到 HTML
   * @param windowId 目标窗口 ID
   * @param url 消息路径
   * @param jsonData JSON 数据字符串
   * @returns ClearScript 宿主空结果
   * @since 0.61.0
   */
  send(windowId: string, url: string, jsonData: string): VoidResult;
  /**
   * 响应 HTML 页面通过 window.htmlMask.request(...) 发起的请求
   * @param windowId HTML 遮罩窗口 ID
   * @param requestId 从 receive/poll/pollAll 返回消息的 requestId 字段取得，不能由脚本自行生成
   * @param jsonData 响应数据，必须是合法 JSON 字符串
   * @returns ClearScript 宿主空结果
   * @since 0.62.0
   */
  respond(windowId: string, requestId: string, jsonData: string): VoidResult;
  /**
   * 发送请求到 HTML 并等待响应
   * @param windowId 目标窗口 ID
   * @param url 接口路径
   * @param jsonData JSON 数据字符串
   * @param timeoutMs 超时毫秒数，0 表示无限等待
   * @returns 在任务完成后兑现响应 JSON 字符串的 Promise，超时或窗口关闭时可能为 null
   * @since 0.61.0
   */
  request(windowId: string, url: string, jsonData: string): Promise<string>;
  request(
    windowId: string,
    url: string,
    jsonData: string,
    timeoutMs: number | StrongNumeric<Int32Host>
  ): Promise<string>;
  /**
   * 等待接收来自 HTML 的一条消息
   * @param windowId 窗口 ID
   * @param timeoutMs 超时毫秒数，0 表示无限等待
   * @returns 在任务完成后兑现消息 JSON 字符串的 Promise，超时或窗口关闭时可能为 null
   * @since 0.61.0
   */
  receive(windowId: string): Promise<string>;
  receive(windowId: string, timeoutMs: number | StrongNumeric<Int32Host>): Promise<string>;
  /**
   * 非阻塞轮询来自 HTML 的一条消息
   * @param windowId 窗口 ID
   * @returns 消息 JSON 字符串，队列为空时为 null
   * @since 0.61.0
   */
  poll(windowId: string): string;
  /**
   * 批量获取来自 HTML 的全部消息
   * @param windowId 窗口 ID
   * @returns 消息数组的 JSON 字符串
   * @since 0.61.0
   */
  pollAll(windowId: string): string;
  /**
   * 释放资源并关闭本实例打开的窗口
   * @returns ClearScript 宿主空结果
   * @since 0.61.0
   */
  dispose(): VoidResult;
}

/**
 * HTML 遮罩通信消息
 * @since 0.61.0
 */
declare const htmlMask_MessageBrand: unique symbol;
export interface HtmlMask_Message extends ClrHostValue {
  readonly [htmlMask_MessageBrand]: true;
  /**
   * 消息路径
   * @since 0.61.0
   */
  url: string;
  /**
   * 消息数据
   * @since 0.61.0
   */
  data: System.Text.Json.JsonElement | null;
  /**
   * 请求 ID，用于 request/respond 匹配
   * @since 0.61.0
   */
  requestId: string;
}

export interface HtmlMask_MessageHostType extends HostType<
  HtmlMask_Message,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.61.0
   */
  new (): HtmlMask_Message;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.HtmlMask {
    type Message = import("./HtmlMask").HtmlMask_Message;
  }
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type HtmlMask = import("./HtmlMask").HtmlMask;
  }
}

export interface HtmlMaskHostType extends HostType<HtmlMask, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param workDir 脚本工作目录
   * @since 0.61.0
   */
  new (workDir: string): HtmlMask;
  readonly Message: HtmlMask_MessageHostType;
}

export {};
