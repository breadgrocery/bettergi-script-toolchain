import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";

/**
 * 脚本日志输出
 * @since 0.43.1
 */
declare const logBrand: unique symbol;
export interface Log extends ClrHostValue {
  readonly [logBrand]: true;
  /**
   * 写入调试日志
   * @param message 日志正文，支持格式化占位
   * @param args 格式化参数
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  debug(message: string | null, args: HostArray<unknown>): VoidResult;
  debug(message: string | null, ...args: unknown[]): VoidResult;
  /**
   * 写入信息日志
   * @param message 日志正文，支持格式化占位
   * @param args 格式化参数
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  info(message: string | null, args: HostArray<unknown>): VoidResult;
  info(message: string | null, ...args: unknown[]): VoidResult;
  /**
   * 写入警告日志
   * @param message 日志正文，支持格式化占位
   * @param args 格式化参数
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  warn(message: string | null, args: HostArray<unknown>): VoidResult;
  warn(message: string | null, ...args: unknown[]): VoidResult;
  /**
   * 写入错误日志
   * @param message 日志正文，支持格式化占位
   * @param args 格式化参数
   * @returns ClearScript 宿主空结果
   * @since 0.43.1
   */
  error(message: string | null, args: HostArray<unknown>): VoidResult;
  error(message: string | null, ...args: unknown[]): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type Log = import("./Log").Log;
  }
}

export interface LogHostType extends HostType<
  Log,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.43.1
   */
  new (): Log;
}

export {};
