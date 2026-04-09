declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    class AutoStygianOnslaughtConfig {
      /** 战斗策略名称 */
      strategyName: string;

      /** 副本Boss数量 (1~3) */
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

      constructor();
    }
  }
}

export {};
