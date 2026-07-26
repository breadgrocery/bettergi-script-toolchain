import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Threading/CancellationToken";

/**
 * 独立任务接口
 * @since 0.43.1
 */
declare const iSoloTaskArity0InputBrand: unique symbol;
export interface _ISoloTaskArity0Input {
  readonly [iSoloTaskArity0InputBrand]: true;
}

export interface _ISoloTaskArity0
  extends Microsoft.ClearScript.ClrInterfaceView<_ISoloTaskArity0Input>, _ISoloTaskArity0Input {
  /**
   * 独立任务名称
   * @since 0.43.1
   */
  readonly name: string;
  /**
   * 启动独立任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现的 Promise
   * @since 0.43.1
   */
  start(ct: System.Threading.CancellationToken): Promise<void>;
}

export interface _ISoloTaskArity0HostType extends HostType<_ISoloTaskArity0, InterfaceTypeTrait> {}

/**
 * 带返回值的独立任务接口
 * @since 0.43.1
 */
declare const iSoloTaskArity1InputBrand: unique symbol;
export interface _ISoloTaskArity1Input<T> {
  readonly [iSoloTaskArity1InputBrand]: true;
}

export interface _ISoloTaskArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ISoloTaskArity1Input<T>>,
    _ISoloTaskArity1Input<T> {
  /**
   * 启动独立任务
   * @param ct 取消令牌
   * @returns 在任务完成后兑现结果的 Promise
   * @since 0.43.1
   */
  start(ct: System.Threading.CancellationToken): Promise<T>;
}

export interface _ISoloTaskArity1HostType<T> extends HostType<
  _ISoloTaskArity1<T>,
  InterfaceTypeTrait
> {}

export type ISoloTaskFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ISoloTaskArity0 : _ISoloTaskArity1<T1>;

declare global {
  namespace BetterGenshinImpact.GameTask {
    type ISoloTask<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ISoloTask").ISoloTaskFamily<T1>;
  }
}

export type ISoloTaskInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ISoloTaskArity0Input : _ISoloTaskArity1Input<T1>;

declare global {
  namespace BetterGenshinImpact.GameTask {
    type ISoloTaskInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ISoloTask").ISoloTaskInputFamily<T1>;
  }
}

export type ISoloTaskHostType = _ISoloTaskArity0HostType;

export {};
