import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IEnumerable";
import "../Collections/ObjectModel/ReadOnlyCollection";

declare const callInfoBrand: unique symbol;
export interface CallInfo extends ClrHostValue {
  readonly [callInfoBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  readonly argumentCount: number;
  readonly argumentNames: System.Collections.ObjectModel.ReadOnlyCollection<string>;
}

declare global {
  namespace System.Dynamic {
    type CallInfo = import("./CallInfo").CallInfo;
  }
}

export interface CallInfoHostType extends HostType<CallInfo, ReferenceTypeTrait> {
  new (argCount: number | StrongNumeric<Int32Host>, argNames: HostArray<string>): CallInfo;
  new (argCount: number | StrongNumeric<Int32Host>, ...argNames: string[]): CallInfo;
  new (
    argCount: number | StrongNumeric<Int32Host>,
    argNames: System.Collections.Generic.IEnumerable<string>
  ): CallInfo;
}

export {};
