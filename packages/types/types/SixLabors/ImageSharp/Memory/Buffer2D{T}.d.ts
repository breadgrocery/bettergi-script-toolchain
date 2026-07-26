import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "./IMemoryGroup{T}";

declare const buffer2DArity1Brand: unique symbol;
export interface _Buffer2DArity1<T> extends ClrHostValue, System.IDisposableInput {
  readonly [buffer2DArity1Brand]: true;
  readonly width: number;
  readonly height: number;
  readonly memoryGroup: SixLabors.ImageSharp.Memory.IMemoryGroup<T>;
  item: {
    (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): T;
    get(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): T;
  };
  dispose(): VoidResult;
}

export interface _Buffer2DArity1HostType<T> extends HostType<
  _Buffer2DArity1<T>,
  ReferenceTypeTrait
> {}

export type Buffer2DFamily<T1 = FamilyArgumentOmitted> = _Buffer2DArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type Buffer2D<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Buffer2D{T}").Buffer2DFamily<T1>;
  }
}

export type Buffer2DHostType<T1> = _Buffer2DArity1HostType<T1>;

export {};
