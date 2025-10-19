import "../../System/Threading/CancellationToken";

declare global {
  namespace BetterGenshinImpact.GameTask {
    interface ISoloTask {
      name: string;

      start(ct: System.Threading.CancellationToken): Promise<void>;
    }
  }
}

export {};
