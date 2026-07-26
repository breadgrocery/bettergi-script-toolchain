import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/Dictionary";
import "../../../System/Threading/CancellationToken";
import "../ISoloTask";
import "./AutoBossParam";

/**
 * 自动首领讨伐独立任务，按配置前往 Boss、执行战斗策略、领取征讨之花奖励并处理重定位
 * @since 0.62.0
 */
declare const autoBossTaskBrand: unique symbol;
export interface AutoBossTask
  extends
    ClrHostValue,
    BetterGenshinImpact.GameTask.ISoloTaskInput<
      System.Collections.Generic.Dictionary<string, number>
    >,
    BetterGenshinImpact.GameTask.ISoloTaskInput {
  readonly [autoBossTaskBrand]: true;
  /**
   * 独立任务名称
   * @since 0.62.0
   */
  readonly name: string;
  /**
   * 启动自动首领讨伐，包含参数校验、分辨率校验、死亡重试和最终输入状态释放
   * @param ct 取消令牌
   * @returns 在任务完成后兑现奖励名称到数量映射的 Promise
   * @since 0.62.0
   */
  start(
    ct: System.Threading.CancellationToken
  ): Promise<System.Collections.Generic.Dictionary<string, number>>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoBoss {
    type AutoBossTask = import("./AutoBossTask").AutoBossTask;
  }
}

export interface AutoBossTaskHostType extends HostType<AutoBossTask, ReferenceTypeTrait> {
  /**
   * 创建自动首领讨伐任务，并根据任务参数预解析战斗策略
   * @param taskParam 自动首领讨伐参数，包含 Boss、队伍、战斗策略、讨伐次数和补充树脂开关
   * @since 0.62.0
   */
  new (taskParam: BetterGenshinImpact.GameTask.AutoBoss.AutoBossParam): AutoBossTask;
}

export {};
