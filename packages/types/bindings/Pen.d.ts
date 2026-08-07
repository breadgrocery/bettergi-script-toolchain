import type { PenHostType } from "../types/System/Drawing/Pen";

declare global {
  /**
   * System.Drawing 画笔 HostType
   * @since 0.63.0
   */
  const Pen: PenHostType;
  type Pen = System.Drawing.Pen;
}

export {};
