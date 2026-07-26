import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../AsyncCallback";
import "../../IAsyncResult";
import "../../ICloneable";
import "../../IntPtr";
import "../../MulticastDelegate";
import "../../Runtime/Serialization/ISerializable";
import "./ValidationEventArgs";

declare const delegateValidationEventHandlerBrand: unique symbol;
export interface ValidationEventHandler extends HostDelegate {
  readonly [delegateValidationEventHandlerBrand]: true;
  (sender: unknown | null, e: System.Xml.Schema.ValidationEventArgs): VoidResult;
  invoke(sender: unknown | null, e: System.Xml.Schema.ValidationEventArgs): VoidResult;
}

declare global {
  namespace System.Xml.Schema {
    type ValidationEventHandler = import("./ValidationEventHandler").ValidationEventHandler;
  }
}

export interface ValidationEventHandlerHostType extends HostType<
  ValidationEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): ValidationEventHandler;
}

export {};
