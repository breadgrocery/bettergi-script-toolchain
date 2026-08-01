import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../System/Collections/Generic/List";
import type { AvatarName } from "../Model/Avatar";
import "../Model/CombatScenes";
import "./Method";

/**
 * 战斗策略中的单条指令
 * @since 0.50.0
 */
declare const combatCommandBrand: unique symbol;
export interface CombatCommand extends ClrHostValue {
  readonly [combatCommandBrand]: true;
  /**
   * 执行该指令的角色名称
   * @since 0.50.0
   */
  name: "当前角色" | AvatarName;
  /**
   * 指令动作方法
   * @since 0.50.0
   */
  method: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 指令参数列表
   * @since 0.50.0
   */
  args: System.Collections.Generic.List<string>;
  /**
   * 生效的战斗轮次列表
   * @since 0.50.0
   */
  activatingRound: System.Collections.Generic.List<number>;
  /**
   * 返回指令的字符串表示
   * @returns 包含角色名、方法、参数与轮次的描述字符串
   * @since 0.50.0
   */
  toString(): string;
  /**
   * 对指定角色执行本指令
   * @param avatar 目标角色
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  execute(avatar: BetterGenshinImpact.GameTask.AutoFight.Model.Avatar): VoidResult;
  /**
   * 在战斗场景中执行本指令
   * @param combatScenes 战斗场景
   * @param lastCommand 上一条已执行指令，用于衔接判断
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  execute(combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes): VoidResult;
  execute(
    combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes,
    lastCommand: BetterGenshinImpact.GameTask.AutoFight.Script.CombatCommand | null
  ): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Script {
    type CombatCommand = import("./CombatCommand").CombatCommand;
  }
}

export interface CombatCommandHostType extends HostType<CombatCommand, ReferenceTypeTrait> {
  /**
   * 解析角色名与指令文本创建战斗指令
   * @param name 角色名称
   * @param command 指令文本，如 `skill` 或 `walk(s, 0.2)`
   * @since 0.50.0
   */
  new (name: "当前角色" | AvatarName, command: string): CombatCommand;
}

export {};
