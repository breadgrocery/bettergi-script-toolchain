import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../System/Collections/Generic/IEnumerable";
import "../../../../System/Collections/Generic/List";

/**
 * 战斗策略脚本中的动作方法名或别名
 * 与上游 `Method` 静态实例的 `Alias` 对齐；未知写法仍可经 `(string & {})` 传入
 * @since 0.50.0
 */
export type CombatMethodCode =
  // Skill
  | "skill"
  | "e"
  // Burst
  | "burst"
  | "q"
  // Attack
  | "attack"
  | "普攻"
  | "普通攻击"
  // Charge
  | "charge"
  | "重击"
  // Wait
  | "wait"
  | "after"
  | "等待"
  // Ready
  | "ready"
  | "完成"
  // Check
  | "check"
  | "检测"
  // Walk / 方向
  | "walk"
  | "行走"
  | "w"
  | "a"
  | "s"
  | "d"
  // Aim（已注册静态成员；GetEnumByCode 的 Values 当前未 yield）
  | "aim"
  | "r"
  | "瞄准"
  // Dash / Jump
  | "dash"
  | "冲刺"
  | "jump"
  | "j"
  | "跳跃"
  // 宏
  | "mousedown"
  | "mouseup"
  | "click"
  | "moveby"
  | "keydown"
  | "keyup"
  | "keypress"
  | "scroll"
  | "verticalscroll"
  | "round"
  | (string & {});

/**
 * 战斗策略脚本中的动作方法
 * @since 0.50.0
 */
declare const methodBrand: unique symbol;
export interface Method extends ClrHostValue {
  readonly [methodBrand]: true;
  /**
   * 方法别名列表，脚本中可使用其中任一写法
   * @since 0.50.0
   */
  readonly alias: System.Collections.Generic.List<CombatMethodCode>;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Script {
    type Method = import("./Method").Method;
    type CombatMethodCode = import("./Method").CombatMethodCode;
  }
}

export interface MethodHostType extends HostType<Method, ReferenceTypeTrait> {
  /**
   * 使用别名列表创建动作方法
   * @param alias 方法别名列表
   * @since 0.50.0
   */
  new (alias: System.Collections.Generic.List<CombatMethodCode>): Method;
  /**
   * 元素战技，别名含 `skill`、`e`
   * @since 0.50.0
   */
  readonly skill: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 元素爆发，别名含 `burst`、`q`
   * @since 0.50.0
   */
  readonly burst: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 普通攻击，别名含 `attack`、`普攻`、`普通攻击`
   * @since 0.50.0
   */
  readonly attack: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 重击，别名含 `charge`、`重击`
   * @since 0.50.0
   */
  readonly charge: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 等待，别名含 `wait`、`after`、`等待`
   * @since 0.50.0
   */
  readonly wait: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 标记动作完成，别名含 `ready`、`完成`
   * @since 0.50.0
   */
  readonly ready: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 触发战斗结束检测，别名含 `check`、`检测`
   * @since 0.50.0
   */
  readonly check: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 行走，别名含 `walk`、`行走`
   * @since 0.50.0
   */
  readonly walk: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 向前移动（W 键）
   * @since 0.50.0
   */
  readonly w: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 向左移动（A 键）
   * @since 0.50.0
   */
  readonly a: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 向后移动（S 键）
   * @since 0.50.0
   */
  readonly s: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 向右移动（D 键）
   * @since 0.50.0
   */
  readonly d: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 瞄准，别名含 `aim`、`r`、`瞄准`
   * @since 0.50.0
   */
  readonly aim: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 冲刺，别名含 `dash`、`冲刺`
   * @since 0.50.0
   */
  readonly dash: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 跳跃，别名含 `jump`、`j`、`跳跃`
   * @since 0.50.0
   */
  readonly jump: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 按下鼠标按键
   * @since 0.50.0
   */
  readonly mouseDown: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 抬起鼠标按键
   * @since 0.50.0
   */
  readonly mouseUp: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 点击鼠标按键
   * @since 0.50.0
   */
  readonly click: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 相对移动鼠标
   * @since 0.50.0
   */
  readonly moveBy: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 按下键盘按键
   * @since 0.50.0
   */
  readonly keyDown: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 抬起键盘按键
   * @since 0.50.0
   */
  readonly keyUp: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 单击键盘按键
   * @since 0.50.0
   */
  readonly keyPress: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 滚动鼠标滚轮，别名含 `scroll`、`verticalscroll`
   * @since 0.50.0
   */
  readonly scroll: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 指定生效轮次
   * @since 0.50.0
   */
  readonly round: BetterGenshinImpact.GameTask.AutoFight.Script.Method;
  /**
   * 全部已注册动作方法
   * @since 0.50.0
   */
  readonly values: System.Collections.Generic.IEnumerable<BetterGenshinImpact.GameTask.AutoFight.Script.Method>;
  /**
   * 按脚本中的方法名或别名查找动作方法
   * @param method 方法名或别名
   * @returns 对应的动作方法
   * @throws 方法名未知时抛出参数异常
   * @since 0.50.0
   */
  getEnumByCode(method: CombatMethodCode): BetterGenshinImpact.GameTask.AutoFight.Script.Method;
}

export {};
