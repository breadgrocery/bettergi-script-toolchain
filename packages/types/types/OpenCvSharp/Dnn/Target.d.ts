import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const targetBrand: unique symbol;
export interface Target extends ClrHostValue {
  readonly [targetBrand]: true;
}

declare global {
  namespace OpenCvSharp.Dnn {
    type Target = import("./Target").Target;
  }
}

export interface TargetHostType extends HostType<Target, EnumTypeTrait> {
  readonly cpu: Target;
  readonly opencl: Target;
  readonly opencL_FP16: Target;
  readonly myriad: Target;
  readonly vulkan: Target;
  readonly fpga: Target;
  readonly cuda: Target;
  readonly cudA_FP16: Target;
  readonly hddl: Target;
}

export {};
