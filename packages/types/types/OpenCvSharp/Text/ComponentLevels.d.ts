import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const componentLevelsBrand: unique symbol;
export interface ComponentLevels extends ClrHostValue {
  readonly [componentLevelsBrand]: true;
}

declare global {
  namespace OpenCvSharp.Text {
    type ComponentLevels = import("./ComponentLevels").ComponentLevels;
  }
}

export interface ComponentLevelsHostType extends HostType<ComponentLevels, EnumTypeTrait> {
  readonly word: ComponentLevels;
  readonly textLine: ComponentLevels;
}

export {};
