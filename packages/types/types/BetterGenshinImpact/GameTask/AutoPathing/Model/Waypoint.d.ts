import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/List";
import type {
  MisidentificationHandlingMode,
  MisidentificationTriggerType,
  MonsterTag,
  MoveMode,
  WaypointAction,
  WaypointPointType
} from "../PathingScriptNames";
import "./MaterialInfo";

/**
 * 地图追踪路径点
 * @since 0.43.1
 */
declare const waypointBrand: unique symbol;
export interface Waypoint extends ClrHostValue {
  readonly [waypointBrand]: true;
  /**
   * 横坐标
   * @since 0.43.1
   */
  x: number;
  /**
   * 纵坐标
   * @since 0.43.1
   */
  y: number;
  /**
   * 路径点扩展参数
   * @since 0.43.1
   */
  pointExtParams: Waypoint_ExtParams;
  /**
   * 路径点类型
   * @since 0.43.1
   */
  type: WaypointPointType;
  /**
   * 移动模式
   * @since 0.43.1
   */
  moveMode: MoveMode;
  /**
   * 到达后动作
   * @since 0.43.1
   */
  action: WaypointAction;
  /**
   * 动作参数
   * @since 0.43.1
   */
  actionParams: string;
  /**
   * 关联的怪物或特产材料列表
   * @since 0.43.1
   */
  items: System.Collections.Generic.List<BetterGenshinImpact.GameTask.AutoPathing.Model.MaterialInfo>;
}

/**
 * 路径点异常识别处理配置
 * @since 0.43.1
 */
declare const waypoint_MisidentificationBrand: unique symbol;
export interface Waypoint_Misidentification extends ClrHostValue {
  readonly [waypoint_MisidentificationBrand]: true;
  /**
   * 触发处理的异常类型
   * @since 0.43.1
   */
  type: System.Collections.Generic.List<MisidentificationTriggerType>;
  /**
   * 处理方式
   * @since 0.43.1
   */
  handlingMode: MisidentificationHandlingMode;
  /**
   * 预估到达时间
   * @since 0.43.1
   */
  arrivalTime: number;
}

export interface Waypoint_MisidentificationHostType extends HostType<
  Waypoint_Misidentification,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造异常识别配置
   * @since 0.43.1
   */
  new (): Waypoint_Misidentification;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint {
    type Misidentification = import("./Waypoint").Waypoint_Misidentification;
  }
}

/**
 * 路径点扩展参数
 * @since 0.43.1
 */
declare const waypoint_ExtParamsBrand: unique symbol;
export interface Waypoint_ExtParams extends ClrHostValue {
  readonly [waypoint_ExtParamsBrand]: true;
  /**
   * 异常识别处理配置
   * @since 0.43.1
   */
  misidentification: BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint.Misidentification;
  /**
   * 描述
   * @since 0.43.1
   */
  description: string;
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
}

export interface Waypoint_ExtParamsHostType extends HostType<
  Waypoint_ExtParams,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造扩展参数
   * @since 0.43.1
   */
  new (): Waypoint_ExtParams;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing.Model.Waypoint {
    type ExtParams = import("./Waypoint").Waypoint_ExtParams;
  }
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing.Model {
    type Waypoint = import("./Waypoint").Waypoint;
  }
}

export interface WaypointHostType extends HostType<
  Waypoint,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造路径点
   * @since 0.43.1
   */
  new (): Waypoint;
  readonly Misidentification: Waypoint_MisidentificationHostType;
  readonly ExtParams: Waypoint_ExtParamsHostType;
}

export {};
