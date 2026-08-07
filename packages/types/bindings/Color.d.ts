import type { ColorHostType } from "../types/System/Drawing/Color";

declare global {
  /**
   * System.Drawing 颜色 HostType
   * @since 0.63.0
   */
  const Color: ColorHostType;
  type Color = System.Drawing.Color;
}

export {};
