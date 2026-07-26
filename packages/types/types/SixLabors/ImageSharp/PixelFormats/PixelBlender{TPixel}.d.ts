import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../Configuration";

declare const pixelBlenderArity1Brand: unique symbol;
export interface _PixelBlenderArity1<TPixel> extends ClrHostValue {
  readonly [pixelBlenderArity1Brand]: true;
  blend(background: TPixel, source: TPixel, amount: number | StrongNumeric<SingleHost>): TPixel;
}

export interface _PixelBlenderArity1HostType<TPixel> extends HostType<
  _PixelBlenderArity1<TPixel>,
  ReferenceTypeTrait
> {}

export type PixelBlenderFamily<T1 = FamilyArgumentOmitted> = _PixelBlenderArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type PixelBlender<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./PixelBlender{TPixel}").PixelBlenderFamily<T1>;
  }
}

export type PixelBlenderHostType<T1> = _PixelBlenderArity1HostType<T1>;

export {};
