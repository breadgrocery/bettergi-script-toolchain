import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Collections/Generic/IEnumerable";
import "../../../System/Collections/Generic/IReadOnlyCollection";
import "../../../System/Collections/Generic/IReadOnlyList";
import "../../../System/Collections/IEnumerable";
import "../../../System/Memory";

declare const iMemoryGroupArity1InputBrand: unique symbol;
export interface _IMemoryGroupArity1Input<T> {
  readonly [iMemoryGroupArity1InputBrand]: true;
}

export interface _IMemoryGroupArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IMemoryGroupArity1Input<T>>,
    _IMemoryGroupArity1Input<T> {
  readonly bufferLength: number;
  readonly totalLength: number;
  readonly isValid: boolean;
}

export interface _IMemoryGroupArity1HostType<T> extends HostType<
  _IMemoryGroupArity1<T>,
  InterfaceTypeTrait
> {}

export type IMemoryGroupFamily<T1 = FamilyArgumentOmitted> = _IMemoryGroupArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type IMemoryGroup<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IMemoryGroup{T}").IMemoryGroupFamily<T1>;
  }
}

export type IMemoryGroupInputFamily<T1 = FamilyArgumentOmitted> = _IMemoryGroupArity1Input<T1>;
export type IMemoryGroupInput<T1> = _IMemoryGroupArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type IMemoryGroupInput<T1> = import("./IMemoryGroup{T}").IMemoryGroupInput<T1>;
  }
}

export type IMemoryGroupHostType<T1> = _IMemoryGroupArity1HostType<T1>;

export {};
