import type { MatHostType } from "../types/OpenCvSharp/Mat";

declare global {
  /**
   * OpenCvSharp 矩阵 HostType
   * @since 0.43.1
   */
  const Mat: MatHostType;
  type Mat = OpenCvSharp.Mat;
}

export {};
