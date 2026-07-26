import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/Security/Cryptography/RandomNumberGenerator";
import "../System/ValueType";
import "./DMatch";
import "./Point";
import "./Point2d";
import "./Point2f";
import "./Point3d";
import "./Point3f";
import "./Point3i";
import "./Rect";
import "./Vec3b";
import "./Vec3d";
import "./Vec3f";
import "./Vec4d";
import "./Vec4f";
import "./Vec6d";
import "./Vec6f";

declare const scalarBrand: unique symbol;
export interface Scalar extends ClrHostValue {
  readonly [scalarBrand]: true;
  val0: number;
  val1: number;
  val2: number;
  val3: number;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<DoubleHost>): number;
  };
  toDouble(): number;
  toDMatch(): OpenCvSharp.DMatch;
  mul(it: OpenCvSharp.Scalar): OpenCvSharp.Scalar;
  mul(it: OpenCvSharp.Scalar, scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Scalar;
  conj(): OpenCvSharp.Scalar;
  isReal(): boolean;
  toVec3b(): OpenCvSharp.Vec3b;
  deconstruct(
    val0: HostVariableOut<number>,
    val1: HostVariableOut<number>,
    val2: HostVariableOut<number>,
    val3: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Scalar): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Scalar = import("./Scalar").Scalar;
  }
}

export interface ScalarHostType extends HostType<Scalar, ValueTypeTrait> {
  new (
    val0: number | StrongNumeric<DoubleHost>,
    val1: number | StrongNumeric<DoubleHost>,
    val2: number | StrongNumeric<DoubleHost>,
    val3: number | StrongNumeric<DoubleHost>
  ): Scalar;
  new (val0: number | StrongNumeric<DoubleHost>): Scalar;
  new (val0: number | StrongNumeric<DoubleHost>, val1: number | StrongNumeric<DoubleHost>): Scalar;
  new (
    val0: number | StrongNumeric<DoubleHost>,
    val1: number | StrongNumeric<DoubleHost>,
    val2: number | StrongNumeric<DoubleHost>
  ): Scalar;
  readonly aliceBlue: OpenCvSharp.Scalar;
  readonly antiqueWhite: OpenCvSharp.Scalar;
  readonly aqua: OpenCvSharp.Scalar;
  readonly aquamarine: OpenCvSharp.Scalar;
  readonly azure: OpenCvSharp.Scalar;
  readonly beige: OpenCvSharp.Scalar;
  readonly bisque: OpenCvSharp.Scalar;
  readonly black: OpenCvSharp.Scalar;
  readonly blanchedAlmond: OpenCvSharp.Scalar;
  readonly blue: OpenCvSharp.Scalar;
  readonly blueViolet: OpenCvSharp.Scalar;
  readonly brown: OpenCvSharp.Scalar;
  readonly burlyWood: OpenCvSharp.Scalar;
  readonly cadetBlue: OpenCvSharp.Scalar;
  readonly chartreuse: OpenCvSharp.Scalar;
  readonly chocolate: OpenCvSharp.Scalar;
  readonly coral: OpenCvSharp.Scalar;
  readonly cornflowerBlue: OpenCvSharp.Scalar;
  readonly cornsilk: OpenCvSharp.Scalar;
  readonly crimson: OpenCvSharp.Scalar;
  readonly cyan: OpenCvSharp.Scalar;
  readonly darkBlue: OpenCvSharp.Scalar;
  readonly darkCyan: OpenCvSharp.Scalar;
  readonly darkGoldenrod: OpenCvSharp.Scalar;
  readonly darkGray: OpenCvSharp.Scalar;
  readonly darkGreen: OpenCvSharp.Scalar;
  readonly darkKhaki: OpenCvSharp.Scalar;
  readonly darkMagenta: OpenCvSharp.Scalar;
  readonly darkOliveGreen: OpenCvSharp.Scalar;
  readonly darkOrange: OpenCvSharp.Scalar;
  readonly darkOrchid: OpenCvSharp.Scalar;
  readonly darkRed: OpenCvSharp.Scalar;
  readonly darkSalmon: OpenCvSharp.Scalar;
  readonly darkSeaGreen: OpenCvSharp.Scalar;
  readonly darkSlateBlue: OpenCvSharp.Scalar;
  readonly darkSlateGray: OpenCvSharp.Scalar;
  readonly darkTurquoise: OpenCvSharp.Scalar;
  readonly darkViolet: OpenCvSharp.Scalar;
  readonly deepPink: OpenCvSharp.Scalar;
  readonly deepSkyBlue: OpenCvSharp.Scalar;
  readonly dimGray: OpenCvSharp.Scalar;
  readonly dodgerBlue: OpenCvSharp.Scalar;
  readonly firebrick: OpenCvSharp.Scalar;
  readonly floralWhite: OpenCvSharp.Scalar;
  readonly forestGreen: OpenCvSharp.Scalar;
  readonly fuchsia: OpenCvSharp.Scalar;
  readonly gainsboro: OpenCvSharp.Scalar;
  readonly ghostWhite: OpenCvSharp.Scalar;
  readonly gold: OpenCvSharp.Scalar;
  readonly goldenrod: OpenCvSharp.Scalar;
  readonly gray: OpenCvSharp.Scalar;
  readonly green: OpenCvSharp.Scalar;
  readonly greenYellow: OpenCvSharp.Scalar;
  readonly honeydew: OpenCvSharp.Scalar;
  readonly hotPink: OpenCvSharp.Scalar;
  readonly indianRed: OpenCvSharp.Scalar;
  readonly indigo: OpenCvSharp.Scalar;
  readonly ivory: OpenCvSharp.Scalar;
  readonly khaki: OpenCvSharp.Scalar;
  readonly lavender: OpenCvSharp.Scalar;
  readonly lavenderBlush: OpenCvSharp.Scalar;
  readonly lawnGreen: OpenCvSharp.Scalar;
  readonly lemonChiffon: OpenCvSharp.Scalar;
  readonly lightBlue: OpenCvSharp.Scalar;
  readonly lightCoral: OpenCvSharp.Scalar;
  readonly lightCyan: OpenCvSharp.Scalar;
  readonly lightGoldenrodYellow: OpenCvSharp.Scalar;
  readonly lightGray: OpenCvSharp.Scalar;
  readonly lightGreen: OpenCvSharp.Scalar;
  readonly lightPink: OpenCvSharp.Scalar;
  readonly lightSalmon: OpenCvSharp.Scalar;
  readonly lightSeaGreen: OpenCvSharp.Scalar;
  readonly lightSkyBlue: OpenCvSharp.Scalar;
  readonly lightSlateGray: OpenCvSharp.Scalar;
  readonly lightSteelBlue: OpenCvSharp.Scalar;
  readonly lightYellow: OpenCvSharp.Scalar;
  readonly lime: OpenCvSharp.Scalar;
  readonly limeGreen: OpenCvSharp.Scalar;
  readonly linen: OpenCvSharp.Scalar;
  readonly magenta: OpenCvSharp.Scalar;
  readonly maroon: OpenCvSharp.Scalar;
  readonly mediumAquamarine: OpenCvSharp.Scalar;
  readonly mediumBlue: OpenCvSharp.Scalar;
  readonly mediumOrchid: OpenCvSharp.Scalar;
  readonly mediumPurple: OpenCvSharp.Scalar;
  readonly mediumSeaGreen: OpenCvSharp.Scalar;
  readonly mediumSlateBlue: OpenCvSharp.Scalar;
  readonly mediumSpringGreen: OpenCvSharp.Scalar;
  readonly mediumTurquoise: OpenCvSharp.Scalar;
  readonly mediumVioletRed: OpenCvSharp.Scalar;
  readonly midnightBlue: OpenCvSharp.Scalar;
  readonly mintCream: OpenCvSharp.Scalar;
  readonly mistyRose: OpenCvSharp.Scalar;
  readonly moccasin: OpenCvSharp.Scalar;
  readonly navajoWhite: OpenCvSharp.Scalar;
  readonly navy: OpenCvSharp.Scalar;
  readonly oldLace: OpenCvSharp.Scalar;
  readonly olive: OpenCvSharp.Scalar;
  readonly oliveDrab: OpenCvSharp.Scalar;
  readonly orange: OpenCvSharp.Scalar;
  readonly orangeRed: OpenCvSharp.Scalar;
  readonly orchid: OpenCvSharp.Scalar;
  readonly paleGoldenrod: OpenCvSharp.Scalar;
  readonly paleGreen: OpenCvSharp.Scalar;
  readonly paleTurquoise: OpenCvSharp.Scalar;
  readonly paleVioletRed: OpenCvSharp.Scalar;
  readonly papayaWhip: OpenCvSharp.Scalar;
  readonly peachPuff: OpenCvSharp.Scalar;
  readonly peru: OpenCvSharp.Scalar;
  readonly pink: OpenCvSharp.Scalar;
  readonly plum: OpenCvSharp.Scalar;
  readonly powderBlue: OpenCvSharp.Scalar;
  readonly purple: OpenCvSharp.Scalar;
  readonly red: OpenCvSharp.Scalar;
  readonly rosyBrown: OpenCvSharp.Scalar;
  readonly royalBlue: OpenCvSharp.Scalar;
  readonly saddleBrown: OpenCvSharp.Scalar;
  readonly salmon: OpenCvSharp.Scalar;
  readonly sandyBrown: OpenCvSharp.Scalar;
  readonly seaGreen: OpenCvSharp.Scalar;
  readonly seaShell: OpenCvSharp.Scalar;
  readonly sienna: OpenCvSharp.Scalar;
  readonly silver: OpenCvSharp.Scalar;
  readonly skyBlue: OpenCvSharp.Scalar;
  readonly slateBlue: OpenCvSharp.Scalar;
  readonly slateGray: OpenCvSharp.Scalar;
  readonly snow: OpenCvSharp.Scalar;
  readonly springGreen: OpenCvSharp.Scalar;
  readonly steelBlue: OpenCvSharp.Scalar;
  readonly tan: OpenCvSharp.Scalar;
  readonly teal: OpenCvSharp.Scalar;
  readonly thistle: OpenCvSharp.Scalar;
  readonly tomato: OpenCvSharp.Scalar;
  readonly turquoise: OpenCvSharp.Scalar;
  readonly violet: OpenCvSharp.Scalar;
  readonly wheat: OpenCvSharp.Scalar;
  readonly white: OpenCvSharp.Scalar;
  readonly whiteSmoke: OpenCvSharp.Scalar;
  readonly yellow: OpenCvSharp.Scalar;
  readonly yellowGreen: OpenCvSharp.Scalar;
  fromRgb(
    r: number | StrongNumeric<Int32Host>,
    g: number | StrongNumeric<Int32Host>,
    b: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Scalar;
  randomColor(): OpenCvSharp.Scalar;
  randomColor(rng: System.Security.Cryptography.RandomNumberGenerator): OpenCvSharp.Scalar;
  fromDouble(val: number | StrongNumeric<DoubleHost>): OpenCvSharp.Scalar;
  fromDMatch(d: OpenCvSharp.DMatch): OpenCvSharp.Scalar;
  fromVec3b(v: OpenCvSharp.Vec3b): OpenCvSharp.Scalar;
  fromVec3f(v: OpenCvSharp.Vec3f): OpenCvSharp.Scalar;
  fromVec4f(v: OpenCvSharp.Vec4f): OpenCvSharp.Scalar;
  fromVec6f(v: OpenCvSharp.Vec6f): OpenCvSharp.Scalar;
  fromVec3d(v: OpenCvSharp.Vec3d): OpenCvSharp.Scalar;
  fromVec4d(v: OpenCvSharp.Vec4d): OpenCvSharp.Scalar;
  fromVec6d(v: OpenCvSharp.Vec6d): OpenCvSharp.Scalar;
  fromPoint(p: OpenCvSharp.Point): OpenCvSharp.Scalar;
  fromPoint2f(p: OpenCvSharp.Point2f): OpenCvSharp.Scalar;
  fromPoint2d(p: OpenCvSharp.Point2d): OpenCvSharp.Scalar;
  fromPoint3i(p: OpenCvSharp.Point3i): OpenCvSharp.Scalar;
  fromPoint3f(p: OpenCvSharp.Point3f): OpenCvSharp.Scalar;
  fromPoint3d(p: OpenCvSharp.Point3d): OpenCvSharp.Scalar;
  fromRect(p: OpenCvSharp.Rect): OpenCvSharp.Scalar;
  all(v: number | StrongNumeric<DoubleHost>): OpenCvSharp.Scalar;
}

export {};
