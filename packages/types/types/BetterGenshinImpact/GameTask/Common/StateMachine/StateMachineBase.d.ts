import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";

/**
 * 有限状态机基类，将游戏界面抽象为状态并以注册方式管理转换与检测
 * @since 0.43.1
 */
declare const stateMachineBaseArity2Brand: unique symbol;
export interface _StateMachineBaseArity2<TState, TContext> extends ClrHostValue {
  readonly [stateMachineBaseArity2Brand]: true;
  /**
   * 当前状态
   * @since 0.43.1
   */
  readonly currentState: TState;
}

export interface _StateMachineBaseArity2HostType<TState, TContext> extends HostType<
  _StateMachineBaseArity2<TState, TContext>,
  ReferenceTypeTrait
> {}

export type StateMachineBaseFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _StateMachineBaseArity2<T1, T2>;

declare global {
  namespace BetterGenshinImpact.GameTask.Common.StateMachine {
    type StateMachineBase<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./StateMachineBase").StateMachineBaseFamily<T1, T2>;
  }
}

export type StateMachineBaseHostType<T1, T2> = _StateMachineBaseArity2HostType<T1, T2>;

export {};
