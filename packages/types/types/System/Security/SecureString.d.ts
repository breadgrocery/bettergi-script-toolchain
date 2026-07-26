import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";

declare const secureStringBrand: unique symbol;
export interface SecureString extends ClrHostValue, System.IDisposableInput {
  readonly [secureStringBrand]: true;
  appendChar(c: number | StrongNumeric<CharHost>): VoidResult;
  clear(): VoidResult;
  copy(): System.Security.SecureString;
  dispose(): VoidResult;
  insertAt(
    index: number | StrongNumeric<Int32Host>,
    c: number | StrongNumeric<CharHost>
  ): VoidResult;
  isReadOnly(): boolean;
  makeReadOnly(): VoidResult;
  readonly length: number;
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
  setAt(index: number | StrongNumeric<Int32Host>, c: number | StrongNumeric<CharHost>): VoidResult;
}

declare global {
  namespace System.Security {
    type SecureString = import("./SecureString").SecureString;
  }
}

export interface SecureStringHostType extends HostType<
  SecureString,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SecureString;
}

export {};
