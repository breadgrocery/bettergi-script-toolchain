import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Threading/CancellationToken";
import "../ISoloTask";
import "./AutoLeyLineOutcropParam";

/**
 * 自动地脉花独立任务
 * @since 0.58.0
 */
declare const autoLeyLineOutcropTaskBrand: unique symbol;
export interface AutoLeyLineOutcropTask
  extends ClrHostValue, BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoLeyLineOutcropTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.58.0
   */
  readonly name: string;
  /**
   * 启动自动地脉花任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.58.0
   */
  start(ct: System.Threading.CancellationToken): Promise<void>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    type AutoLeyLineOutcropTask = import("./AutoLeyLineOutcropTask").AutoLeyLineOutcropTask;
  }
}

export interface AutoLeyLineOutcropTaskHostType extends HostType<
  AutoLeyLineOutcropTask,
  ReferenceTypeTrait
> {
  /**
   * 使用地脉花参数创建任务
   * @param taskParam 自动地脉花参数
   * @param oneDragonMode 是否以一条龙模式运行
   * @since 0.58.0
   */
  new (
    taskParam: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam
  ): AutoLeyLineOutcropTask;
  new (
    taskParam: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam,
    oneDragonMode: boolean
  ): AutoLeyLineOutcropTask;
}

export {};
