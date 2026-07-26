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

declare const delegatePredicateArity1Brand: unique symbol;
export interface _PredicateArity1<T> extends HostDelegate {
  readonly [delegatePredicateArity1Brand]: true;
  (obj: T | null): boolean;
  invoke(obj: T | null): boolean;
}

export interface _PredicateArity1HostType<T> extends HostType<
  _PredicateArity1<T>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _PredicateArity1<T>;
}

export type PredicateFamily<T1 = FamilyArgumentOmitted> = _PredicateArity1<T1>;

declare global {
  namespace System {
    type Predicate<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Predicate").PredicateFamily<T1>;
  }
}

export type PredicateHostType<T1> = _PredicateArity1HostType<T1>;

export {};
