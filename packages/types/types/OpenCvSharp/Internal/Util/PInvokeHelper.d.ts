import type {
  ClrHostValue,
  HostType,
  StaticTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/WebSocket";
import "../../OpenCvSharpException";

declare const pInvokeHelperBrand: unique symbol;
export interface PInvokeHelper extends ClrHostValue {
  readonly [pInvokeHelperBrand]: true;
}

declare global {
  namespace OpenCvSharp.Internal.Util {
    type PInvokeHelper = import("./PInvokeHelper").PInvokeHelper;
  }
}

export interface PInvokeHelperHostType extends HostType<PInvokeHelper, StaticTypeTrait> {
  tryPInvoke(): VoidResult;
  dllImportError(ex: System.Exception): VoidResult;
  createException(ex: System.Exception): OpenCvSharp.OpenCvSharpException;
}

export {};
