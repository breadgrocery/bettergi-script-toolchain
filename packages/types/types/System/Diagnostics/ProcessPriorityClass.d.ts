import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const processPriorityClassBrand: unique symbol;
export interface ProcessPriorityClass extends ClrHostValue {
  readonly [processPriorityClassBrand]: true;
}

declare global {
  namespace System.Diagnostics {
    type ProcessPriorityClass = import("./ProcessPriorityClass").ProcessPriorityClass;
  }
}

export interface ProcessPriorityClassHostType extends HostType<
  ProcessPriorityClass,
  EnumTypeTrait
> {
  readonly normal: ProcessPriorityClass;
  readonly idle: ProcessPriorityClass;
  readonly high: ProcessPriorityClass;
  readonly realTime: ProcessPriorityClass;
  readonly belowNormal: ProcessPriorityClass;
  readonly aboveNormal: ProcessPriorityClass;
}

export {};
