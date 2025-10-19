import "@/csharp/BetterGenshinImpact/Core/Recognition/RecognitionObject";
import "@/csharp/BetterGenshinImpact/GameTask/Model/Area/Converter/INodeConverter";
import "@/csharp/BetterGenshinImpact/GameTask/Model/Area/Region";
import "@/csharp/BetterGenshinImpact/View/Drawable/DrawContent";
import "@/csharp/SixLabors/ImageSharp/Image";
import "@/csharp/System/Collections/Generic/List";
import { Mat, Rect } from "mirada/dist/src/types/opencv";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    class ImageRegion extends Region {
      srcMat: Mat;

      cacheGreyMat: Mat;

      cacheImage: SixLabors.ImageSharp.Image;

      deriveCrop(x: number, y: number, w: number, h: number): ImageRegion;

      deriveCrop(rect: Rect): ImageRegion;

      /**
       * 在本区域内查找最优识别对象
       * @param ro 识别对象
       * @param successAction 识别成功回调
       * @param failAction 识别失败回调
       */
      find: (
        ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
        successAction?: (region: Region) => void,
        failAction?: () => void
      ) => Region;

      /**
       * 在本区域内查找识别对象，返回所有找到的结果
       * @param ro 识别对象
       * @param successAction  识别成功回调
       * @param failAction  识别失败回调
       * @returns
       */
      findMulti: (
        ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
        successAction?: (regions: System.Collections.Generic.List<Region>) => void,
        failAction?: () => void
      ) => System.Collections.Generic.List<Region>;

      constructor(
        mat: Mat,
        x: number,
        y: number,
        owner?: Region,
        converter?: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter,
        drawContent?: BetterGenshinImpact.View.Drawable.DrawContent
      );
    }
  }
}

export {};
