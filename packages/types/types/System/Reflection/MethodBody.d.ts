import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IList";
import "./ExceptionHandlingClause";
import "./LocalVariableInfo";

declare const methodBodyBrand: unique symbol;
export interface MethodBody extends ClrHostValue {
  readonly [methodBodyBrand]: true;
  getILAsByteArray(): HostArray<number>;
  readonly exceptionHandlingClauses: System.Collections.Generic.IList<System.Reflection.ExceptionHandlingClause>;
  readonly initLocals: boolean;
  readonly localSignatureMetadataToken: number;
  readonly localVariables: System.Collections.Generic.IList<System.Reflection.LocalVariableInfo>;
  readonly maxStackSize: number;
}

declare global {
  namespace System.Reflection {
    type MethodBody = import("./MethodBody").MethodBody;
  }
}

export interface MethodBodyHostType extends HostType<MethodBody, ReferenceTypeTrait> {}

export {};
