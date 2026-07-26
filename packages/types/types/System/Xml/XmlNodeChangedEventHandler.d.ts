import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";
import "./XmlNodeChangedEventArgs";

declare const delegateXmlNodeChangedEventHandlerBrand: unique symbol;
export interface XmlNodeChangedEventHandler extends HostDelegate {
  readonly [delegateXmlNodeChangedEventHandlerBrand]: true;
  (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs): VoidResult;
  invoke(sender: unknown, e: System.Xml.XmlNodeChangedEventArgs): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlNodeChangedEventHandler =
      import("./XmlNodeChangedEventHandler").XmlNodeChangedEventHandler;
  }
}

export interface XmlNodeChangedEventHandlerHostType extends HostType<
  XmlNodeChangedEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): XmlNodeChangedEventHandler;
}

export {};
