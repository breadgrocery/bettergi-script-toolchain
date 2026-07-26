import type { HostType, ReferenceTypeTrait } from "../../../../Microsoft/ClearScript/HostType";
import "../../AutoFight/Script/CombatScript";
import type { MapMatchMethod, MapName } from "../../Common/Map/MapScriptNames";
import type { MonsterTag } from "../PathingScriptNames";
import "./Waypoint";

/**
 * 运行时追踪用路径点，含游戏坐标、地图图像坐标与动作解析结果
 * @since 0.43.1
 */
declare const waypointForTrackBrand: unique symbol;
export interface WaypointForTrack extends Omit<
  BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint,
  | "combatScript"
  | "enableMonsterLootSplit"
  | "gameX"
  | "gameY"
  | "logInfo"
  | "mapMatchMethod"
  | "mapName"
  | "matX"
  | "matY"
  | "misidentification"
  | "monsterTag"
> {
  readonly [waypointForTrackBrand]: true;
  /**
   * 原神坐标系横坐标
   * @since 0.43.1
   */
  gameX: number;
  /**
   * 原神坐标系纵坐标
   * @since 0.43.1
   */
  gameY: number;
  /**
   * 全地图图像坐标系横坐标
   * @since 0.43.1
   */
  matX: number;
  /**
   * 全地图图像坐标系纵坐标
   * @since 0.43.1
   */
  matY: number;
  /**
   * 地图名称
   * @since 0.43.1
   */
  mapName: MapName;
  /**
   * 地图匹配方式
   * @since 0.43.1
   */
  mapMatchMethod: MapMatchMethod;
  /**
   * 异常识别处理配置
   * @since 0.43.1
   */
  misidentification: BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint.Misidentification;
  /**
   * 怪物标签
   * @since 0.43.1
   */
  monsterTag: MonsterTag;
  /**
   * 是否按怪物标签区分拾取
   * @since 0.43.1
   */
  enableMonsterLootSplit: boolean;
  /**
   * 战斗脚本；仅当动作为 combat_script 时存在
   * @since 0.43.1
   */
  combatScript: BetterGenshinImpact.GameTask.AutoFight.Script.CombatScript;
  /**
   * 日志输出内容；仅当动作为 LogOutput 时存在
   * @since 0.43.1
   */
  logInfo: string;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing.Model {
    type WaypointForTrack = import("./WaypointForTrack").WaypointForTrack;
  }
}

export interface WaypointForTrackHostType extends HostType<WaypointForTrack, ReferenceTypeTrait> {
  /**
   * 由路径点与地图信息构造追踪用路径点，并完成坐标系转换
   * @param waypoint 原始路径点
   * @param mapName 地图名称
   * @param mapMatchMethod 地图匹配方式；为空时使用全局配置
   * @since 0.43.1
   */
  new (
    waypoint: BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint,
    mapName: MapName,
    mapMatchMethod: MapMatchMethod | null
  ): WaypointForTrack;
}

export {};
