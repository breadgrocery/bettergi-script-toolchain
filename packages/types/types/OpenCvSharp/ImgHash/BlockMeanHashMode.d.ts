import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const blockMeanHashModeBrand: unique symbol;
export interface BlockMeanHashMode extends ClrHostValue {
  readonly [blockMeanHashModeBrand]: true;
}

declare global {
  namespace OpenCvSharp.ImgHash {
    type BlockMeanHashMode = import("./BlockMeanHashMode").BlockMeanHashMode;
  }
}

export interface BlockMeanHashModeHostType extends HostType<BlockMeanHashMode, EnumTypeTrait> {
  readonly mode0: BlockMeanHashMode;
  readonly mode1: BlockMeanHashMode;
}

export {};
