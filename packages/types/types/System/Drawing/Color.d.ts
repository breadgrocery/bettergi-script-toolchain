import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";
import "./KnownColor";

declare const colorBrand: unique symbol;
export interface Color extends ClrHostValue {
  readonly [colorBrand]: true;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.Color): boolean;
  getHashCode(): number;
  getBrightness(): number;
  getHue(): number;
  getSaturation(): number;
  readonly a: number;
  readonly b: number;
  readonly g: number;
  readonly isEmpty: boolean;
  readonly isKnownColor: boolean;
  readonly isNamedColor: boolean;
  readonly isSystemColor: boolean;
  readonly name: string;
  readonly r: number;
  toArgb(): number;
  toKnownColor(): System.Drawing.KnownColor;
}

declare global {
  namespace System.Drawing {
    type Color = import("./Color").Color;
  }
}

export interface ColorHostType extends HostType<Color, ValueTypeTrait> {
  readonly empty: System.Drawing.Color;
  readonly transparent: System.Drawing.Color;
  readonly aliceBlue: System.Drawing.Color;
  readonly antiqueWhite: System.Drawing.Color;
  readonly aqua: System.Drawing.Color;
  readonly aquamarine: System.Drawing.Color;
  readonly azure: System.Drawing.Color;
  readonly beige: System.Drawing.Color;
  readonly bisque: System.Drawing.Color;
  readonly black: System.Drawing.Color;
  readonly blanchedAlmond: System.Drawing.Color;
  readonly blue: System.Drawing.Color;
  readonly blueViolet: System.Drawing.Color;
  readonly brown: System.Drawing.Color;
  readonly burlyWood: System.Drawing.Color;
  readonly cadetBlue: System.Drawing.Color;
  readonly chartreuse: System.Drawing.Color;
  readonly chocolate: System.Drawing.Color;
  readonly coral: System.Drawing.Color;
  readonly cornflowerBlue: System.Drawing.Color;
  readonly cornsilk: System.Drawing.Color;
  readonly crimson: System.Drawing.Color;
  readonly cyan: System.Drawing.Color;
  readonly darkBlue: System.Drawing.Color;
  readonly darkCyan: System.Drawing.Color;
  readonly darkGoldenrod: System.Drawing.Color;
  readonly darkGray: System.Drawing.Color;
  readonly darkGreen: System.Drawing.Color;
  readonly darkKhaki: System.Drawing.Color;
  readonly darkMagenta: System.Drawing.Color;
  readonly darkOliveGreen: System.Drawing.Color;
  readonly darkOrange: System.Drawing.Color;
  readonly darkOrchid: System.Drawing.Color;
  readonly darkRed: System.Drawing.Color;
  readonly darkSalmon: System.Drawing.Color;
  readonly darkSeaGreen: System.Drawing.Color;
  readonly darkSlateBlue: System.Drawing.Color;
  readonly darkSlateGray: System.Drawing.Color;
  readonly darkTurquoise: System.Drawing.Color;
  readonly darkViolet: System.Drawing.Color;
  readonly deepPink: System.Drawing.Color;
  readonly deepSkyBlue: System.Drawing.Color;
  readonly dimGray: System.Drawing.Color;
  readonly dodgerBlue: System.Drawing.Color;
  readonly firebrick: System.Drawing.Color;
  readonly floralWhite: System.Drawing.Color;
  readonly forestGreen: System.Drawing.Color;
  readonly fuchsia: System.Drawing.Color;
  readonly gainsboro: System.Drawing.Color;
  readonly ghostWhite: System.Drawing.Color;
  readonly gold: System.Drawing.Color;
  readonly goldenrod: System.Drawing.Color;
  readonly gray: System.Drawing.Color;
  readonly green: System.Drawing.Color;
  readonly greenYellow: System.Drawing.Color;
  readonly honeydew: System.Drawing.Color;
  readonly hotPink: System.Drawing.Color;
  readonly indianRed: System.Drawing.Color;
  readonly indigo: System.Drawing.Color;
  readonly ivory: System.Drawing.Color;
  readonly khaki: System.Drawing.Color;
  readonly lavender: System.Drawing.Color;
  readonly lavenderBlush: System.Drawing.Color;
  readonly lawnGreen: System.Drawing.Color;
  readonly lemonChiffon: System.Drawing.Color;
  readonly lightBlue: System.Drawing.Color;
  readonly lightCoral: System.Drawing.Color;
  readonly lightCyan: System.Drawing.Color;
  readonly lightGoldenrodYellow: System.Drawing.Color;
  readonly lightGreen: System.Drawing.Color;
  readonly lightGray: System.Drawing.Color;
  readonly lightPink: System.Drawing.Color;
  readonly lightSalmon: System.Drawing.Color;
  readonly lightSeaGreen: System.Drawing.Color;
  readonly lightSkyBlue: System.Drawing.Color;
  readonly lightSlateGray: System.Drawing.Color;
  readonly lightSteelBlue: System.Drawing.Color;
  readonly lightYellow: System.Drawing.Color;
  readonly lime: System.Drawing.Color;
  readonly limeGreen: System.Drawing.Color;
  readonly linen: System.Drawing.Color;
  readonly magenta: System.Drawing.Color;
  readonly maroon: System.Drawing.Color;
  readonly mediumAquamarine: System.Drawing.Color;
  readonly mediumBlue: System.Drawing.Color;
  readonly mediumOrchid: System.Drawing.Color;
  readonly mediumPurple: System.Drawing.Color;
  readonly mediumSeaGreen: System.Drawing.Color;
  readonly mediumSlateBlue: System.Drawing.Color;
  readonly mediumSpringGreen: System.Drawing.Color;
  readonly mediumTurquoise: System.Drawing.Color;
  readonly mediumVioletRed: System.Drawing.Color;
  readonly midnightBlue: System.Drawing.Color;
  readonly mintCream: System.Drawing.Color;
  readonly mistyRose: System.Drawing.Color;
  readonly moccasin: System.Drawing.Color;
  readonly navajoWhite: System.Drawing.Color;
  readonly navy: System.Drawing.Color;
  readonly oldLace: System.Drawing.Color;
  readonly olive: System.Drawing.Color;
  readonly oliveDrab: System.Drawing.Color;
  readonly orange: System.Drawing.Color;
  readonly orangeRed: System.Drawing.Color;
  readonly orchid: System.Drawing.Color;
  readonly paleGoldenrod: System.Drawing.Color;
  readonly paleGreen: System.Drawing.Color;
  readonly paleTurquoise: System.Drawing.Color;
  readonly paleVioletRed: System.Drawing.Color;
  readonly papayaWhip: System.Drawing.Color;
  readonly peachPuff: System.Drawing.Color;
  readonly peru: System.Drawing.Color;
  readonly pink: System.Drawing.Color;
  readonly plum: System.Drawing.Color;
  readonly powderBlue: System.Drawing.Color;
  readonly purple: System.Drawing.Color;
  readonly rebeccaPurple: System.Drawing.Color;
  readonly red: System.Drawing.Color;
  readonly rosyBrown: System.Drawing.Color;
  readonly royalBlue: System.Drawing.Color;
  readonly saddleBrown: System.Drawing.Color;
  readonly salmon: System.Drawing.Color;
  readonly sandyBrown: System.Drawing.Color;
  readonly seaGreen: System.Drawing.Color;
  readonly seaShell: System.Drawing.Color;
  readonly sienna: System.Drawing.Color;
  readonly silver: System.Drawing.Color;
  readonly skyBlue: System.Drawing.Color;
  readonly slateBlue: System.Drawing.Color;
  readonly slateGray: System.Drawing.Color;
  readonly snow: System.Drawing.Color;
  readonly springGreen: System.Drawing.Color;
  readonly steelBlue: System.Drawing.Color;
  readonly tan: System.Drawing.Color;
  readonly teal: System.Drawing.Color;
  readonly thistle: System.Drawing.Color;
  readonly tomato: System.Drawing.Color;
  readonly turquoise: System.Drawing.Color;
  readonly violet: System.Drawing.Color;
  readonly wheat: System.Drawing.Color;
  readonly white: System.Drawing.Color;
  readonly whiteSmoke: System.Drawing.Color;
  readonly yellow: System.Drawing.Color;
  readonly yellowGreen: System.Drawing.Color;
  fromArgb(argb: number | StrongNumeric<Int32Host>): System.Drawing.Color;
  fromArgb(
    alpha: number | StrongNumeric<Int32Host>,
    red: number | StrongNumeric<Int32Host>,
    green: number | StrongNumeric<Int32Host>,
    blue: number | StrongNumeric<Int32Host>
  ): System.Drawing.Color;
  fromArgb(
    alpha: number | StrongNumeric<Int32Host>,
    baseColor: System.Drawing.Color
  ): System.Drawing.Color;
  fromArgb(
    red: number | StrongNumeric<Int32Host>,
    green: number | StrongNumeric<Int32Host>,
    blue: number | StrongNumeric<Int32Host>
  ): System.Drawing.Color;
  fromKnownColor(color: EnumInput<System.Drawing.KnownColor>): System.Drawing.Color;
  fromName(name: string): System.Drawing.Color;
}

export {};
