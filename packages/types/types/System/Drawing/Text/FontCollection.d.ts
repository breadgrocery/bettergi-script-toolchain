import type {
  ClrHostValue,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../FontFamily";

declare const fontCollectionBrand: unique symbol;
export interface FontCollection extends ClrHostValue, System.IDisposableInput {
  readonly [fontCollectionBrand]: true;
  dispose(): VoidResult;
  readonly families: HostArray<System.Drawing.FontFamily>;
}

declare global {
  namespace System.Drawing.Text {
    type FontCollection = import("./FontCollection").FontCollection;
  }
}

export interface FontCollectionHostType extends HostType<FontCollection, ReferenceTypeTrait> {}

export {};
