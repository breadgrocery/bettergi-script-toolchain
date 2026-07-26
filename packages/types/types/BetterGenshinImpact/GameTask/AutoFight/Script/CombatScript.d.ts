import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/HashSet";
import "../../../../System/Collections/Generic/List";
import "./CombatCommand";

/**
 * 已解析的战斗策略脚本
 * @since 0.50.0
 */
declare const combatScriptBrand: unique symbol;
export interface CombatScript extends ClrHostValue {
  readonly [combatScriptBrand]: true;
  /**
   * 策略脚本名称
   * @since 0.50.0
   */
  name: string;
  /**
   * 策略脚本文件路径
   * @since 0.50.0
   */
  path: string;
  /**
   * 脚本涉及的角色名称集合
   * @since 0.50.0
   */
  avatarNames: System.Collections.Generic.HashSet<string>;
  /**
   * 解析后的战斗指令列表
   * @since 0.50.0
   */
  combatCommands: System.Collections.Generic.List<BetterGenshinImpact.GameTask.AutoFight.Script.CombatCommand>;
  /**
   * 与当前队伍角色匹配到的数量
   * @since 0.50.0
   */
  matchCount: number;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Script {
    type CombatScript = import("./CombatScript").CombatScript;
  }
}

export interface CombatScriptHostType extends HostType<CombatScript, ReferenceTypeTrait> {
  /**
   * 使用角色名集合与指令列表创建策略脚本
   * @param avatarNames 脚本涉及的角色名称集合
   * @param combatCommands 战斗指令列表
   * @since 0.50.0
   */
  new (
    avatarNames: System.Collections.Generic.HashSet<string>,
    combatCommands: System.Collections.Generic.List<BetterGenshinImpact.GameTask.AutoFight.Script.CombatCommand>
  ): CombatScript;
}

export {};
