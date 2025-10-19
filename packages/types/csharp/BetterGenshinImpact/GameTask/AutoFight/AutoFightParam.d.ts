import "../../GameTask/Model/BaseTaskParam";
import "./AutoFightTask";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight {
    class AutoFightParam extends BetterGenshinImpact.GameTask.Model
      .BaseTaskParam<BetterGenshinImpact.GameTask.AutoFight.AutoFightTask> {
      /** 快速检查战斗结束配置 */
      finishDetectConfig: BetterGenshinImpact.GameTask.AutoFight.FightFinishDetectConfig;

      combatStrategyPath: string;

      /** 检测到战斗已经结束的情况下，停止自动战斗功能 */
      fightFinishDetectEnabled: boolean;

      /** 战斗结束后尽可能拾取周围掉落物 */
      pickDropsAfterFightEnabled: boolean;

      /** 战斗结束后拾取周围掉落物延迟（单位为秒，0表示不自动拾取掉落物） */
      pickDropsAfterFightSeconds: number;

      battleThresholdForLoot: number;

      /** 到达指定时间后，自动停止战斗 */
      timeout: number;

      /** 战斗结束后，如存在(万叶/琴)，则执行长E聚集材料动作 */
      kazuhaPickupEnabled: boolean;

      /**
       * 根据填入人或人和cd，来决定当此人元素战技cd未结束时，跳过此人出招，来优化战斗流程。
       * 可填入人名或人名数字（用逗号分隔），多种用分号分隔。
       * 例如:白术;钟离,12;，
       * 如果是人名，则用内置cd检查（或填入数字也小于0）；
       * 如果是人名和数字，则把数字当做出招cd(秒)。
       */
      actionSchedulerByCd: string;

      /** 万叶队伍名称 */
      kazuhaPartyName: string;

      /** 只拾取精英掉落模式 */
      onlyPickEliteDropsMode: string;

      /** 盾奶位 */
      guardianAvatar: string;

      /** 盾奶位E战技 */
      guardianCombatSkip: boolean;

      /** 检测盾奶位战技短按或长按（禁用:短按 / 启用:长按） */
      guardianAvatarHold: boolean;

      /** 释放Q前检测 */
      checkBeforeBurst: boolean;

      isFirstCheck: boolean;

      /** 旋转速度(建议单次360°左右) */
      rotaryFactor: number;

      /** 释放Q爆发 */
      burstEnabled: boolean;

      /** 琴二次拾取 */
      qinDoublePickUp: boolean;

      /** 游泳检测（先回战斗节点，失败则去七天神像） */
      swimmingEnabled: boolean;

      /**
       * 设置战斗策略路径
       * @param strategyName 战斗策略名称
       */
      setCombatStrategyPath(strategyName?: string): void;

      /** 设置默认值 */
      setDefault(): void;

      constructor(
        path: string,
        autoFightConfig: BetterGenshinImpact.GameTask.AutoFight.FightFinishDetectConfig
      );
    }

    /** 快速检查战斗结束配置 */
    class FightFinishDetectConfig {
      /** 判断战斗结束读条颜色 */
      battleEndProgressBarColor: string;

      /** 对于战斗结束基准色的偏差值 */
      battleEndProgressBarColorTolerance: string;

      /** 是否启用快速检查战斗结束 */
      fastCheckEnabled: boolean;

      /** 快速检查战斗结束的参数 */
      fastCheckParams: string;

      /** 检查战斗结束的延时 */
      checkEndDelay: string;

      /** 按下切换队伍后去检查屏幕色块的延时 */
      beforeDetectDelay: string;

      /** 打开队伍界面检测战斗结束前，先检测敌人，判断是否需靠近敌或旋转寻找敌人 */
      rotateFindEnemyEnabled: boolean;
    }
  }
  export import AutoFightParam = BetterGenshinImpact.GameTask.AutoFight.AutoFightParam;
}

export {};
