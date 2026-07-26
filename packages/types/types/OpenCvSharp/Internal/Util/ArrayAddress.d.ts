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

declare const arrayAddress1Arity1Brand: unique symbol;
export interface _ArrayAddress1Arity1<T>
  extends Omit<OpenCvSharp.DisposableObject, "length" | "pointer">, System.IDisposableInput {
  readonly [arrayAddress1Arity1Brand]: true;
  readonly pointer: System.IntPtr;
  readonly length: number;
}

export interface _ArrayAddress1Arity1HostType<T> extends HostType<
  _ArrayAddress1Arity1<T>,
  ReferenceTypeTrait
> {
  new (array: HostArray<T>): _ArrayAddress1Arity1<T>;
  new (enumerable: System.Collections.Generic.IEnumerable<T>): _ArrayAddress1Arity1<T>;
  new (array: HostArray<T>): _ArrayAddress1Arity1<T>;
}

export type ArrayAddress1Family<T1 = FamilyArgumentOmitted> = _ArrayAddress1Arity1<T1>;

declare global {
  namespace OpenCvSharp.Internal.Util {
    type ArrayAddress1<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ArrayAddress").ArrayAddress1Family<T1>;
  }
}

export type ArrayAddress1HostType<T1> = _ArrayAddress1Arity1HostType<T1>;

export {};
