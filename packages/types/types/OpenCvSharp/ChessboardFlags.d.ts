import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const chessboardFlagsBrand: unique symbol;
export interface ChessboardFlags extends ClrHostValue {
  readonly [chessboardFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ChessboardFlags = import("./ChessboardFlags").ChessboardFlags;
  }
}

export interface ChessboardFlagsHostType extends HostType<ChessboardFlags, EnumTypeTrait> {
  readonly none: ChessboardFlags;
  readonly adaptiveThresh: ChessboardFlags;
  readonly normalizeImage: ChessboardFlags;
  readonly filterQuads: ChessboardFlags;
  readonly fastCheck: ChessboardFlags;
  readonly exhaustive: ChessboardFlags;
  readonly accuracy: ChessboardFlags;
}

export {};
