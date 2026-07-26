import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Collections/Generic/List";
import "../../../System/Threading/CancellationToken";
import "../../../System/ValueTuple";
import "../ISoloTask";
import "../Model/Area/ImageRegion";
import "../Model/Area/Region";
import "./AutoDomainParam";

/**
 * 秘境树脂名称
 * @since 0.52.0
 */
export type ResinName =
  | "浓缩树脂"
  | "原粹树脂"
  | "原粹树脂20"
  | "原粹树脂40"
  | "须臾树脂"
  | "脆弱树脂"
  | (string & {});

/**
 * 自动秘境独立任务
 * @since 0.52.0
 */
declare const autoDomainTaskBrand: unique symbol;
export interface AutoDomainTask
  extends
    ClrHostValue,
    BetterGenshinImpact.GameTask.ISoloTaskInput<
      System.Collections.Generic.Dictionary<string, number>
    >,
    BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoDomainTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.52.0
   */
  readonly name: string;
  /**
   * 启动自动秘境任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现奖励名称到数量映射的 Promise
   * @since 0.52.0
   */
  start(
    ct: System.Threading.CancellationToken
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoDomain {
    type AutoDomainTask = import("./AutoDomainTask").AutoDomainTask;
  }
}

export interface AutoDomainTaskHostType extends HostType<AutoDomainTask, ReferenceTypeTrait> {
  /**
   * 使用自动秘境参数创建任务
   * @param taskParam 自动秘境参数
   * @since 0.52.0
   */
  new (taskParam: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam): AutoDomainTask;
  /**
   * 在奖励界面中点击使用指定树脂
   * @param ra 包含树脂选项的图像区域
   * @param resinName 树脂名称
   * @param logPrefix 日志前缀，默认 `自动秘境`
   * @returns 是否使用成功与识别到的剩余数量组成的元组
   * @since 0.52.0
   */
  pressUseResin(
    ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    resinName: ResinName
  ): System.ValueTuple<boolean, number>;
  pressUseResin(
    ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    resinName: ResinName,
    logPrefix: string
  ): System.ValueTuple<boolean, number>;
  /**
   * 在已识别的区域列表中点击使用指定树脂
   * @param regionList 树脂选项区域列表
   * @param resinName 树脂名称
   * @param logPrefix 日志前缀，默认 `自动秘境`
   * @returns 是否使用成功与识别到的剩余数量组成的元组
   * @since 0.52.0
   */
  pressUseResin(
    regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
    resinName: ResinName
  ): System.ValueTuple<boolean, number>;
  pressUseResin(
    regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
    resinName: ResinName,
    logPrefix: string
  ): System.ValueTuple<boolean, number>;
}

export {};
