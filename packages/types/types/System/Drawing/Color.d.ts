import "./KnownColor";

declare global {
  namespace System.Drawing {
    class Color {
      r(): number;

      g(): number;

      b(): number;

      a(): number;

      isKnownColor: boolean;

      isEmpty: boolean;

      isNamedColor: boolean;

      isSystemColor: boolean;

      name: string;

      getBrightness(): number;

      getHue(): number;

      getSaturation(): number;

      toArgb(): number;

      toKnownColor(): System.Drawing.KnownColor;

      equals(other: System.Drawing.Color): boolean;

      static readonly empty: System.Drawing.Color;

      static transparent: System.Drawing.Color;

      static aliceBlue: System.Drawing.Color;

      static antiqueWhite: System.Drawing.Color;

      static aqua: System.Drawing.Color;

      static aquamarine: System.Drawing.Color;

      static azure: System.Drawing.Color;

      static beige: System.Drawing.Color;

      static bisque: System.Drawing.Color;

      static black: System.Drawing.Color;

      static blanchedAlmond: System.Drawing.Color;

      static blue: System.Drawing.Color;

      static blueViolet: System.Drawing.Color;

      static brown: System.Drawing.Color;

      static burlyWood: System.Drawing.Color;

      static cadetBlue: System.Drawing.Color;

      static chartreuse: System.Drawing.Color;

      static chocolate: System.Drawing.Color;

      static coral: System.Drawing.Color;

      static cornflowerBlue: System.Drawing.Color;

      static cornsilk: System.Drawing.Color;

      static crimson: System.Drawing.Color;

      static cyan: System.Drawing.Color;

      static darkBlue: System.Drawing.Color;

      static darkCyan: System.Drawing.Color;

      static darkGoldenrod: System.Drawing.Color;

      static darkGray: System.Drawing.Color;

      static darkGreen: System.Drawing.Color;

      static darkKhaki: System.Drawing.Color;

      static darkMagenta: System.Drawing.Color;

      static darkOliveGreen: System.Drawing.Color;

      static darkOrange: System.Drawing.Color;

      static darkOrchid: System.Drawing.Color;

      static darkRed: System.Drawing.Color;

      static darkSalmon: System.Drawing.Color;

      static darkSeaGreen: System.Drawing.Color;

      static darkSlateBlue: System.Drawing.Color;

      static darkSlateGray: System.Drawing.Color;

      static darkTurquoise: System.Drawing.Color;

      static darkViolet: System.Drawing.Color;

      static deepPink: System.Drawing.Color;

      static deepSkyBlue: System.Drawing.Color;

      static dimGray: System.Drawing.Color;

      static dodgerBlue: System.Drawing.Color;

      static firebrick: System.Drawing.Color;

      static floralWhite: System.Drawing.Color;

      static forestGreen: System.Drawing.Color;

      static fuchsia: System.Drawing.Color;

      static gainsboro: System.Drawing.Color;

      static ghostWhite: System.Drawing.Color;

      static gold: System.Drawing.Color;

      static goldenrod: System.Drawing.Color;

      static gray: System.Drawing.Color;

      static green: System.Drawing.Color;

      static greenYellow: System.Drawing.Color;

      static honeydew: System.Drawing.Color;

      static hotPink: System.Drawing.Color;

      static indianRed: System.Drawing.Color;

      static indigo: System.Drawing.Color;

      static ivory: System.Drawing.Color;

      static khaki: System.Drawing.Color;

      static lavender: System.Drawing.Color;

      static lavenderBlush: System.Drawing.Color;

      static lawnGreen: System.Drawing.Color;

      static lemonChiffon: System.Drawing.Color;

      static lightBlue: System.Drawing.Color;

      static lightCoral: System.Drawing.Color;

      static lightCyan: System.Drawing.Color;

      static lightGoldenrodYellow: System.Drawing.Color;

      static lightGreen: System.Drawing.Color;

      static lightGray: System.Drawing.Color;

      static lightPink: System.Drawing.Color;

      static lightSalmon: System.Drawing.Color;

      static lightSeaGreen: System.Drawing.Color;

      static lightSkyBlue: System.Drawing.Color;

      static lightSlateGray: System.Drawing.Color;

      static lightSteelBlue: System.Drawing.Color;

      static lightYellow: System.Drawing.Color;

      static lime: System.Drawing.Color;

      static limeGreen: System.Drawing.Color;

      static linen: System.Drawing.Color;

      static magenta: System.Drawing.Color;

      static maroon: System.Drawing.Color;

      static mediumAquamarine: System.Drawing.Color;

      static mediumBlue: System.Drawing.Color;

      static mediumOrchid: System.Drawing.Color;

      static mediumPurple: System.Drawing.Color;

      static mediumSeaGreen: System.Drawing.Color;

      static mediumSlateBlue: System.Drawing.Color;

      static mediumSpringGreen: System.Drawing.Color;

      static mediumTurquoise: System.Drawing.Color;

      static mediumVioletRed: System.Drawing.Color;

      static midnightBlue: System.Drawing.Color;

      static mintCream: System.Drawing.Color;

      static mistyRose: System.Drawing.Color;

      static moccasin: System.Drawing.Color;

      static navajoWhite: System.Drawing.Color;

      static navy: System.Drawing.Color;

      static oldLace: System.Drawing.Color;

      static olive: System.Drawing.Color;

      static oliveDrab: System.Drawing.Color;

      static orange: System.Drawing.Color;

      static orangeRed: System.Drawing.Color;

      static orchid: System.Drawing.Color;

      static paleGoldenrod: System.Drawing.Color;

      static paleGreen: System.Drawing.Color;

      static paleTurquoise: System.Drawing.Color;

      static paleVioletRed: System.Drawing.Color;

      static papayaWhip: System.Drawing.Color;

      static peachPuff: System.Drawing.Color;

      static peru: System.Drawing.Color;

      static pink: System.Drawing.Color;

      static plum: System.Drawing.Color;

      static powderBlue: System.Drawing.Color;

      static purple: System.Drawing.Color;

      static rebeccaPurple: System.Drawing.Color;

      static red: System.Drawing.Color;

      static rosyBrown: System.Drawing.Color;

      static royalBlue: System.Drawing.Color;

      static saddleBrown: System.Drawing.Color;

      static salmon: System.Drawing.Color;

      static sandyBrown: System.Drawing.Color;

      static seaGreen: System.Drawing.Color;

      static seaShell: System.Drawing.Color;

      static sienna: System.Drawing.Color;

      static silver: System.Drawing.Color;

      static skyBlue: System.Drawing.Color;

      static slateBlue: System.Drawing.Color;

      static slateGray: System.Drawing.Color;

      static snow: System.Drawing.Color;

      static springGreen: System.Drawing.Color;

      static steelBlue: System.Drawing.Color;

      static tan: System.Drawing.Color;

      static teal: System.Drawing.Color;

      static thistle: System.Drawing.Color;

      static tomato: System.Drawing.Color;

      static turquoise: System.Drawing.Color;

      static violet: System.Drawing.Color;

      static wheat: System.Drawing.Color;

      static white: System.Drawing.Color;

      static whiteSmoke: System.Drawing.Color;

      static yellow: System.Drawing.Color;

      static yellowGreen: System.Drawing.Color;

      static fromArgb(argb: number): System.Drawing.Color;

      static fromArgb(
        alpha: number,
        red: number,
        green: number,
        blue: number
      ): System.Drawing.Color;

      static fromArgb(alpha: number, baseColor: System.Drawing.Color): System.Drawing.Color;

      static fromArgb(red: number, green: number, blue: number): System.Drawing.Color;

      static fromKnownColor(color: System.Drawing.KnownColor): System.Drawing.Color;

      static fromName(name: string): System.Drawing.Color;
    }
  }
}

export {};
