import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 战斗策略文件访问
 * 提供脚本访问 User\AutoFight 目录下战斗策略文件的方法
 * @since 0.61.0
 */
declare const strategyFileBrand: unique symbol;
export interface StrategyFile extends ClrHostValue {
  readonly [strategyFileBrand]: true;
  /**
   * 检查 User\AutoFight 目录下路径是否为文件夹
   * @param subPath 相对于 User\AutoFight 的路径
   * @returns 是否为文件夹
   * @since 0.61.0
   */
  isFolder(subPath: string): boolean;
  /**
   * 检查 User\AutoFight 目录下路径是否为文件
   * @param subPath 相对于 User\AutoFight 的路径
   * @returns 是否为文件
   * @since 0.61.0
   */
  isFile(subPath: string): boolean;
  /**
   * 检查 User\AutoFight 目录下路径是否存在
   * @param subPath 相对于 User\AutoFight 的路径
   * @returns 是否存在
   * @since 0.61.0
   */
  isExists(subPath: string): boolean;
  /**
   * 读取 User\AutoFight 目录下指定文件夹的非递归条目列表
   * 目录不存在时返回空数组，不会自动创建目录
   * @param subPath 相对于 User\AutoFight 的子目录路径，默认为根目录
   * @returns 文件夹内文件与子文件夹的相对路径数组，出错时返回空数组
   * @since 0.61.0
   */
  readPathSync(): HostArray<string>;
  readPathSync(subPath: string): HostArray<string>;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type StrategyFile = import("./StrategyFile").StrategyFile;
  }
}

export interface StrategyFileHostType extends HostType<
  StrategyFile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.61.0
   */
  new (): StrategyFile;
}

export {};
