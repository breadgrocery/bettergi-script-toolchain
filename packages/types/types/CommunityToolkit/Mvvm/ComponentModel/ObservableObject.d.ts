import type { EventSource } from "../../../Microsoft/ClearScript/HostEvent";
import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import "../../../System/ComponentModel/PropertyChangedEventHandler";
import "../../../System/ComponentModel/PropertyChangingEventHandler";

declare const observableObjectBrand: unique symbol;
export interface ObservableObject
  extends
    ClrHostValue,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [observableObjectBrand]: true;
  readonly propertyChanged: EventSource<
    (sender: unknown, e: System.ComponentModel.PropertyChangedEventArgs) => void
  >;
  readonly propertyChanging: EventSource<
    (sender: unknown, e: System.ComponentModel.PropertyChangingEventArgs) => void
  >;
}

declare global {
  namespace CommunityToolkit.Mvvm.ComponentModel {
    type ObservableObject = import("./ObservableObject").ObservableObject;
  }
}

export interface ObservableObjectHostType extends HostType<ObservableObject, ReferenceTypeTrait> {}

export {};
