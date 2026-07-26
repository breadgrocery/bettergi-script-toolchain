import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const copyPixelOperationBrand: unique symbol;
export interface CopyPixelOperation extends ClrHostValue {
  readonly [copyPixelOperationBrand]: true;
}

declare global {
  namespace System.Drawing {
    type CopyPixelOperation = import("./CopyPixelOperation").CopyPixelOperation;
  }
}

export interface CopyPixelOperationHostType extends HostType<CopyPixelOperation, EnumTypeTrait> {
  readonly blackness: CopyPixelOperation;
  readonly captureBlt: CopyPixelOperation;
  readonly destinationInvert: CopyPixelOperation;
  readonly mergeCopy: CopyPixelOperation;
  readonly mergePaint: CopyPixelOperation;
  readonly noMirrorBitmap: CopyPixelOperation;
  readonly notSourceCopy: CopyPixelOperation;
  readonly notSourceErase: CopyPixelOperation;
  readonly patCopy: CopyPixelOperation;
  readonly patInvert: CopyPixelOperation;
  readonly patPaint: CopyPixelOperation;
  readonly sourceAnd: CopyPixelOperation;
  readonly sourceCopy: CopyPixelOperation;
  readonly sourceErase: CopyPixelOperation;
  readonly sourceInvert: CopyPixelOperation;
  readonly sourcePaint: CopyPixelOperation;
  readonly whiteness: CopyPixelOperation;
}

export {};
