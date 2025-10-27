import "../../../System/Collections/Generic/List";
import "../../../System/Threading/CancellationToken";
import "../../GameTask/Model/Area/ImageRegion";
import "../../GameTask/Model/Area/Region";
import "../ISoloTask";
import "./AutoDomainParam";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoDomain {
    class AutoDomainTask implements BetterGenshinImpact.GameTask.ISoloTask {
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
      ): [boolean, number];

      /**
       * 点击使用树脂
       * @param regionList 识别区域列表
       * @param resinName 树脂名称
       */
      static pressUseResin(
        regionList: System.Collections.Generic.List<BetterGenshinImpact.GameTask.Model.Area.Region>,
        resinName: string
      ): [boolean, number];

      constructor(taskParam: BetterGenshinImpact.GameTask.AutoDomain.AutoDomainParam);
    }
  }
}

export {};
