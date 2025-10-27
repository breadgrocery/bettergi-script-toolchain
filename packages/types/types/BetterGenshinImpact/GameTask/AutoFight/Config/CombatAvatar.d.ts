import "../../../../System/Collections/Generic/List";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Config {
    class CombatAvatar {
      /** 唯一标识 */
      id: string;

      /** 角色中文名 */
      name: string;

      /** 角色英文名 */
      nameEn: string;

      /** 武器类型 */
      weapon: string;

      /** 元素战技CD */
      skillCd: number;

      /** 长按元素战技CD */
      skillHoldCd: number;

      /** 元素爆发CD */
      burstCd: number;

      /** 别名 */
      alias: System.Collections.Generic.List<string>;
    }
  }
}

export {};
