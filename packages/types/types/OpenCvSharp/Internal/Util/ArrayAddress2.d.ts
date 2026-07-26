import type {
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../DisposableObject";

declare const arrayAddress2Arity1Brand: unique symbol;
export interface _ArrayAddress2Arity1<T>
  extends
    Omit<OpenCvSharp.DisposableObject, "getDim1Length" | "getDim2Lengths" | "getPointer">,
    System.IDisposableInput {
  readonly [arrayAddress2Arity1Brand]: true;
  getPointer(): HostArray<System.IntPtr>;
  getDim1Length(): number;
  getDim2Lengths(): HostArray<number>;
}

export interface _ArrayAddress2Arity1HostType<T> extends HostType<
  _ArrayAddress2Arity1<T>,
  ReferenceTypeTrait
> {
  new (array: HostArray<HostArray<T>>): _ArrayAddress2Arity1<T>;
  new (
    enumerable: System.Collections.Generic.IEnumerable<System.Collections.Generic.IEnumerable<T>>
  ): _ArrayAddress2Arity1<T>;
}

export type ArrayAddress2Family<T1 = FamilyArgumentOmitted> = _ArrayAddress2Arity1<T1>;

declare global {
  namespace OpenCvSharp.Internal.Util {
    type ArrayAddress2<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ArrayAddress2").ArrayAddress2Family<T1>;
  }
}

export type ArrayAddress2HostType<T1> = _ArrayAddress2Arity1HostType<T1>;

export {};
