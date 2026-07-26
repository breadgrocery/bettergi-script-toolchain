import type {
  ByteHost,
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import "../../System/IEquatable";
import "../../System/Numerics/Vector4";
import "../../System/ReadOnlyMemory";
import "../../System/ValueType";
import "./PixelFormats/Abgr32";
import "./PixelFormats/Argb32";
import "./PixelFormats/Bgr24";
import "./PixelFormats/Bgra32";
import "./PixelFormats/L16";
import "./PixelFormats/La32";
import "./PixelFormats/Rgb24";
import "./PixelFormats/Rgb48";
import "./PixelFormats/Rgba32";
import "./PixelFormats/Rgba64";

declare const colorBrand: unique symbol;
export interface Color extends ClrHostValue {
  readonly [colorBrand]: true;
  withAlpha(alpha: number | StrongNumeric<SingleHost>): SixLabors.ImageSharp.Color;
  toHex(): string;
  toString(): string;
  toPixel<TPixel>(type1: HostType<TPixel>): TPixel;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Color): boolean;
  getHashCode(): number;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Color = import("./Color").Color;
  }
}

export interface ColorHostType extends HostType<Color, ValueTypeTrait> {
  new (pixel: SixLabors.ImageSharp.PixelFormats.Rgba64): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Rgb48): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.La32): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.L16): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Rgba32): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Argb32): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Bgra32): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Abgr32): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Rgb24): Color;
  new (pixel: SixLabors.ImageSharp.PixelFormats.Bgr24): Color;
  new (vector: System.Numerics.Vector4): Color;
  readonly aliceBlue: SixLabors.ImageSharp.Color;
  readonly antiqueWhite: SixLabors.ImageSharp.Color;
  readonly aqua: SixLabors.ImageSharp.Color;
  readonly aquamarine: SixLabors.ImageSharp.Color;
  readonly azure: SixLabors.ImageSharp.Color;
  readonly beige: SixLabors.ImageSharp.Color;
  readonly bisque: SixLabors.ImageSharp.Color;
  readonly black: SixLabors.ImageSharp.Color;
  readonly blanchedAlmond: SixLabors.ImageSharp.Color;
  readonly blue: SixLabors.ImageSharp.Color;
  readonly blueViolet: SixLabors.ImageSharp.Color;
  readonly brown: SixLabors.ImageSharp.Color;
  readonly burlyWood: SixLabors.ImageSharp.Color;
  readonly cadetBlue: SixLabors.ImageSharp.Color;
  readonly chartreuse: SixLabors.ImageSharp.Color;
  readonly chocolate: SixLabors.ImageSharp.Color;
  readonly coral: SixLabors.ImageSharp.Color;
  readonly cornflowerBlue: SixLabors.ImageSharp.Color;
  readonly cornsilk: SixLabors.ImageSharp.Color;
  readonly crimson: SixLabors.ImageSharp.Color;
  readonly cyan: SixLabors.ImageSharp.Color;
  readonly darkBlue: SixLabors.ImageSharp.Color;
  readonly darkCyan: SixLabors.ImageSharp.Color;
  readonly darkGoldenrod: SixLabors.ImageSharp.Color;
  readonly darkGray: SixLabors.ImageSharp.Color;
  readonly darkGreen: SixLabors.ImageSharp.Color;
  readonly darkGrey: SixLabors.ImageSharp.Color;
  readonly darkKhaki: SixLabors.ImageSharp.Color;
  readonly darkMagenta: SixLabors.ImageSharp.Color;
  readonly darkOliveGreen: SixLabors.ImageSharp.Color;
  readonly darkOrange: SixLabors.ImageSharp.Color;
  readonly darkOrchid: SixLabors.ImageSharp.Color;
  readonly darkRed: SixLabors.ImageSharp.Color;
  readonly darkSalmon: SixLabors.ImageSharp.Color;
  readonly darkSeaGreen: SixLabors.ImageSharp.Color;
  readonly darkSlateBlue: SixLabors.ImageSharp.Color;
  readonly darkSlateGray: SixLabors.ImageSharp.Color;
  readonly darkSlateGrey: SixLabors.ImageSharp.Color;
  readonly darkTurquoise: SixLabors.ImageSharp.Color;
  readonly darkViolet: SixLabors.ImageSharp.Color;
  readonly deepPink: SixLabors.ImageSharp.Color;
  readonly deepSkyBlue: SixLabors.ImageSharp.Color;
  readonly dimGray: SixLabors.ImageSharp.Color;
  readonly dimGrey: SixLabors.ImageSharp.Color;
  readonly dodgerBlue: SixLabors.ImageSharp.Color;
  readonly firebrick: SixLabors.ImageSharp.Color;
  readonly floralWhite: SixLabors.ImageSharp.Color;
  readonly forestGreen: SixLabors.ImageSharp.Color;
  readonly fuchsia: SixLabors.ImageSharp.Color;
  readonly gainsboro: SixLabors.ImageSharp.Color;
  readonly ghostWhite: SixLabors.ImageSharp.Color;
  readonly gold: SixLabors.ImageSharp.Color;
  readonly goldenrod: SixLabors.ImageSharp.Color;
  readonly gray: SixLabors.ImageSharp.Color;
  readonly green: SixLabors.ImageSharp.Color;
  readonly greenYellow: SixLabors.ImageSharp.Color;
  readonly grey: SixLabors.ImageSharp.Color;
  readonly honeydew: SixLabors.ImageSharp.Color;
  readonly hotPink: SixLabors.ImageSharp.Color;
  readonly indianRed: SixLabors.ImageSharp.Color;
  readonly indigo: SixLabors.ImageSharp.Color;
  readonly ivory: SixLabors.ImageSharp.Color;
  readonly khaki: SixLabors.ImageSharp.Color;
  readonly lavender: SixLabors.ImageSharp.Color;
  readonly lavenderBlush: SixLabors.ImageSharp.Color;
  readonly lawnGreen: SixLabors.ImageSharp.Color;
  readonly lemonChiffon: SixLabors.ImageSharp.Color;
  readonly lightBlue: SixLabors.ImageSharp.Color;
  readonly lightCoral: SixLabors.ImageSharp.Color;
  readonly lightCyan: SixLabors.ImageSharp.Color;
  readonly lightGoldenrodYellow: SixLabors.ImageSharp.Color;
  readonly lightGray: SixLabors.ImageSharp.Color;
  readonly lightGreen: SixLabors.ImageSharp.Color;
  readonly lightGrey: SixLabors.ImageSharp.Color;
  readonly lightPink: SixLabors.ImageSharp.Color;
  readonly lightSalmon: SixLabors.ImageSharp.Color;
  readonly lightSeaGreen: SixLabors.ImageSharp.Color;
  readonly lightSkyBlue: SixLabors.ImageSharp.Color;
  readonly lightSlateGray: SixLabors.ImageSharp.Color;
  readonly lightSlateGrey: SixLabors.ImageSharp.Color;
  readonly lightSteelBlue: SixLabors.ImageSharp.Color;
  readonly lightYellow: SixLabors.ImageSharp.Color;
  readonly lime: SixLabors.ImageSharp.Color;
  readonly limeGreen: SixLabors.ImageSharp.Color;
  readonly linen: SixLabors.ImageSharp.Color;
  readonly magenta: SixLabors.ImageSharp.Color;
  readonly maroon: SixLabors.ImageSharp.Color;
  readonly mediumAquamarine: SixLabors.ImageSharp.Color;
  readonly mediumBlue: SixLabors.ImageSharp.Color;
  readonly mediumOrchid: SixLabors.ImageSharp.Color;
  readonly mediumPurple: SixLabors.ImageSharp.Color;
  readonly mediumSeaGreen: SixLabors.ImageSharp.Color;
  readonly mediumSlateBlue: SixLabors.ImageSharp.Color;
  readonly mediumSpringGreen: SixLabors.ImageSharp.Color;
  readonly mediumTurquoise: SixLabors.ImageSharp.Color;
  readonly mediumVioletRed: SixLabors.ImageSharp.Color;
  readonly midnightBlue: SixLabors.ImageSharp.Color;
  readonly mintCream: SixLabors.ImageSharp.Color;
  readonly mistyRose: SixLabors.ImageSharp.Color;
  readonly moccasin: SixLabors.ImageSharp.Color;
  readonly navajoWhite: SixLabors.ImageSharp.Color;
  readonly navy: SixLabors.ImageSharp.Color;
  readonly oldLace: SixLabors.ImageSharp.Color;
  readonly olive: SixLabors.ImageSharp.Color;
  readonly oliveDrab: SixLabors.ImageSharp.Color;
  readonly orange: SixLabors.ImageSharp.Color;
  readonly orangeRed: SixLabors.ImageSharp.Color;
  readonly orchid: SixLabors.ImageSharp.Color;
  readonly paleGoldenrod: SixLabors.ImageSharp.Color;
  readonly paleGreen: SixLabors.ImageSharp.Color;
  readonly paleTurquoise: SixLabors.ImageSharp.Color;
  readonly paleVioletRed: SixLabors.ImageSharp.Color;
  readonly papayaWhip: SixLabors.ImageSharp.Color;
  readonly peachPuff: SixLabors.ImageSharp.Color;
  readonly peru: SixLabors.ImageSharp.Color;
  readonly pink: SixLabors.ImageSharp.Color;
  readonly plum: SixLabors.ImageSharp.Color;
  readonly powderBlue: SixLabors.ImageSharp.Color;
  readonly purple: SixLabors.ImageSharp.Color;
  readonly rebeccaPurple: SixLabors.ImageSharp.Color;
  readonly red: SixLabors.ImageSharp.Color;
  readonly rosyBrown: SixLabors.ImageSharp.Color;
  readonly royalBlue: SixLabors.ImageSharp.Color;
  readonly saddleBrown: SixLabors.ImageSharp.Color;
  readonly salmon: SixLabors.ImageSharp.Color;
  readonly sandyBrown: SixLabors.ImageSharp.Color;
  readonly seaGreen: SixLabors.ImageSharp.Color;
  readonly seaShell: SixLabors.ImageSharp.Color;
  readonly sienna: SixLabors.ImageSharp.Color;
  readonly silver: SixLabors.ImageSharp.Color;
  readonly skyBlue: SixLabors.ImageSharp.Color;
  readonly slateBlue: SixLabors.ImageSharp.Color;
  readonly slateGray: SixLabors.ImageSharp.Color;
  readonly slateGrey: SixLabors.ImageSharp.Color;
  readonly snow: SixLabors.ImageSharp.Color;
  readonly springGreen: SixLabors.ImageSharp.Color;
  readonly steelBlue: SixLabors.ImageSharp.Color;
  readonly tan: SixLabors.ImageSharp.Color;
  readonly teal: SixLabors.ImageSharp.Color;
  readonly thistle: SixLabors.ImageSharp.Color;
  readonly tomato: SixLabors.ImageSharp.Color;
  readonly transparent: SixLabors.ImageSharp.Color;
  readonly turquoise: SixLabors.ImageSharp.Color;
  readonly violet: SixLabors.ImageSharp.Color;
  readonly wheat: SixLabors.ImageSharp.Color;
  readonly white: SixLabors.ImageSharp.Color;
  readonly whiteSmoke: SixLabors.ImageSharp.Color;
  readonly yellow: SixLabors.ImageSharp.Color;
  readonly yellowGreen: SixLabors.ImageSharp.Color;
  readonly webSafePalette: System.ReadOnlyMemory<SixLabors.ImageSharp.Color>;
  readonly wernerPalette: System.ReadOnlyMemory<SixLabors.ImageSharp.Color>;
  fromRgba(
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>,
    a: number | StrongNumeric<ByteHost>
  ): SixLabors.ImageSharp.Color;
  fromRgb(
    r: number | StrongNumeric<ByteHost>,
    g: number | StrongNumeric<ByteHost>,
    b: number | StrongNumeric<ByteHost>
  ): SixLabors.ImageSharp.Color;
  fromPixel<TPixel>(type1: HostType<TPixel>, pixel: TPixel): SixLabors.ImageSharp.Color;
  parseHex(hex: string): SixLabors.ImageSharp.Color;
  tryParseHex(hex: string, result: HostVariableOut<SixLabors.ImageSharp.Color>): boolean;
  parse(input: string): SixLabors.ImageSharp.Color;
  tryParse(input: string, result: HostVariableOut<SixLabors.ImageSharp.Color>): boolean;
}

export {};
