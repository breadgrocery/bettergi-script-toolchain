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
import "../ResolveEventArgs";
import "../Runtime/Serialization/ISerializable";
import "./CommonJSManager";

declare const delegateModuleResolveEventHandlerBrand: unique symbol;
export interface ModuleResolveEventHandler extends HostDelegate {
  readonly [delegateModuleResolveEventHandlerBrand]: true;
  (sender: unknown, e: System.ResolveEventArgs): System.Reflection.Module;
  invoke(sender: unknown, e: System.ResolveEventArgs): System.Reflection.Module;
}

declare global {
  namespace System.Reflection {
    type ModuleResolveEventHandler =
      import("./ModuleResolveEventHandler").ModuleResolveEventHandler;
  }
}

export interface ModuleResolveEventHandlerHostType extends HostType<
  ModuleResolveEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): ModuleResolveEventHandler;
}

export {};
