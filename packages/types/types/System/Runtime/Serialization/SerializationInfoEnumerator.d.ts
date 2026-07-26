import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/IEnumerator";
import "../../V8SplitProxyHelpers";
import "./SerializationEntry";

declare const serializationInfoEnumeratorBrand: unique symbol;
export interface SerializationInfoEnumerator
  extends ClrHostValue, System.Collections.IEnumeratorInput {
  readonly [serializationInfoEnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: System.Runtime.Serialization.SerializationEntry;
  readonly name: string;
  readonly objectType: System.Type;
  readonly value: unknown;
  reset(): VoidResult;
}

declare global {
  namespace System.Runtime.Serialization {
    type SerializationInfoEnumerator =
      import("./SerializationInfoEnumerator").SerializationInfoEnumerator;
  }
}

export interface SerializationInfoEnumeratorHostType extends HostType<
  SerializationInfoEnumerator,
  ReferenceTypeTrait
> {}

export {};
