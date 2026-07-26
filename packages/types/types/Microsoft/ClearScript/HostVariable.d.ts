import type { ClrHostValue, ClrInterfaceView } from "./HostType";

declare const hostVariableValueBrand: unique symbol;
declare const hostVariableRefBrand: unique symbol;
declare const hostVariableOutBrand: unique symbol;
declare const dynamicMetaObjectProviderInputBrand: unique symbol;

export interface HostVariableValue<out TValue> extends ClrHostValue {
  readonly [hostVariableValueBrand]: TValue;
}

export interface HostVariableRef<in out TValue> extends ClrHostValue {
  readonly [hostVariableRefBrand]: (value: TValue) => TValue;
}

export interface HostVariableOut<in out TValue> extends ClrHostValue {
  readonly [hostVariableOutBrand]: (value: TValue) => TValue;
}

export interface HostVariable<in out TValue> extends HostVariableValue<TValue>, ClrHostValue {
  value: TValue;
  readonly ref: HostVariableRef<TValue>;
  readonly out: HostVariableOut<TValue>;
}

type DirectClrInput<TValue> =
  TValue extends ClrInterfaceView<infer TInputMarker> ? TInputMarker : TValue;

export type ClrInput<TValue> = DirectClrInput<TValue> | HostVariableValue<DirectClrInput<TValue>>;

export interface DynamicMetaObjectProviderInput {
  readonly [dynamicMetaObjectProviderInputBrand]: true;
}

type IsAny<TValue> = 0 extends 1 & TValue ? true : false;

type IsDynamicMetaObjectInput<TValue> =
  IsAny<TValue> extends true
    ? true
    : [TValue] extends [object]
      ? [Extract<TValue, Promise<unknown>>] extends [never]
        ? [Extract<TValue, ClrHostValue>] extends [never]
          ? true
          : [Extract<TValue, ClrHostValue>] extends [DynamicMetaObjectProviderInput]
            ? true
            : false
        : false
      : false;

export type DynamicMetaObjectInputGuard<TValue> =
  IsDynamicMetaObjectInput<TValue> extends true ? [] : [invalidDynamicMetaObjectInput: never];

declare global {
  namespace Microsoft.ClearScript {
    type HostVariableValue<TValue> = import("./HostVariable").HostVariableValue<TValue>;
    type HostVariableRef<TValue> = import("./HostVariable").HostVariableRef<TValue>;
    type HostVariableOut<TValue> = import("./HostVariable").HostVariableOut<TValue>;
    type HostVariable<TValue> = import("./HostVariable").HostVariable<TValue>;
    type ClrInput<TValue> = import("./HostVariable").ClrInput<TValue>;
    type DynamicMetaObjectProviderInput = import("./HostVariable").DynamicMetaObjectProviderInput;
    type DynamicMetaObjectInputGuard<TValue> =
      import("./HostVariable").DynamicMetaObjectInputGuard<TValue>;
  }
}

export {};
