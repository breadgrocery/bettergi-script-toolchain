import "../../../../SixLabors/ImageSharp/Image";
import "../../../../System/Collections/Generic/List";
import "../../../../System/IDisposable";
import "../../../../System/Threading/CancellationToken";
import "../../../GameTask/Model/Area/ImageRegion";
import "./Avatar";
import "./AvatarActiveCheckContext";
import "./MultiGameStatus";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    class CombatScenes implements System.IDisposable {
      avatarCount: number;

      /** 最近一次识别出的出战角色编号，从1开始，-1表示未识别 */
      lastActiveAvatarIndex: number;

      currentMultiGameStatus: BetterGenshinImpact.GameTask.AutoFight.Model.MultiGameStatus;

      expectedTeamAvatarNumber: number;

      getAvatars(): System.Collections.Generic.List<BetterGenshinImpact.GameTask.AutoFight.Model.Avatar>;

      initializeTeam(
        imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
      ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;

      refreshTeamAvatarIndexRectList(
        imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
      ): boolean;

      classifyAvatarCnName(img: SixLabors.ImageSharp.Image, index: number): object;

      classifyAvatarName(img: SixLabors.ImageSharp.Image, index: number): string;

      checkTeamInitialized(): boolean;

      updateActionSchedulerByCd(cdConfig: string): System.Collections.Generic.List<string>;

      beforeTask(ct: System.Threading.CancellationToken): void;

      afterTask(): void;

      selectAvatar(name: string): BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;

      selectAvatar(avatarIndex: number): BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;

      currentAvatar(): string | null;
      // overload
      currentAvatar(force: boolean | null): string | null;
      currentAvatar(
        force: boolean | null,
        region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null
      ): string | null;
      currentAvatar(
        force: boolean | null,
        region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null,
        ct: System.Threading.CancellationToken | null
      ): string | null;

      getActiveAvatarIndex(
        imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
        context: BetterGenshinImpact.GameTask.AutoFight.Model.AvatarActiveCheckContext
      ): number;

      dispose(): void;
    }
  }
  export import CombatScenes = BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
}

export {};
