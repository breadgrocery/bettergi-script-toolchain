import "../../System/Collections/Generic/IEnumerable";
import "../../System/Dynamic/DynamicObject";
import "../../System/Dynamic/IDynamicMetaObjectProvider";
import "../../System/IDisposable";
import type { HostArray, HostType, Int32Host, ReferenceTypeTrait, StrongNumeric } from "./HostType";
import type { DynamicMetaObjectProviderInput } from "./HostVariable";
import "./IScriptObject";
import "./ScriptEngine";
import type { VoidResult } from "./VoidResult";

declare const scriptObjectBrand: unique symbol;
export interface ScriptObject
  extends
    Omit<
      System.Dynamic.DynamicObject,
      | "deleteProperty"
      | "dispose"
      | "engine"
      | "getProperty"
      | "invoke"
      | "invokeAsFunction"
      | "invokeMethod"
      | "item"
      | "propertyIndices"
      | "propertyNames"
      | "setProperty"
    >,
    System.Dynamic.IDynamicMetaObjectProviderInput,
    Microsoft.ClearScript.IScriptObjectInput,
    System.IDisposableInput,
    DynamicMetaObjectProviderInput {
  readonly [scriptObjectBrand]: true;
  readonly engine: Microsoft.ClearScript.ScriptEngine;
  readonly propertyNames: System.Collections.Generic.IEnumerable<string>;
  getProperty(index: number | StrongNumeric<Int32Host>): unknown;
  getProperty(name: string, ...args: unknown[]): unknown;
  getProperty(name: string, args: HostArray<unknown>): unknown;
  setProperty(index: number | StrongNumeric<Int32Host>, value: unknown): VoidResult;
  setProperty(name: string, ...args: unknown[]): VoidResult;
  setProperty(name: string, args: HostArray<unknown>): VoidResult;
  deleteProperty(index: number | StrongNumeric<Int32Host>): boolean;
  deleteProperty(name: string): boolean;
  readonly propertyIndices: System.Collections.Generic.IEnumerable<number>;
  item: {
    (name: string, args: HostArray<unknown>): unknown;
    get(name: string, args: HostArray<unknown>): unknown;
    set(name: string, args: HostArray<unknown>, value: unknown): unknown;
    (index: number | StrongNumeric<Int32Host>): unknown;
    get(index: number | StrongNumeric<Int32Host>): unknown;
    set(index: number | StrongNumeric<Int32Host>, value: unknown): unknown;
  };
  invoke(asConstructor: boolean, ...args: unknown[]): unknown;
  invoke(asConstructor: boolean, args: HostArray<unknown>): unknown;
  invokeMethod(name: string, ...args: unknown[]): unknown;
  invokeMethod(name: string, args: HostArray<unknown>): unknown;
  invokeAsFunction(...args: unknown[]): unknown;
  invokeAsFunction(args: HostArray<unknown>): unknown;
  dispose(): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type ScriptObject = import("./ScriptObject").ScriptObject;
  }
}

export interface ScriptObjectHostType extends HostType<ScriptObject, ReferenceTypeTrait> {}

export {};
