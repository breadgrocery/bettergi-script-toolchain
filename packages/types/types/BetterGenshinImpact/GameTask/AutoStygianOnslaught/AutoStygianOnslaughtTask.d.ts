import "../../../System/Threading/CancellationToken";
import "../ISoloTask";
import "./AutoStygianOnslaughtParam";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoStygianOnslaught {
    class AutoStygianOnslaughtTask implements BetterGenshinImpact.GameTask.ISoloTask {
      name: string;

      start(ct: System.Threading.CancellationToken): Promise<void>;

      constructor(
        taskParam: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam
      );

      constructor(
        taskParam: BetterGenshinImpact.GameTask.AutoStygianOnslaught.AutoStygianOnslaughtParam,
        path: string
      );
    }
  }
}

export {};
