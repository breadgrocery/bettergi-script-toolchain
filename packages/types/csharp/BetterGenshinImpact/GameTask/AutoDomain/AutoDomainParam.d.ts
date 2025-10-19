import "../../GameTask/Model/BaseTaskParam";
import "./AutoDomainTask";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoDomain {
    class AutoDomainParam extends BetterGenshinImpact.GameTask.Model
      .BaseTaskParam<BetterGenshinImpact.GameTask.AutoDomain.AutoDomainTask> {
      /** 刷副本次数 */
      domainRoundNum: number;

      /** 战斗策略路径 */
      combatStrategyPath: string;

      /** 刷副本使用的队伍名称 */
      partyName: string;

      /** 需要刷取的副本名称 */
      domainName: string;

      /** 需要刷取的副本名称 */
      sundaySelectedValue: string;

      /** 结束后是否自动分解圣遗物 */
      autoArtifactSalvage: boolean;

      /** 分解圣遗物的最大星级（1~4） */
      maxArtifactStar: number;

      /** 指定树脂刷取次数 */
      specifyResinUse: boolean;

      /** 使用树脂优先级 */
      resinPriorityList: string[];

      /** 使用原粹树脂刷取副本次数 */
      originalResinUseCount: number;

      /** 使用浓缩树脂刷取副本次数 */
      condensedResinUseCount: number;

      /** 使用须臾树脂刷取副本次数 */
      transientResinUseCount: number;

      /** 使用脆弱树脂刷取副本次数 */
      fragileResinUseCount: number;

      /** 设置默认值 */
      setDefault(): void;

      /**
       * 设置战斗策略路径
       * @param strategyName 策略名称
       */
      setCombatStrategyPath(strategyName?: string): void;

      /**
       * 设置使用树脂优先级
       * @param priorities 树脂名称列表（越靠前优先级越高）
       */
      setResinPriorityList(priorities: string[]): void;

      constructor();

      constructor(domainRoundNum: number);

      constructor(domainRoundNum: number, path: string);
    }
  }
  export import AutoDomainParam = BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam;
}

export {};
