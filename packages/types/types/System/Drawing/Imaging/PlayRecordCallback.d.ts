import type {
  EnumInput,
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../AsyncCallback";
import "../../IAsyncResult";
import "../../ICloneable";
import "../../IntPtr";
import "../../MulticastDelegate";
import "../../Runtime/Serialization/ISerializable";
import "./EmfPlusRecordType";

declare const delegatePlayRecordCallbackBrand: unique symbol;
export interface PlayRecordCallback extends HostDelegate {
  readonly [delegatePlayRecordCallbackBrand]: true;
  (
    recordType: EnumInput<System.Drawing.Imaging.EmfPlusRecordType>,
    flags: number | StrongNumeric<Int32Host>,
    dataSize: number | StrongNumeric<Int32Host>,
    recordData: System.IntPtr
  ): VoidResult;
  invoke(
    recordType: EnumInput<System.Drawing.Imaging.EmfPlusRecordType>,
    flags: number | StrongNumeric<Int32Host>,
    dataSize: number | StrongNumeric<Int32Host>,
    recordData: System.IntPtr
  ): VoidResult;
}

declare global {
  namespace System.Drawing.Imaging {
    type PlayRecordCallback = import("./PlayRecordCallback").PlayRecordCallback;
  }
}

export interface PlayRecordCallbackHostType extends HostType<
  PlayRecordCallback,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): PlayRecordCallback;
}

export {};
