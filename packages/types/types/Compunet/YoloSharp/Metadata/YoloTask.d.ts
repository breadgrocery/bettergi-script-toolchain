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

declare const yoloTaskBrand: unique symbol;
export interface YoloTask extends ClrHostValue {
  readonly [yoloTaskBrand]: true;
}

declare global {
  namespace Compunet.YoloSharp.Metadata {
    type YoloTask = import("./YoloTask").YoloTask;
  }
}

export interface YoloTaskHostType extends HostType<YoloTask, EnumTypeTrait> {
  readonly obb: YoloTask;
  readonly detect: YoloTask;
  readonly segment: YoloTask;
  readonly pose: YoloTask;
  readonly classify: YoloTask;
}

export {};
