import type {
  DoubleHost,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IDisposable";
import "../DisposableCvObject";
import "../ICvPtrHolder";

declare const indexParamsBrand: unique symbol;
export interface IndexParams
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "getDouble"
      | "getInt"
      | "getString"
      | "setAlgorithm"
      | "setBool"
      | "setDouble"
      | "setFloat"
      | "setInt"
      | "setString"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [indexParamsBrand]: true;
  getString(key: string): string;
  getString(key: string, defaultVal: string | null): string;
  getInt(key: string): number;
  getInt(key: string, defaultVal: number | StrongNumeric<Int32Host>): number;
  getDouble(key: string): number;
  getDouble(key: string, defaultVal: number | StrongNumeric<DoubleHost>): number;
  setString(key: string, value: string): VoidResult;
  setInt(key: string, value: number | StrongNumeric<Int32Host>): VoidResult;
  setDouble(key: string, value: number | StrongNumeric<DoubleHost>): VoidResult;
  setFloat(key: string, value: number | StrongNumeric<SingleHost>): VoidResult;
  setBool(key: string, value: boolean): VoidResult;
  setAlgorithm(value: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp.Flann {
    type IndexParams = import("./IndexParams").IndexParams;
  }
}

export interface IndexParamsHostType extends HostType<
  IndexParams,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): IndexParams;
}

export {};
