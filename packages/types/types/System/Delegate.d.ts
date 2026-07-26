import type {
  HostArray,
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./ICloneable";
import "./Reflection/MethodInfo";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./V8SplitProxyHelpers";

declare const delegateDelegateBrand: unique symbol;
export interface Delegate extends HostDelegate {
  readonly [delegateDelegateBrand]: true;
}

declare global {
  namespace System {
    type Delegate = import("./Delegate").Delegate;
  }
}

export interface DelegateHostType extends HostType<Delegate, ReferenceTypeTrait> {
  createDelegate(
    type: System.Type,
    target: unknown,
    method: string,
    ignoreCase: boolean,
    throwOnBindFailure: boolean
  ): System.Delegate;
  createDelegate(
    type: System.Type,
    target: System.Type,
    method: string,
    ignoreCase: boolean,
    throwOnBindFailure: boolean
  ): System.Delegate;
  createDelegate(
    type: System.Type,
    method: System.Reflection.MethodInfo,
    throwOnBindFailure: boolean
  ): System.Delegate;
  createDelegate(
    type: System.Type,
    firstArgument: unknown | null,
    method: System.Reflection.MethodInfo,
    throwOnBindFailure: boolean
  ): System.Delegate;
  combine(a: System.Delegate | null, b: System.Delegate | null): System.Delegate;
  combine(delegates: HostArray<System.Delegate>): System.Delegate;
  combine(...delegates: System.Delegate[]): System.Delegate;
  createDelegate(
    type: System.Type,
    firstArgument: unknown | null,
    method: System.Reflection.MethodInfo
  ): System.Delegate;
  createDelegate(type: System.Type, method: System.Reflection.MethodInfo): System.Delegate;
  createDelegate(type: System.Type, target: unknown, method: string): System.Delegate;
  createDelegate(
    type: System.Type,
    target: unknown,
    method: string,
    ignoreCase: boolean
  ): System.Delegate;
  createDelegate(type: System.Type, target: System.Type, method: string): System.Delegate;
  createDelegate(
    type: System.Type,
    target: System.Type,
    method: string,
    ignoreCase: boolean
  ): System.Delegate;
  remove(source: System.Delegate | null, value: System.Delegate | null): System.Delegate;
  removeAll(source: System.Delegate | null, value: System.Delegate | null): System.Delegate;
}

export {};
