import { Mat, Rect } from "mirada/dist/src/types/opencv";
import "../../../../BetterGenshinImpact/Core/Recognition/RecognitionObject";
import "../../../../BetterGenshinImpact/GameTask/Model/Area/Converter/INodeConverter";
import "../../../../BetterGenshinImpact/GameTask/Model/Area/Region";
import "../../../../BetterGenshinImpact/View/Drawable/DrawContent";
import "../../../../SixLabors/ImageSharp/Image";
import "../../../../System/Collections/Generic/List";

declare global {
  namespace BetterGenshinImpact.GameTask.Model.Area {
    class ImageRegion extends BetterGenshinImpact.GameTask.Model.Area.Region {
      srcMat: Mat;

      cacheGreyMat: Mat;

      cacheImage: SixLabors.ImageSharp.Image;

      deriveCrop(
        x: number,
        y: number,
        w: number,
        h: number
      ): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;

      deriveCrop(rect: Rect): BetterGenshinImpact.GameTask.Model.Area.ImageRegion;

      /**
       * 在本区域内查找最优识别对象
       * @param ro 识别对象
       * @param successAction 识别成功回调
       * @param failAction 识别失败回调
       */
      find: (
        ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
        successAction?: (region: BetterGenshinImpact.GameTask.Model.Area.Region) => void,
        failAction?: () => void
      ) => BetterGenshinImpact.GameTask.Model.Area.Region;

      /**
       * 在本区域内查找识别对象，返回所有找到的结果
       * @param ro 识别对象
       * @param successAction  识别成功回调
       * @param failAction  识别失败回调
       * @returns
       */
      findMulti: (
        ro: BetterGenshinImpact.Core.Recognition.RecognitionObject,
        successAction?: (
          regions: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>
        ) => void,
        failAction?: () => void
      ) => System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>;

      constructor(
        mat: Mat,
        x: number,
        y: number,
        owner?: BetterGenshinImpact.GameTask.Model.Area.Region,
        converter?: BetterGenshinImpact.GameTask.Model.Area.Converter.INodeConverter,
        drawContent?: BetterGenshinImpact.View.Drawable.DrawContent
      );
    }
  }
  export import ImageRegion = BetterGenshinImpact.GameTask.Model.Area.ImageRegion;
}

export {};
