import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/IDisposable";
import "../../System/UIntPtr";
import "../DisposableCvObject";
import "../ICvPtrHolder";

declare const stdStringBrand: unique symbol;
export interface StdString
  extends
    Omit<OpenCvSharp.DisposableCvObject, "size" | "toString">,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [stdStringBrand]: true;
  readonly size: System.UIntPtr;
  toString(): string;
}

declare global {
  namespace OpenCvSharp.Internal {
    type StdString = import("./StdString").StdString;
  }
}

export interface StdStringHostType extends HostType<
  StdString,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): StdString;
  new (str: string): StdString;
}

export {};
