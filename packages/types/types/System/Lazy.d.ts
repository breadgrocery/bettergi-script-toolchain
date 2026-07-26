import type {
  ClrHostValue,
  EnumInput,
  FamilyArgumentOmitted,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./Func";
import "./Threading/LazyThreadSafetyMode";

declare const lazyArity1Brand: unique symbol;
export interface _LazyArity1<T> extends ClrHostValue {
  readonly [lazyArity1Brand]: true;
  readonly isValueCreated: boolean;
  readonly value: T;
  toString(): string;
}

export interface _LazyArity1HostType<T> extends HostType<
  _LazyArity1<T>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _LazyArity1<T>;
  new (value: T): _LazyArity1<T>;
  new (valueFactory: System.Func<T>): _LazyArity1<T>;
  new (isThreadSafe: boolean): _LazyArity1<T>;
  new (mode: EnumInput<System.Threading.LazyThreadSafetyMode>): _LazyArity1<T>;
  new (valueFactory: System.Func<T>, isThreadSafe: boolean): _LazyArity1<T>;
  new (
    valueFactory: System.Func<T>,
    mode: EnumInput<System.Threading.LazyThreadSafetyMode>
  ): _LazyArity1<T>;
}

export type LazyFamily<T1 = FamilyArgumentOmitted> = _LazyArity1<T1>;

declare global {
  namespace System {
    type Lazy<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> = import("./Lazy").LazyFamily<T1>;
  }
}

export type LazyHostType<T1> = _LazyArity1HostType<T1>;

export {};
