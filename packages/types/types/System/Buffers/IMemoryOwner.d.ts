import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IDisposable";
import "../Memory";

declare const iMemoryOwnerArity1InputBrand: unique symbol;
export interface _IMemoryOwnerArity1Input<T> {
  readonly [iMemoryOwnerArity1InputBrand]: true;
}

export interface _IMemoryOwnerArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IMemoryOwnerArity1Input<T>>,
    _IMemoryOwnerArity1Input<T> {
  readonly memory: System.Memory<T>;
}

export interface _IMemoryOwnerArity1HostType<T> extends HostType<
  _IMemoryOwnerArity1<T>,
  InterfaceTypeTrait
> {}

export type IMemoryOwnerFamily<T1 = FamilyArgumentOmitted> = _IMemoryOwnerArity1<T1>;

declare global {
  namespace System.Buffers {
    type IMemoryOwner<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IMemoryOwner").IMemoryOwnerFamily<T1>;
  }
}

export type IMemoryOwnerInputFamily<T1 = FamilyArgumentOmitted> = _IMemoryOwnerArity1Input<T1>;
export type IMemoryOwnerInput<T1> = _IMemoryOwnerArity1Input<T1>;

declare global {
  namespace System.Buffers {
    type IMemoryOwnerInput<T1> = import("./IMemoryOwner").IMemoryOwnerInput<T1>;
  }
}

export type IMemoryOwnerHostType<T1> = _IMemoryOwnerArity1HostType<T1>;

export {};
