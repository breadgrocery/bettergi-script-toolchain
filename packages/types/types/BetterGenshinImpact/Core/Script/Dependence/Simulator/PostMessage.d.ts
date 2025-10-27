declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence.Simulator {
    class PostMessage {
      keyDown(key: string): void;

      keyUp(key: string): void;

      keyPress(key: string): void;

      click(): void;

      constructor();
    }
  }
  export import PostMessage = BetterGenshinImpact.Core.Script.Dependence.Simulator.PostMessage;
}

export {};
