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

declare const yoloArchitectureBrand: unique symbol;
export interface YoloArchitecture extends ClrHostValue {
  readonly [yoloArchitectureBrand]: true;
}

declare global {
  namespace Compunet.YoloSharp.Metadata {
    type YoloArchitecture = import("./YoloArchitecture").YoloArchitecture;
  }
}

export interface YoloArchitectureHostType extends HostType<YoloArchitecture, EnumTypeTrait> {
  readonly ultralytics: YoloArchitecture;
  readonly yoloV10: YoloArchitecture;
}

export {};
