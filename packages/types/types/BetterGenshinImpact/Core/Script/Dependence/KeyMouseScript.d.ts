import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 键鼠录制回放
 * @since 0.43.1
 */
declare const keyMouseScriptBrand: unique symbol;
export interface KeyMouseScript extends ClrHostValue {
  readonly [keyMouseScriptBrand]: true;
  /**
   * 运行录制 JSON
   * @param json 键鼠录制 JSON 文本
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  run(json: string): Promise<void>;
  /**
   * 运行录制文件
   * @param path 相对脚本工作区的录制文件路径
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  runFile(path: string): Promise<void>;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type KeyMouseScript = import("./KeyMouseScript").KeyMouseScript;
  }
}

export interface KeyMouseScriptHostType extends HostType<KeyMouseScript, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param rootPath 脚本工作区根路径
   * @since 0.43.1
   */
  new (rootPath: string): KeyMouseScript;
}

export {};
