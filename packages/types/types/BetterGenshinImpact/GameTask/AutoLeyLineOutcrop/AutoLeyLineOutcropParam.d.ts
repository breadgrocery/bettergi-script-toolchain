import "../../GameTask/Model/BaseTaskParam";
import "./AutoLeyLineOutcropFightConfig";
import "./AutoLeyLineOutcropTask";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    class AutoLeyLineOutcropParam extends BetterGenshinImpact.GameTask.Model
      .BaseTaskParam<BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropTask> {
      /** 刷取次数 */
      count: number;

      /** 地区 */
      country: string;

      /** 地脉花类型 */
      leyLineOutcropType: string;

      /** 开启取小值模式 */
      openModeCountMin: boolean;

      /** 是否开启树脂耗尽模式 */
      isResinExhaustionMode: boolean;

      /** 是否使用冒险之证寻找地脉花 */
      useAdventurerHandbook: boolean;

      /** 好感队名称 */
      friendshipTeam: string;

      /** 战斗的队伍名称 */
      team: string;

      /** 超时时间 */
      timeout: number;

      /** 地脉花独立战斗配置 */
      fightConfig: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropFightConfig;

      /** 是否前往合成台合成浓缩树脂 */
      isGoToSynthesizer: boolean;

      /** 是否使用脆弱树脂 */
      useFragileResin: boolean;

      /** 是否使用须臾树脂 */
      useTransientResin: boolean;

      /** 通过BGI通知系统发送详细通知 */
      isNotification: boolean;

      /** 是否在领取奖励后扫描掉落物光柱 */
      scanDropsAfterRewardEnabled: boolean;

      /** 领取奖励后扫描掉落物光柱的最长时长 (秒) */
      scanDropsAfterRewardSeconds: number;

      /** 使用默认配置初始化参数 */
      setDefault(): void;

      /** 设置战斗配置 */
      setAutoLeyLineOutcropConfig(
        config: BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropFightConfig
      ): void;

      constructor();

      constructor(count: number, country: string, leyLineOutcropType: string);
    }
  }
  export import AutoLeyLineOutcropParam = BetterGenshinImpact.GameTask.AutoLeyLineOutcrop.AutoLeyLineOutcropParam;
}

export {};
