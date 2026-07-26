import type { Point2fHostType } from "../types/OpenCvSharp/Point2f";

declare global {
  /**
   * OpenCvSharp 二维浮点坐标 HostType
   * @since 0.44.3
   */
  const Point2f: Point2fHostType;
  type Point2f = OpenCvSharp.Point2f;
}

export {};
