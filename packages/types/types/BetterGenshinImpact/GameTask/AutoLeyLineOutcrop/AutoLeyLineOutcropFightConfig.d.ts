import "./FightFinishDetectConfig";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    class AutoLeyLineOutcropFightConfig {
      /** 策略名称 */
      strategyName: string;

      /** 英文逗号分割，强制指定队伍角色 */
      teamNames: string;

      /** 检测战斗结束 */
      fightFinishDetectEnabled: boolean;

      /** 根据技能CD优化出招人员 */
      actionSchedulerByCd: string;

      /** 战斗结束检测配置 */
      finishDetectConfig: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.FightFinishDetectConfig;

      /** 护盾角色名称 */
      guardianAvatar: string;

      /** 护盾角色战斗跳过 */
      guardianCombatSkip: boolean;

      /** 护盾角色持续时间 */
      guardianAvatarHold: boolean;

      /** 元素爆发启用状态 */
      burstEnabled: boolean;

      /** 游泳功能启用状态 */
      swimmingEnabled: boolean;

      /** 万叶拾取启用状态 */
      kazuhaPickupEnabled: boolean;

      /** 琴双拾取启用状态 */
      qinDoublePickUp: boolean;

      /** 任务超时时间 (秒，默认 120) */
      timeout: number;

      constructor();
    }
  }
}

export {};
