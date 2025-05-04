export type SoloTaskName =
  | "AutoGeniusInvokation" // 自动七圣召唤
  | "AutoWood" // 自动伐木
  | "AutoFight" // 自动战斗
  | "AutoDomain" // 自动秘境
  | "AutoFishing" // 自动钓鱼
  | (string & {});

declare global {
  class SoloTask {
    /** 任务名称 */
    name: SoloTaskName;

    /** 任务配置 */
    config: any | null;

    constructor(name: SoloTaskName);

    constructor(name: SoloTaskName, config: any);
  }
}

export {};
