import type { AvatarName } from "../types/BetterGenshinImpact/GameTask/AutoFight/Model/Avatar";
import type { HostArray, HostDelegate } from "../types/Microsoft/ClearScript/HostType";

interface getAvatarsHostDelegate extends HostDelegate {
  (): HostArray<AvatarName>;
  invoke(): HostArray<AvatarName>;
}

declare global {
  /**
   * 获取当前队伍角色名称列表
   * @since 0.48.0
   */
  const getAvatars: getAvatarsHostDelegate;
}

export {};
