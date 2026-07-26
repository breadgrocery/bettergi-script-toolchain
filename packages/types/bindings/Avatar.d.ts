import type { AvatarHostType } from "../types/BetterGenshinImpact/GameTask/AutoFight/Model/Avatar";

declare global {
  /**
   * 角色 HostType
   * @since 0.50.0
   */
  const Avatar: AvatarHostType;
  type Avatar = BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;
}

export {};
