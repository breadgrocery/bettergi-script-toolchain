import "../../../System/Collections/Generic/List";
import "../../../System/Threading/CancellationToken";
import "../../../System/Tuple";
import "../../GameTask/Model/Area/ImageRegion";
import "../../GameTask/Model/Area/Region";
import "../ISoloTask";
import "./AutoFightParam";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight {
    class AutoFightTask implements BetterGenshinImpact.GameTask.ISoloTask {
      name: string;

      start(ct: System.Threading.CancellationToken): Promise<void>;

      /**
       * 点击使用树脂
       * @param ra 图像识别区域
       * @param resinName 树脂名称
       */
      static pressUseResin(
        ra: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
        resinName: string
      ): System.Tuple2<boolean, number>;

      /**
       * 点击使用树脂
       * @param regionList 识别区域列表
       * @param resinName 树脂名称
       */
      static pressUseResin(
        regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
        resinName: string
      ): System.Tuple2<boolean, number>;

      constructor(taskParam: BetterGenshinImpact.GameTask.AutoFight.AutoFightParam);
    }
  }
}

export {};
