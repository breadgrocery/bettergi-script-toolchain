import type {
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IDisposable";
import "./ICvPtrHolder";
import "./OutputArray";

declare const outputArrayOfStructListArity1Brand: unique symbol;
export interface _OutputArrayOfStructListArity1<T>
  extends
    Omit<OpenCvSharp.OutputArray, "assignResult">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [outputArrayOfStructListArity1Brand]: true;
  assignResult(): VoidResult;
}

export interface _OutputArrayOfStructListArity1HostType<T> extends HostType<
  _OutputArrayOfStructListArity1<T>,
  ReferenceTypeTrait
> {}

export type OutputArrayOfStructListFamily<T1 = FamilyArgumentOmitted> =
  _OutputArrayOfStructListArity1<T1>;

declare global {
  namespace OpenCvSharp {
    type OutputArrayOfStructList<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./OutputArrayOfStructList").OutputArrayOfStructListFamily<T1>;
  }
}

export type OutputArrayOfStructListHostType<T1> = _OutputArrayOfStructListArity1HostType<T1>;

export {};
