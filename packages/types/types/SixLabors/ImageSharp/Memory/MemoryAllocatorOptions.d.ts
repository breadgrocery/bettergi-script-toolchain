import type {
  ClrHostValue,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Nullable";
import "../../../System/ValueType";

declare const memoryAllocatorOptionsBrand: unique symbol;
export interface MemoryAllocatorOptions extends ClrHostValue {
  readonly [memoryAllocatorOptionsBrand]: true;
  maximumPoolSizeMegabytes: number | null;
  allocationLimitMegabytes: number | null;
}

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type MemoryAllocatorOptions = import("./MemoryAllocatorOptions").MemoryAllocatorOptions;
  }
}

export interface MemoryAllocatorOptionsHostType extends HostType<
  MemoryAllocatorOptions,
  ValueTypeTrait
> {}

export {};
