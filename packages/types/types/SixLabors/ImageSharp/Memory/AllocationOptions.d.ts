import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";

declare const allocationOptionsBrand: unique symbol;
export interface AllocationOptions extends ClrHostValue {
  readonly [allocationOptionsBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type AllocationOptions = import("./AllocationOptions").AllocationOptions;
  }
}

export interface AllocationOptionsHostType extends HostType<AllocationOptions, EnumTypeTrait> {
  readonly none: AllocationOptions;
  readonly clean: AllocationOptions;
}

export {};
