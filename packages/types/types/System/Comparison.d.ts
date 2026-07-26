import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./AsyncCallback";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateComparisonArity1Brand: unique symbol;
export interface _ComparisonArity1<T> extends HostDelegate {
  readonly [delegateComparisonArity1Brand]: true;
  (x: T | null, y: T | null): number;
  invoke(x: T | null, y: T | null): number;
}

export interface _ComparisonArity1HostType<T> extends HostType<
  _ComparisonArity1<T>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _ComparisonArity1<T>;
}

export type ComparisonFamily<T1 = FamilyArgumentOmitted> = _ComparisonArity1<T1>;

declare global {
  namespace System {
    type Comparison<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Comparison").ComparisonFamily<T1>;
  }
}

export type ComparisonHostType<T1> = _ComparisonArity1HostType<T1>;

export {};
