import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../OpenCvSharp/Rect";
import "../../../../System/Collections/Generic/IReadOnlyDictionary";
import "../../../../System/Collections/Generic/IReadOnlyList";
import "../../../../System/Collections/Generic/List";
import "../../../Core/Recognition/RecognitionObject";
import "../../Model/Area/Region";

/**
 * 自动战斗识别资源，按截图分辨率缓存队伍、技能与结束提示等区域
 * @since 0.50.0
 */
declare const autoFightAssetsBrand: unique symbol;
export interface AutoFightAssets extends ClrHostValue {
  readonly [autoFightAssetsBrand]: true;
  /**
   * 队伍区域（不含角色编号）
   * @since 0.50.0
   */
  readonly teamRectNoIndex: OpenCvSharp.Rect;
  /**
   * 队伍区域（含角色编号）
   * @since 0.50.0
   */
  readonly teamRect: OpenCvSharp.Rect;
  /**
   * 非联机状态下侧边栏角色头像区域列表
   * @since 0.50.0
   */
  readonly avatarSideIconRectList: System.Collections.Generic.IReadOnlyList<OpenCvSharp.Rect>;
  /**
   * 非联机状态下侧边栏角色编号白色块区域列表
   * @since 0.50.0
   */
  readonly avatarIndexRectList: System.Collections.Generic.IReadOnlyList<OpenCvSharp.Rect>;
  /**
   * 角色头像对应的元素爆发图标区域列表
   * @since 0.50.0
   */
  readonly avatarQRectListMap: System.Collections.Generic.IReadOnlyList<OpenCvSharp.Rect>;
  /**
   * 元素战技图标区域
   * @since 0.50.0
   */
  readonly eRect: OpenCvSharp.Rect;
  /**
   * 元素战技冷却数字区域
   * @since 0.50.0
   */
  readonly eCooldownRect: OpenCvSharp.Rect;
  /**
   * 元素爆发图标区域
   * @since 0.50.0
   */
  readonly qRect: OpenCvSharp.Rect;
  /**
   * 用于角色分类的元素爆发图标区域
   * @since 0.50.0
   */
  readonly qRectForClassify: OpenCvSharp.Rect;
  /**
   * 特殊技能冷却数字区域
   * @since 0.50.0
   */
  readonly zCooldownRect: OpenCvSharp.Rect;
  /**
   * 挑战达成上侧提示区域
   * @since 0.50.0
   */
  readonly endTipsUpperRect: OpenCvSharp.Rect;
  /**
   * 挑战结束提示区域
   * @since 0.50.0
   */
  readonly endTipsRect: OpenCvSharp.Rect;
  /**
   * 角色衣装英文标识到中文名称的映射
   * @since 0.50.0
   */
  readonly avatarCostumeMap: System.Collections.Generic.IReadOnlyDictionary<string, string>;
  /**
   * 联机状态下侧边栏角色头像区域映射，键为联机人数布局标识
   * @since 0.50.0
   */
  readonly avatarSideIconRectListMap: System.Collections.Generic.IReadOnlyDictionary<
    string,
    System.Collections.Generic.List<OpenCvSharp.Rect>
  >;
  /**
   * 联机状态下侧边栏角色编号白色块区域映射，键为联机人数布局标识
   * @since 0.50.0
   */
  readonly avatarIndexRectListMap: System.Collections.Generic.IReadOnlyDictionary<
    string,
    System.Collections.Generic.List<OpenCvSharp.Rect>
  >;
  /**
   * 小道具图标区域
   * @since 0.50.0
   */
  readonly gadgetRect: OpenCvSharp.Rect;
  /**
   * 经验值模板识别对象列表，用于检测怪物死亡时掉落的经验值数字图标
   * @since 0.50.0
   */
  readonly experienceRecognitionObjects: System.Collections.Generic.IReadOnlyList<BetterGenshinImpact.Core.Recognition.RecognitionObject>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Assets {
    type AutoFightAssets = import("./AutoFightAssets").AutoFightAssets;
  }
}

export interface AutoFightAssetsHostType extends HostType<AutoFightAssets, ReferenceTypeTrait> {
  /**
   * 按区域分辨率获取或创建识别资源缓存
   * @param region 用于确定截图尺寸的区域
   * @returns 对应该分辨率的识别资源
   * @since 0.50.0
   */
  get(
    region: BetterGenshinImpact.GameTask.Model.Area.Region
  ): BetterGenshinImpact.GameTask.AutoFight.Assets.AutoFightAssets;
  /**
   * 按截图宽高获取或创建识别资源缓存
   * @param captureWidth 截图宽度
   * @param captureHeight 截图高度
   * @returns 对应该分辨率的识别资源
   * @since 0.50.0
   */
  get(
    captureWidth: number | StrongNumeric<Int32Host>,
    captureHeight: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.AutoFight.Assets.AutoFightAssets;
}

export {};
