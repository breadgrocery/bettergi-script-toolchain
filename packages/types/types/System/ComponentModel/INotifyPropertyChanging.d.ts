import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./PropertyChangingEventHandler";

declare const iNotifyPropertyChangingInputBrand: unique symbol;
export interface INotifyPropertyChangingInput {
  readonly [iNotifyPropertyChangingInputBrand]: true;
}

export interface INotifyPropertyChanging
  extends
    Microsoft.ClearScript.ClrInterfaceView<INotifyPropertyChangingInput>,
    INotifyPropertyChangingInput {
  readonly propertyChanging: EventSource<
    (sender: unknown, e: System.ComponentModel.PropertyChangingEventArgs) => void
  >;
}

declare global {
  namespace System.ComponentModel {
    type INotifyPropertyChangingInput =
      import("./INotifyPropertyChanging").INotifyPropertyChangingInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type INotifyPropertyChanging = import("./INotifyPropertyChanging").INotifyPropertyChanging;
  }
}

export interface INotifyPropertyChangingHostType extends HostType<
  INotifyPropertyChanging,
  InterfaceTypeTrait
> {}

export {};
