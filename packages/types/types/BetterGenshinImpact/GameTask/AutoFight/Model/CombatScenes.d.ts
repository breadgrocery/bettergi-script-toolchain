import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../Microsoft/Extensions/Logging/ILogger";
import "../../../../SixLabors/ImageSharp/Image";
import "../../../../SixLabors/ImageSharp/PixelFormats/Rgb24";
import "../../../../System/Collections/Generic/List";
import "../../../../System/Collections/ObjectModel/ReadOnlyCollection";
import "../../../../System/IDisposable";
import "../../../../System/Threading/CancellationToken";
import "../../../../System/ValueTuple";
import "../../../Core/Recognition/ONNX/BgiYoloPredictor";
import "../../CaptureContent";
import "../../Model/Area/ImageRegion";
import "../../Model/ISystemInfo";
import "../Assets/AutoFightAssets";
import "../AutoFightConfig";
import "./Avatar";
import "./AvatarActiveCheckContext";
import "./MultiGameStatus";

/**
 * 战斗场景，持有当前队伍角色识别结果与出战状态
 * @since 0.48.0
 */
declare const combatScenesBrand: unique symbol;
export interface CombatScenes extends ClrHostValue, System.IDisposableInput {
  readonly [combatScenesBrand]: true;
  /**
   * 当前识别到的队伍角色数量
   * @since 0.48.0
   */
  readonly avatarCount: number;
  /**
   * 最近一次识别出的出战角色编号，从 1 开始，-1 表示未识别
   * @since 0.52.0
   */
  lastActiveAvatarIndex: number;
  /**
   * 当前联机状态
   * @since 0.52.0
   */
  currentMultiGameStatus: BetterGenshinImpact.GameTask.AutoFight.Model.MultiGameStatus;
  /**
   * 预期队伍角色数量，默认 4，联机时可能更少
   * @since 0.48.0
   */
  readonly expectedTeamAvatarNum: number;
  /**
   * 获取当前队伍角色的只读集合
   * @returns 角色只读集合
   * @since 0.48.0
   */
  getAvatars(): System.Collections.ObjectModel.ReadOnlyCollection<BetterGenshinImpact.GameTask.AutoFight.Model.Avatar>;
  /**
   * 通过 YOLO 分类器识别队伍内角色并初始化战斗场景
   * @param imageRegion 完整游戏画面的图像区域
   * @param autoFightConfig 可选的自动战斗配置，用于强制指定队伍角色
   * @returns 已初始化的当前实例
   * @since 0.53.0
   */
  initializeTeam(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
  ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  initializeTeam(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    autoFightConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig | null
  ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  /**
   * 以静默模式识别队伍（用于后台挂件，减少日志输出）
   * @param imageRegion 完整游戏画面的图像区域
   * @param autoFightConfig 可选的自动战斗配置
   * @returns 已初始化的当前实例
   * @since 0.57.0
   */
  initializeTeamSilent(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
  ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  initializeTeamSilent(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    autoFightConfig: BetterGenshinImpact.GameTask.AutoFight.AutoFightConfig | null
  ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  /**
   * 在切人判断有误且能找到预期数量角色编号框时刷新编号框位置；必须已确认存在 `expectedTeamAvatarNum` 数量的编号框
   * @param imageRegion 完整游戏画面的图像区域
   * @returns 是否刷新成功；在已有编号框的前提下返回 false 时可能处于地图边缘环境
   * @since 0.52.0
   */
  refreshTeamAvatarIndexRectList(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion
  ): boolean;
  /**
   * 对角色头像图像进行中文名分类
   * @param img 角色头像图像
   * @param index 队伍内序号，从 1 开始
   * @returns 角色中文名与衣装英文标识组成的元组，无衣装时第二项为空字符串
   * @since 0.48.0
   */
  classifyAvatarCnName(
    img: SixLabors.ImageSharp.Image<SixLabors.ImageSharp.PixelFormats.Rgb24>,
    index: number | StrongNumeric<Int32Host>
  ): System.ValueTuple<string, string>;
  /**
   * 对角色头像图像进行名称分类
   * @param img 角色头像图像
   * @param index 队伍内序号，从 1 开始
   * @returns 角色名称
   * @since 0.48.0
   */
  classifyAvatarName(
    img: SixLabors.ImageSharp.Image<SixLabors.ImageSharp.PixelFormats.Rgb24>,
    index: number | StrongNumeric<Int32Host>
  ): string;
  /**
   * 检查队伍是否已成功初始化
   * @returns 是否已初始化
   * @since 0.48.0
   */
  checkTeamInitialized(): boolean;
  /**
   * 更新角色手动设置的技能冷却
   * @param cdConfig 冷却配置字符串
   * @returns 配置中有效的角色名列表
   * @since 0.48.0
   */
  updateActionSchedulerByCd(cdConfig: string): System.Collections.Generic.List<string>;
  /**
   * 在战斗任务开始前绑定取消令牌等运行时上下文
   * @param ct 取消令牌
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  beforeTask(ct: System.Threading.CancellationToken): VoidResult;
  /**
   * 在战斗任务结束后清理运行时上下文
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  afterTask(): VoidResult;
  /**
   * 按队伍序号选择角色
   * @param avatarIndex 队伍内序号，从 1 开始
   * @returns 对应角色，未找到时为 null 或未定义行为取决于上游实现
   * @since 0.48.0
   */
  selectAvatar(
    avatarIndex: number | StrongNumeric<Int32Host>
  ): BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;
  /**
   * 按角色名称选择角色
   * @param name 角色名称（中文）
   * @returns 对应角色
   * @since 0.48.0
   */
  selectAvatar(name: string): BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;
  /**
   * 获取当前出战角色名，不刷新编号框位置，不推荐使用
   * @param force 是否强制重新识别
   * @param region 可选的图像区域
   * @param ct 取消令牌
   * @returns 出战角色名称
   * @since 0.48.0
   */
  currentAvatar(): string;
  currentAvatar(force: boolean): string;
  currentAvatar(
    force: boolean,
    region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null
  ): string;
  currentAvatar(
    force: boolean,
    region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null,
    ct: System.Threading.CancellationToken
  ): string;
  /**
   * 获取当前出战角色编号，失败后自动刷新编号框位置，推荐使用
   * @param imageRegion 完整游戏画面的图像区域
   * @param context 多次识别结果上下文
   * @returns 出战角色编号，从 1 开始
   * @since 0.52.0
   */
  getActiveAvatarIndex(
    imageRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    context: BetterGenshinImpact.GameTask.AutoFight.Model.AvatarActiveCheckContext
  ): number;
  /**
   * 通过 OCR 识别队伍内角色
   * @param content 完整游戏画面的捕获内容
   * @returns 已初始化的当前实例
   * @deprecated 已过时
   * @since 0.48.0
   */
  initializeTeamOldOcr(
    content: BetterGenshinImpact.GameTask.CaptureContent
  ): BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  /**
   * 对 OCR 识别结果进行纠错；单字名称（如魈、琴）仍可能无法识别
   * @param name OCR 原始名称
   * @returns 纠错后的角色名称
   * @deprecated 已过时
   * @since 0.48.0
   */
  errorOcrCorrection(name: string): string;
  /**
   * 释放资源
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  dispose(): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    type CombatScenes = import("./CombatScenes").CombatScenes;
  }
}

export interface CombatScenesHostType extends HostType<CombatScenes, ReferenceTypeTrait> {
  /**
   * 创建战斗场景
   * @param predictor 可选的 YOLO 预测器，省略时由宿主创建
   * @param autoFightAssets 可选的自动战斗识别资源
   * @param logger 可选的日志记录器
   * @param systemInfo 可选的系统信息
   * @since 0.53.0
   */
  new (): CombatScenes;
  new (predictor: BetterGenshinImpact.Core.Recognition.ONNX.BgiYoloPredictor | null): CombatScenes;
  new (
    predictor: BetterGenshinImpact.Core.Recognition.ONNX.BgiYoloPredictor | null,
    autoFightAssets: BetterGenshinImpact.GameTask.AutoFight.Assets.AutoFightAssets | null
  ): CombatScenes;
  new (
    predictor: BetterGenshinImpact.Core.Recognition.ONNX.BgiYoloPredictor | null,
    autoFightAssets: BetterGenshinImpact.GameTask.AutoFight.Assets.AutoFightAssets | null,
    logger: Microsoft.Extensions.Logging.ILogger | null
  ): CombatScenes;
  new (
    predictor: BetterGenshinImpact.Core.Recognition.ONNX.BgiYoloPredictor | null,
    autoFightAssets: BetterGenshinImpact.GameTask.AutoFight.Assets.AutoFightAssets | null,
    logger: Microsoft.Extensions.Logging.ILogger | null,
    systemInfo: BetterGenshinImpact.GameTask.Model.ISystemInfo | null
  ): CombatScenes;
}

export {};
