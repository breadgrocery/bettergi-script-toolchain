import "../../../System/Threading/CancellationToken";
import "../ISoloTask";
import "./AutoLeyLineOutcropParam";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    class AutoLeyLineOutcropTask implements BetterGenshinImpact.GameTask.ISoloTask {
      name: string;

      start(ct: System.Threading.CancellationToken): Promise<void>;

      constructor(
        taskParam: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam
      );

      constructor(
        taskParam: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam,
        oneDragonMode: boolean
      );
    }
  }
}

export {};
