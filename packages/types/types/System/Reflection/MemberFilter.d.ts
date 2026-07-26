import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";
import "./MemberInfo";

declare const delegateMemberFilterBrand: unique symbol;
export interface MemberFilter extends HostDelegate {
  readonly [delegateMemberFilterBrand]: true;
  (m: System.Reflection.MemberInfo, filterCriteria: unknown | null): boolean;
  invoke(m: System.Reflection.MemberInfo, filterCriteria: unknown | null): boolean;
}

declare global {
  namespace System.Reflection {
    type MemberFilter = import("./MemberFilter").MemberFilter;
  }
}

export interface MemberFilterHostType extends HostType<MemberFilter, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): MemberFilter;
}

export {};
