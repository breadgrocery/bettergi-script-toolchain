import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const sampleTypesBrand: unique symbol;
export interface SampleTypes extends ClrHostValue {
  readonly [sampleTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp.ML {
    type SampleTypes = import("./SampleTypes").SampleTypes;
  }
}

export interface SampleTypesHostType extends HostType<SampleTypes, EnumTypeTrait> {
  readonly rowSample: SampleTypes;
  readonly colSample: SampleTypes;
}

export {};
