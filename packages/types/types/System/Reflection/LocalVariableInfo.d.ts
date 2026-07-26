import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../V8SplitProxyHelpers";

declare const localVariableInfoBrand: unique symbol;
export interface LocalVariableInfo extends ClrHostValue {
  readonly [localVariableInfoBrand]: true;
  readonly isPinned: boolean;
  readonly localIndex: number;
  readonly localType: System.Type;
  toString(): string;
}

declare global {
  namespace System.Reflection {
    type LocalVariableInfo = import("./LocalVariableInfo").LocalVariableInfo;
  }
}

export interface LocalVariableInfoHostType extends HostType<
  LocalVariableInfo,
  ReferenceTypeTrait
> {}

export {};
