import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./IDeepCloneable";
import "./PixelFormats/PixelAlphaCompositionMode";
import "./PixelFormats/PixelColorBlendingMode";

declare const graphicsOptionsBrand: unique symbol;
export interface GraphicsOptions extends ClrHostValue {
  readonly [graphicsOptionsBrand]: true;
  antialias: boolean;
  antialiasSubpixelDepth: number;
  blendPercentage: number;
  colorBlendingMode: SixLabors.ImageSharp.PixelFormats.PixelColorBlendingMode;
  alphaCompositionMode: SixLabors.ImageSharp.PixelFormats.PixelAlphaCompositionMode;
  deepClone(): SixLabors.ImageSharp.GraphicsOptions;
}

declare global {
  namespace SixLabors.ImageSharp {
    type GraphicsOptions = import("./GraphicsOptions").GraphicsOptions;
  }
}

export interface GraphicsOptionsHostType extends HostType<
  GraphicsOptions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): GraphicsOptions;
}

export {};
