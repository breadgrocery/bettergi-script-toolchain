import "../../GameTask/Model/BaseTaskParam";
import "./AutoStygianOnslaughtConfig";
import "./AutoStygianOnslaughtTask";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    class AutoStygianOnslaughtParam extends BetterGenshinImpact.GameTask.Model
      .BaseTaskParam<BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtTask> {
      /** 副本Boss数量 */
      bossNum: number;

      /** 结束后是否自动分解圣遗物 */
      autoArtifactSalvage: boolean;

      /** 是否指定树脂的使用次数 */
      specifyResinUse: boolean;

      /** 自定义使用树脂优先级 (默认 ["浓缩树脂","原粹树脂"]) */
      resinPriorityList: string[];

      /** 使用原粹树脂刷取副本次数 */
      originalResinUseCount: number;

      /** 使用浓缩树脂刷取副本次数 */
      condensedResinUseCount: number;

      /** 使用须臾树脂刷取副本次数 */
      transientResinUseCount: number;

      /** 使用脆弱树脂刷取副本次数 */
      fragileResinUseCount: number;

      /** 指定战斗队伍名称 */
      fightTeamName: string;

      /** 战斗脚本包路径 */
      combatScriptBagPath: string;

      /**
       * 使用默认配置初始化参数
       */
      setDefault(): void;

      /**
       * 从配置对象设置自动幽境危战参数
       * @param config 自动幽境危战配置对象
       */
      setAutoStygianOnslaughtConfig(
        config: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtConfig
      ): void;

      /**
       * 设置树脂使用优先级列表
       * @param priorities 树脂类型数组，例如 "浓缩树脂","原粹树脂"
       */
      setResinPriorityList(...priorities: string[]): void;

      /**
       * 设置战斗策略路径
       * @param strategyName 策略名称，若为空则使用自动战斗配置中的策略名
       */
      setCombatStrategyPath(strategyName?: string | null): void;

      constructor();

      constructor(combatScriptBagPath: string);
    }
  }
  export import AutoStygianOnslaughtParam = BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam;
}

export {};
