import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";
import type { CombatStrategyName } from "../AutoFight/AutoFightConfig";

/**
 * 自动首领讨伐支持的 Boss 名称
 * 来源：上游 `AutoBossData.CountryToBosses` 扁平列表（启动时 `IsSupportedBoss` 校验）
 * @since 0.62.0
 */
export type BossName =
  // 蒙德
  | "急冻树"
  | "无相之雷"
  | "守望者·堕天"
  // 璃月
  | "爆炎树"
  | "纯水精灵"
  | "古岩龙蜥"
  | "无相之岩"
  | "遗迹巨蛇"
  | "隐山猊兽"
  // 稻妻
  | "无相之火"
  | "恒常机关阵列"
  | "雷音权现"
  | "魔偶剑鬼"
  | "无相之水"
  // 须弥
  | "掣电树"
  | "半永恒统辖矩阵"
  | "翠翎恐蕈"
  | "风蚀沙虫"
  | "无相之草"
  | "深罪浸礼者"
  | "兆载永劫龙兽"
  // 枫丹
  | "歌裴莉娅的葬送"
  | "科培琉司的劫罚"
  | "实验性场力发生装置"
  | "魔像督军"
  | "千年珍珠骏麟"
  | "水形幻人"
  | "铁甲熔火帝皇"
  // 纳塔
  | "金焰绒翼龙暴君"
  | "灵觉隐修的迷者"
  | "秘源机兵·构型械"
  | "秘源机兵·统御械"
  | "熔岩辉龙像"
  | "深邃摹结株"
  | "贪食匿叶龙山王"
  // 挪德卡莱
  | "蕴光月守宫"
  | "深黯魇语之主"
  | "超重型陆巡舰·机动战垒"
  | "霜夜巡天灵主"
  | "蕴光月幻蝶"
  | "重拳出击鸭"
  | "" // 未指定
  | (string & {});

/**
 * 自动首领讨伐的持久化配置，由独立任务页使用
 * @since 0.62.0
 */
declare const autoBossConfigBrand: unique symbol;
export interface AutoBossConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "bossName"
      | "returnToStatueAfterEachRound"
      | "reviveRetryCount"
      | "rewardRecognitionEnabled"
      | "runCount"
      | "specifyRunCount"
      | "strategyName"
      | "teamName"
      | "timeout"
      | "useFragileResin"
      | "useTransientResin"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoBossConfigBrand]: true;
  /**
   * 需要讨伐的 Boss 名称；空字符串表示未指定，启动前须为受支持名单内名称
   * @since 0.62.0
   */
  bossName: BossName;
  /**
   * 每轮领奖后是否先返回七天神像，再重新前往 Boss
   * @since 0.62.0
   */
  returnToStatueAfterEachRound: boolean;
  /**
   * 检测到角色死亡后回神像恢复并重试当前首领讨伐的最大次数
   * @since 0.62.0
   */
  reviveRetryCount: number;
  /**
   * 是否启用奖励名称识别，默认关闭
   * @since 0.62.0
   */
  rewardRecognitionEnabled: boolean;
  /**
   * 战斗超时时长，单位秒，默认 240
   * @since 0.63.0
   */
  timeout: number;
  /**
   * 指定模式下成功领取奖励的目标次数
   * @since 0.62.0
   */
  runCount: number;
  /**
   * 是否启用指定讨伐次数模式；关闭时刷取至原粹树脂耗尽
   * @since 0.62.0
   */
  specifyRunCount: boolean;
  /**
   * 战斗策略名称，`根据队伍自动选择` 表示按当前队伍匹配策略
   * @since 0.62.0
   */
  strategyName: CombatStrategyName;
  /**
   * 讨伐前需要切换到的队伍名称，为空时保持当前队伍
   * @since 0.62.0
   */
  teamName: string;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用脆弱树脂补充
   * @since 0.62.0
   */
  useFragileResin: boolean;
  /**
   * 指定讨伐次数模式下原粹树脂不足时是否允许使用须臾树脂补充
   * @since 0.62.0
   */
  useTransientResin: boolean;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoBoss {
    type AutoBossConfig = import("./AutoBossConfig").AutoBossConfig;
    type BossName = import("./AutoBossConfig").BossName;
  }
}

export interface AutoBossConfigHostType extends HostType<
  AutoBossConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.62.0
   */
  new (): AutoBossConfig;
}

export {};
