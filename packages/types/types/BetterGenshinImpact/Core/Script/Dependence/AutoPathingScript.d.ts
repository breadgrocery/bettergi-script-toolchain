import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 地图追踪路径脚本
 * @since 0.43.1
 */
declare const autoPathingScriptBrand: unique symbol;
export interface AutoPathingScript extends ClrHostValue {
  readonly [autoPathingScriptBrand]: true;
  /**
   * 运行路径 JSON
   * @param json 路径任务 JSON 文本
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  run(json: string): Promise<void>;
  /**
   * 运行路径文件
   * @param path 相对脚本工作区的路径文件路径
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  runFile(path: string): Promise<void>;
  /**
   * 运行已订阅路径文件
   * @param path 相对于 User\AutoPathing 的文件路径
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  runFileFromUser(path: string): Promise<void>;
  /**
   * 检查 AutoPathing 目录下路径是否存在
   * @param subPath 相对于 User\AutoPathing 的路径
   * @returns 是否存在
   * @since 0.58.0
   */
  isExists(subPath: string): boolean;
  /**
   * 检查 AutoPathing 目录下路径是否为文件
   * @param subPath 相对于 User\AutoPathing 的路径
   * @returns 是否为文件
   * @since 0.58.0
   */
  isFile(subPath: string): boolean;
  /**
   * 检查 AutoPathing 目录下路径是否为文件夹
   * @param subPath 相对于 User\AutoPathing 的路径
   * @returns 是否为文件夹
   * @since 0.58.0
   */
  isFolder(subPath: string): boolean;
  /**
   * 读取 AutoPathing 目录下指定文件夹的非递归条目列表
   * 目录不存在时返回空数组，不会自动创建目录
   * @param subPath 相对于 User\AutoPathing 的子目录路径，默认为相对根目录
   * @returns 文件夹内文件与子文件夹的相对路径数组，出错时返回空数组
   * @since 0.58.0
   */
  readPathSync(): HostArray<string>;
  readPathSync(subPath: string): HostArray<string>;
  /**
   * 读取 AutoPathing 目录下指定文件的文本内容
   * @param subPath 相对于 User\AutoPathing 的文件路径
   * @returns 文件文本内容，读取失败时返回空字符串
   * @since 0.63.0
   */
  readTextSync(subPath: string): string;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type AutoPathingScript = import("./AutoPathingScript").AutoPathingScript;
  }
}

export interface AutoPathingScriptHostType extends HostType<AutoPathingScript, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param rootPath 脚本工作区根路径
   * @param config 路径任务配置，可为 null
   * @since 0.43.1
   */
  new (rootPath: string, config: unknown | null): AutoPathingScript;
}

export {};
