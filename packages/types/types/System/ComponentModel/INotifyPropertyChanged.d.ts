import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "./PropertyChangedEventHandler";

declare const iNotifyPropertyChangedInputBrand: unique symbol;
export interface INotifyPropertyChangedInput {
  readonly [iNotifyPropertyChangedInputBrand]: true;
}

export interface INotifyPropertyChanged
  extends
    Microsoft.ClearScript.ClrInterfaceView<INotifyPropertyChangedInput>,
    INotifyPropertyChangedInput {
  readonly propertyChanged: EventSource<
    (sender: unknown, e: System.ComponentModel.PropertyChangedEventArgs) => void
  >;
}

declare global {
  namespace System.ComponentModel {
    type INotifyPropertyChangedInput =
      import("./INotifyPropertyChanged").INotifyPropertyChangedInput;
  }
}

declare global {
  namespace System.ComponentModel {
    type INotifyPropertyChanged = import("./INotifyPropertyChanged").INotifyPropertyChanged;
  }
}

export interface INotifyPropertyChangedHostType extends HostType<
  INotifyPropertyChanged,
  InterfaceTypeTrait
> {}

export {};
