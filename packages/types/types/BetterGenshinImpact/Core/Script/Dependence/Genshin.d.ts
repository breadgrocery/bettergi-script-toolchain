import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Point2f";
import "../../../../System/Lazy";
import "../../../../System/Nullable";
import type { AvatarName } from "../../../GameTask/AutoFight/Model/Avatar";
import "../../../GameTask/AutoPathing/NavigationInstance";
import "../../../GameTask/Common/Job/CraftMaterialTask";
import type { CraftMaterialType } from "../../../GameTask/Common/Job/CraftMaterialTask";
import type {
  Area,
  CountryName,
  MapMatchMethod,
  MapName
} from "../../../GameTask/Common/Map/MapScriptNames";

/**
 * 原神游戏状态与地图操作
 * @since 0.43.1
 */
declare const genshinBrand: unique symbol;
export interface Genshin extends ClrHostValue {
  readonly [genshinBrand]: true;
  /**
   * 游戏捕获区域宽度
   * @since 0.43.1
   */
  readonly width: number;
  /**
   * 游戏捕获区域高度
   * @since 0.43.1
   */
  readonly height: number;
  /**
   * 游戏窗口相对 1080P 的缩放比例
   * @since 0.43.1
   */
  readonly scaleTo1080PRatio: number;
  /**
   * 系统屏幕 DPI 缩放比例
   * @since 0.43.1
   */
  readonly screenDpiScale: number;
  /**
   * 通过 OCR 识别当前角色的 UID
   * @returns 在任务完成后兑现 UID 数字的 Promise，识别失败时为 0
   * @since 0.61.0
   */
  uid(): Promise<number>;
  /**
   * 惰性导航实例
   * 首次访问时按当前地图匹配方法预热并创建
   * @since 0.48.0
   */
  readonly lazyNavigationInstance: System.Lazy<BetterGenshinImpact.GameTask.AutoPathing.NavigationInstance>;
  /**
   * 传送到指定位置
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @param force 是否强制传送
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  tp(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    force: boolean
  ): Promise<void>;
  /**
   * 传送到指定位置
   * @param x 目标 X 坐标字符串
   * @param y 目标 Y 坐标字符串
   * @param force 是否强制传送
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  tp(x: string, y: string, force: boolean): Promise<void>;
  /**
   * 传送到指定地图上的位置
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @param mapName 地图名称
   * @param force 是否强制传送
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  tp(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    mapName: MapName,
    force: boolean
  ): Promise<void>;
  /**
   * 传送到指定位置
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  tp(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): Promise<void>;
  /**
   * 传送到指定位置
   * @param x 目标 X 坐标字符串
   * @param y 目标 Y 坐标字符串
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  tp(x: string, y: string): Promise<void>;
  /**
   * 移动大地图到指定坐标
   * 与内置传送不同，此方法不会多次重试；建议先用 setBigMapZoomLevel 设置合适的缩放等级
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @param forceCountry 强制先切换的大地图区域（`SwitchArea` OCR 文案），默认为 null
   * @returns 在任务完成后兑现的 Promise
   * @since 0.49.0
   */
  moveMapTo(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): Promise<void>;
  moveMapTo(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    forceCountry: Area | null
  ): Promise<void>;
  /**
   * 点击大地图上的指定坐标
   * 会先将目标移动到大地图可点击安全区域，再执行一次点击
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @param forceCountry 强制先切换的大地图区域（`SwitchArea` OCR 文案），默认为 null
   * @returns 在任务完成后兑现的 Promise
   * @since unreleased
   */
  clickMapPoint(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>
  ): Promise<void>;
  clickMapPoint(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    forceCountry: Area | null
  ): Promise<void>;
  /**
   * 移动指定大地图到目标坐标
   * 与内置传送不同，此方法不会多次重试；建议先用 setBigMapZoomLevel 设置合适的缩放等级
   * @param x 目标 X 坐标
   * @param y 目标 Y 坐标
   * @param mapName 要移动的大地图名称
   * @param forceCountry 强制先切换的大地图区域；仅 `mapName` 为提瓦特时生效，默认为 null
   * @returns 在任务完成后兑现的 Promise
   * @since 0.45.1
   */
  moveIndependentMapTo(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    mapName: MapName
  ): Promise<void>;
  moveIndependentMapTo(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    mapName: MapName,
    forceCountry: Area | null
  ): Promise<void>;
  /**
   * 获取当前大地图缩放等级
   * @returns 当前大地图缩放等级，范围 1.0-6.0
   * @since 0.44.3
   */
  getBigMapZoomLevel(): number;
  /**
   * 设置大地图缩放等级
   * 范围 1.0（最大地图）到 6.0（最小地图）；数值越大显示范围越广、细节越少；推荐 2.0-5.0
   * @param zoomLevel 目标缩放等级，范围 1.0-6.0
   * @returns 在任务完成后兑现的 Promise
   * @since 0.44.3
   */
  setBigMapZoomLevel(zoomLevel: number | StrongNumeric<DoubleHost>): Promise<void>;
  /**
   * 传送到用户指定的七天神像
   * @returns 在任务完成后兑现的 Promise
   * @since 0.44.3
   */
  tpToStatueOfTheSeven(): Promise<void>;
  /**
   * 获取当前在大地图上的位置坐标
   * @param mapName 大地图名称
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.45.1
   */
  getPositionFromBigMap(mapName: MapName): OpenCvSharp.Point2f | null;
  /**
   * 获取当前在大地图上的位置坐标
   * 默认使用提瓦特地图
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.45.1
   */
  getPositionFromBigMap(): OpenCvSharp.Point2f | null;
  /**
   * 获取当前镜头朝向
   * @returns 镜头朝向角度
   * @since 0.48.0
   */
  getCameraOrientation(): number;
  /**
   * 使用指定匹配方法获取小地图位置坐标
   * 缓存时间内有匹配成功的坐标时优先返回缓存；不在主界面时抛出异常
   * @param mapName 大地图名称
   * @param matchingMethod 地图匹配方法
   * @param cacheTimeMs 缓存时间，单位毫秒，默认 900
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.61.0
   */
  getPositionFromMapWithMatchingMethod(
    mapName: MapName,
    matchingMethod: MapMatchMethod
  ): OpenCvSharp.Point2f | null;
  /**
   * 使用指定匹配方法获取小地图位置坐标
   * 默认使用提瓦特地图；不在主界面时抛出异常
   * @param matchingMethod 地图匹配方法
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.61.0
   */
  getPositionFromMapWithMatchingMethod(matchingMethod: MapMatchMethod): OpenCvSharp.Point2f | null;
  getPositionFromMapWithMatchingMethod(
    mapName: MapName,
    matchingMethod: MapMatchMethod,
    cacheTimeMs: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Point2f | null;
  /**
   * 获取当前在小地图上的位置坐标
   * 缓存时间内有匹配成功的坐标时优先返回缓存；不在主界面时抛出异常
   * @param mapName 大地图名称
   * @param cacheTimeMs 缓存时间，单位毫秒，默认 900
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.48.0
   */
  getPositionFromMap(mapName: MapName): OpenCvSharp.Point2f | null;
  /**
   * 获取当前在小地图上的位置坐标
   * 局部匹配，需要世界坐标，在坐标附近匹配，失败不进行全局匹配；不在主界面时抛出异常
   * @param mapName 大地图名称
   * @param x 世界坐标 X
   * @param y 世界坐标 Y
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.48.0
   */
  getPositionFromMap(
    mapName: MapName,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Point2f | null;
  /**
   * 获取当前在小地图上的位置坐标
   * 默认使用提瓦特地图；不在主界面时抛出异常
   * @returns 包含 X、Y 坐标的 Point2f，失败时为 null
   * @since 0.48.0
   */
  getPositionFromMap(): OpenCvSharp.Point2f | null;
  getPositionFromMap(
    mapName: MapName,
    cacheTimeMs: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Point2f | null;
  /**
   * 切换队伍
   * @param partyName 队伍界面自定义的队伍名称
   * @returns 在任务完成后兑现是否切换成功的 Promise
   * @since 0.43.1
   */
  switchParty(partyName: string): Promise<boolean>;
  /**
   * 按槽位重组当前队伍角色
   * 未传入或空字符串的槽位跳过；重组队伍槽位角色，不是按数字键切换当前出战角色
   * 示例：`await genshin.switchCharacter("胡桃", "夜兰", "", "钟离")`
   * @param slot1 1 号位角色名，空字符串表示跳过
   * @param slot2 2 号位角色名，空字符串表示跳过
   * @param slot3 3 号位角色名，空字符串表示跳过
   * @param slot4 4 号位角色名，空字符串表示跳过
   * @returns 在任务完成后兑现是否成功的 Promise；完成保存并返回主界面为 true，参数无效、目标角色未找到或流程失败为 false
   * @since unreleased
   */
  switchCharacter(): Promise<boolean>;
  switchCharacter(slot1: "" | AvatarName): Promise<boolean>;
  switchCharacter(slot1: "" | AvatarName, slot2: "" | AvatarName): Promise<boolean>;
  switchCharacter(
    slot1: "" | AvatarName,
    slot2: "" | AvatarName,
    slot3: "" | AvatarName
  ): Promise<boolean>;
  switchCharacter(
    slot1: "" | AvatarName,
    slot2: "" | AvatarName,
    slot3: "" | AvatarName,
    slot4: "" | AvatarName
  ): Promise<boolean>;
  /**
   * 清除当前调度器的队伍缓存
   * @returns ClearScript 宿主空结果
   * @since 0.48.0
   */
  clearPartyCache(): VoidResult;
  /**
   * 自动点击空月祝福
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  blessingOfTheWelkinMoon(): Promise<void>;
  /**
   * 持续对话并选择目标选项
   * @param option 选项文本
   * @param skipTimes 跳过次数，默认 10
   * @param isOrange 是否为橙色选项，默认 false
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  chooseTalkOption(option: string): Promise<void>;
  chooseTalkOption(option: string, skipTimes: number | StrongNumeric<Int32Host>): Promise<void>;
  chooseTalkOption(
    option: string,
    skipTimes: number | StrongNumeric<Int32Host>,
    isOrange: boolean
  ): Promise<void>;
  /**
   * 一键领取纪行奖励
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  claimBattlePassRewards(): Promise<void>;
  /**
   * 领取长效历练点奖励
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  claimEncounterPointsRewards(): Promise<void>;
  /**
   * 前往冒险家协会领取奖励
   * @param country 国家名称
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  goToAdventurersGuild(country: CountryName): Promise<void>;
  /**
   * 前往合成台
   * @param country 国家名称
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  goToCraftingBench(country: CountryName): Promise<void>;
  /**
   * 在当前已打开的合成界面中合成指定材料
   * @param materialName 目标成品材料名
   * @param quantity 目标合成个数，必须大于 0
   * @param materialType 材料筛选类型；为空时从物品模型 CSV 中读取
   * @returns 在任务完成后兑现合成结果的 Promise
   * @since 0.62.0
   */
  craftMaterial(
    materialName: string,
    quantity: number | StrongNumeric<Int32Host>
  ): Promise<BetterGenshinImpact.GameTask.Common.Job.CraftMaterialResult>;
  craftMaterial(
    materialName: string,
    quantity: number | StrongNumeric<Int32Host>,
    materialType: CraftMaterialType | null
  ): Promise<BetterGenshinImpact.GameTask.Common.Job.CraftMaterialResult>;
  /**
   * 返回主界面
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  returnMainUi(): Promise<void>;
  /**
   * 自动钓鱼
   * @param fishingTimePolicy 钓鱼时段策略，默认 0
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  autoFishing(): Promise<void>;
  autoFishing(fishingTimePolicy: number | StrongNumeric<Int32Host>): Promise<void>;
  /**
   * 重新登录原神
   * @returns 在任务完成后兑现的 Promise
   * @since 0.44.3
   */
  relogin(): Promise<void>;
  /**
   * 进出千星奇域
   * @returns 在任务完成后兑现的 Promise
   * @since 0.56.2
   */
  wonderlandCycle(): Promise<void>;
  /**
   * 调整游戏内时间
   * @param hour 目标小时，范围 0-24
   * @param minute 目标分钟，范围 0-59
   * @param skip 是否跳过动画，默认为 false
   * @returns 在任务完成后兑现的 Promise
   * @since 0.54.0
   */
  setTime(
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  /**
   * 调整游戏内时间
   * @param hour 目标小时字符串，范围 0-24
   * @param minute 目标分钟字符串，范围 0-59
   * @param skip 是否跳过动画，默认为 false
   * @returns 在任务完成后兑现的 Promise
   * @since 0.54.0
   */
  setTime(hour: string, minute: string): Promise<void>;
  setTime(
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    skip: boolean
  ): Promise<void>;
  setTime(hour: string, minute: string, skip: boolean): Promise<void>;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type Genshin = import("./Genshin").Genshin;
  }
}

export interface GenshinHostType extends HostType<
  Genshin,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.43.1
   */
  new (): Genshin;
}

export {};
