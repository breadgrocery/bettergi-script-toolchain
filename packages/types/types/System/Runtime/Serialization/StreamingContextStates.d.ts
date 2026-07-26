import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const streamingContextStatesBrand: unique symbol;
export interface StreamingContextStates extends ClrHostValue {
  readonly [streamingContextStatesBrand]: true;
}

declare global {
  namespace System.Runtime.Serialization {
    type StreamingContextStates = import("./StreamingContextStates").StreamingContextStates;
  }
}

export interface StreamingContextStatesHostType extends HostType<
  StreamingContextStates,
  EnumTypeTrait
> {
  readonly crossProcess: StreamingContextStates;
  readonly crossMachine: StreamingContextStates;
  readonly file: StreamingContextStates;
  readonly persistence: StreamingContextStates;
  readonly remoting: StreamingContextStates;
  readonly other: StreamingContextStates;
  readonly clone: StreamingContextStates;
  readonly crossAppDomain: StreamingContextStates;
  readonly all: StreamingContextStates;
}

export {};
