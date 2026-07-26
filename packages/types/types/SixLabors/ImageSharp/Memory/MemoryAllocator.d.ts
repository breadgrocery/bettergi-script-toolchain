import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Buffers/IMemoryOwner";
import "./AllocationOptions";
import "./MemoryAllocatorOptions";

declare const memoryAllocatorBrand: unique symbol;
export interface MemoryAllocator extends ClrHostValue {
  readonly [memoryAllocatorBrand]: true;
  allocate<T>(
    type1: HostType<T>,
    length: number | StrongNumeric<Int32Host>
  ): System.Buffers.IMemoryOwner<T>;
  allocate<T>(
    type1: HostType<T>,
    length: number | StrongNumeric<Int32Host>,
    options: EnumInput<SixLabors.ImageSharp.Memory.AllocationOptions>
  ): System.Buffers.IMemoryOwner<T>;
  releaseRetainedResources(): VoidResult;
}

declare global {
  namespace SixLabors.ImageSharp.Memory {
    type MemoryAllocator = import("./MemoryAllocator").MemoryAllocator;
  }
}

export interface MemoryAllocatorHostType extends HostType<MemoryAllocator, ReferenceTypeTrait> {
  readonly default: SixLabors.ImageSharp.Memory.MemoryAllocator;
  create(): SixLabors.ImageSharp.Memory.MemoryAllocator;
  create(
    options: SixLabors.ImageSharp.Memory.MemoryAllocatorOptions
  ): SixLabors.ImageSharp.Memory.MemoryAllocator;
}

export {};
