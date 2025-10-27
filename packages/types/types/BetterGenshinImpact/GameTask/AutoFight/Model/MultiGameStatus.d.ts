declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    class MultiGameStatus {
      /** 是否在联机状态 */
      isInMultiGame: boolean;

      /** 是不是房主 */
      isHost: boolean;

      /** 玩家数量 */
      playerCount: number;

      /** 我能控制的最大角色数量 */
      maxControlAvatarCount: number;
    }
  }
}

export {};
