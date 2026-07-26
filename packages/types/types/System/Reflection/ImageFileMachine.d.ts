import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const imageFileMachineBrand: unique symbol;
export interface ImageFileMachine extends ClrHostValue {
  readonly [imageFileMachineBrand]: true;
}

declare global {
  namespace System.Reflection {
    type ImageFileMachine = import("./ImageFileMachine").ImageFileMachine;
  }
}

export interface ImageFileMachineHostType extends HostType<ImageFileMachine, EnumTypeTrait> {
  readonly i386: ImageFileMachine;
  readonly iA64: ImageFileMachine;
  readonly amD64: ImageFileMachine;
  readonly arm: ImageFileMachine;
}

export {};
