declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    class AvatarActiveCheckContext {
      activeIndexByArrowCount: number[];

      totalCheckFailedCount: number;
    }
  }
}

export {};
