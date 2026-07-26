import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "./HostType";

declare const documentFlagsBrand: unique symbol;
export interface DocumentFlags extends ClrHostValue {
  readonly [documentFlagsBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentFlags = import("./DocumentFlags").DocumentFlags;
  }
}

export interface DocumentFlagsHostType extends HostType<DocumentFlags, EnumTypeTrait> {
  readonly none: DocumentFlags;
  readonly isTransient: DocumentFlags;
  readonly awaitDebuggerAndPause: DocumentFlags;
}

export {};
