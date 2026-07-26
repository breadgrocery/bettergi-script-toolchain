import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const portableExecutableKindsBrand: unique symbol;
export interface PortableExecutableKinds extends ClrHostValue {
  readonly [portableExecutableKindsBrand]: true;
}

declare global {
  namespace System.Reflection {
    type PortableExecutableKinds = import("./PortableExecutableKinds").PortableExecutableKinds;
  }
}

export interface PortableExecutableKindsHostType extends HostType<
  PortableExecutableKinds,
  EnumTypeTrait
> {
  readonly notAPortableExecutableImage: PortableExecutableKinds;
  readonly ilOnly: PortableExecutableKinds;
  readonly required32Bit: PortableExecutableKinds;
  readonly pE32Plus: PortableExecutableKinds;
  readonly unmanaged32Bit: PortableExecutableKinds;
  readonly preferred32Bit: PortableExecutableKinds;
}

export {};
