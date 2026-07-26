import type {
  FamilyArgumentOmitted,
  HostDelegate,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./AsyncCallback";
import "./EventArgs";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateEventHandlerArity0Brand: unique symbol;
export interface _EventHandlerArity0 extends HostDelegate {
  readonly [delegateEventHandlerArity0Brand]: true;
  (sender: unknown | null, e: System.EventArgs): VoidResult;
  invoke(sender: unknown | null, e: System.EventArgs): VoidResult;
}

export interface _EventHandlerArity0HostType extends HostType<
  _EventHandlerArity0,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _EventHandlerArity0;
}

declare const delegateEventHandlerArity1Brand: unique symbol;
export interface _EventHandlerArity1<TEventArgs> extends HostDelegate {
  readonly [delegateEventHandlerArity1Brand]: true;
  (sender: unknown | null, e: TEventArgs | null): VoidResult;
  invoke(sender: unknown | null, e: TEventArgs | null): VoidResult;
}

export interface _EventHandlerArity1HostType<TEventArgs> extends HostType<
  _EventHandlerArity1<TEventArgs>,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): _EventHandlerArity1<TEventArgs>;
}

export type EventHandlerFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _EventHandlerArity0 : _EventHandlerArity1<T1>;

declare global {
  namespace System {
    type EventHandler<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./EventHandler").EventHandlerFamily<T1>;
  }
}

export type EventHandlerHostType = _EventHandlerArity0HostType;

export {};
