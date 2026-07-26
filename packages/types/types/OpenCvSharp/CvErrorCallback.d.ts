import type {
  EnumInput,
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./ErrorCode";

declare const delegateCvErrorCallbackBrand: unique symbol;
export interface CvErrorCallback extends HostDelegate {
  readonly [delegateCvErrorCallbackBrand]: true;
  (
    status: EnumInput<OpenCvSharp.ErrorCode>,
    funcName: string,
    errMsg: string,
    fileName: string,
    line: number | StrongNumeric<Int32Host>,
    userData: System.IntPtr
  ): number;
  invoke(
    status: EnumInput<OpenCvSharp.ErrorCode>,
    funcName: string,
    errMsg: string,
    fileName: string,
    line: number | StrongNumeric<Int32Host>,
    userData: System.IntPtr
  ): number;
}

declare global {
  namespace OpenCvSharp {
    type CvErrorCallback = import("./CvErrorCallback").CvErrorCallback;
  }
}

export interface CvErrorCallbackHostType extends HostType<CvErrorCallback, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): CvErrorCallback;
}

export {};
