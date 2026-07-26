import type { ImageRegionHostType } from "../types/BetterGenshinImpact/GameTask/Model/Area/ImageRegion";

declare global {
  /**
   * 图像区域 HostType
   * @since 0.43.1
   */
  const ImageRegion: ImageRegionHostType;
  type ImageRegion = BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
}

export {};
