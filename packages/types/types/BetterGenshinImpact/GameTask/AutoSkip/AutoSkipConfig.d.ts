import "../../../CommunityToolkit/Mvvm/ComponentModel/ObservableObject";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/ComponentModel/INotifyPropertyChanged";
import "../../../System/ComponentModel/INotifyPropertyChanging";

/**
 * 剧情对话选项策略
 * @since 0.55.0
 */
export type ClickChatOption =
  "优先选择第一个选项" | "随机选择选项" | "优先选择最后一个选项" | "不选择选项" | (string & {});

/**
 * 画中画图像源
 * @since 0.55.0
 */
export type PictureInPictureSourceType =
  | "CaptureLoop" // 主动约 60 帧采图
  | "TriggerDispatcher" // 截图器供图
  | (string & {});

/**
 * 自动邀约支持的角色名称
 * 来源：上游 `GameTask/AutoSkip/Assets/hangout.json` 顶层角色名键列表
 * @since unreleased
 */
export type HangoutCharacter =
  | "琳妮特"
  | "凯亚"
  | "卡维"
  | "莱依拉"
  | "珐露珊"
  | "鹿野院平藏"
  | "久岐忍"
  | "凝光"
  | "云堇"
  | "五郎"
  | "北斗"
  | "早柚"
  | "托马"
  | "迪奥娜"
  | "诺艾尔 第一幕"
  | "诺艾尔 第二幕"
  | "芭芭拉"
  | "重云"
  | "班尼特"
  | "" // 未指定
  | (string & {});

/**
 * 自动跳过剧情配置
 * @since 0.55.0
 */
declare const autoSkipConfigBrand: unique symbol;
export interface AutoSkipConfig
  extends
    Omit<
      CommunityToolkit.Mvvm.ComponentModel.ObservableObject,
      | "afterChooseOptionSleepDelay"
      | "autoGetDailyRewardsEnabled"
      | "autoHangoutCharacterChoose"
      | "autoHangoutChooseOptionSleepDelay"
      | "autoHangoutEndChoose"
      | "autoHangoutEventEnabled"
      | "autoHangoutPressSkipEnabled"
      | "autoReExploreCharacter"
      | "autoReExploreEnabled"
      | "autoWaitDialogueOptionVoiceEnabled"
      | "beforeClickConfirmDelay"
      | "bringGameToFrontAfterBackgroundDialogEnabled"
      | "clickChatOption"
      | "closePopupPagedEnabled"
      | "customPriorityOptions"
      | "customPriorityOptionsEnabled"
      | "dialogueOptionVoiceMaxWaitSeconds"
      | "dialogueOptionVoiceVadDiagnosticEnabled"
      | "enabled"
      | "isClickFirstChatOption"
      | "isClickNoneChatOption"
      | "isClickRandomChatOption"
      | "pictureInPictureEnabled"
      | "pictureInPictureSourceType"
      | "quicklySkipConversationsEnabled"
      | "runBackgroundEnabled"
      | "skipBuiltInClickOptions"
      | "submitGoodsEnabled"
    >,
    System.ComponentModel.INotifyPropertyChangedInput,
    System.ComponentModel.INotifyPropertyChangingInput {
  readonly [autoSkipConfigBrand]: true;
  /**
   * 判断当前是否优先选择第一个对话选项
   * @returns 是否优先选择第一个选项
   * @since 0.55.0
   */
  isClickFirstChatOption(): boolean;
  /**
   * 判断当前是否随机选择对话选项
   * @returns 是否随机选择
   * @since 0.55.0
   */
  isClickRandomChatOption(): boolean;
  /**
   * 判断当前是否不选择对话选项
   * @returns 是否不选择选项
   * @since 0.55.0
   */
  isClickNoneChatOption(): boolean;
  /**
   * 选择选项前的延迟，单位毫秒，默认 0
   * @since 0.55.0
   */
  afterChooseOptionSleepDelay: number;
  /**
   * 是否自动领取每日委托奖励，默认开启
   * @since 0.55.0
   */
  autoGetDailyRewardsEnabled: boolean;
  /**
   * 自动邀约分支角色，默认空字符串（未指定）
   * @since unreleased
   */
  autoHangoutCharacterChoose: HangoutCharacter;
  /**
   * 自动邀约选择选项前的延迟，单位毫秒，默认 0
   * @since 0.55.0
   */
  autoHangoutChooseOptionSleepDelay: number;
  /**
   * 自动邀约分支选择目标，默认空字符串
   * @since 0.55.0
   */
  autoHangoutEndChoose: string;
  /**
   * 是否启用自动邀约，默认关闭
   * @since 0.55.0
   */
  autoHangoutEventEnabled: boolean;
  /**
   * 自动邀约是否自动点击跳过按钮，默认开启
   * @since 0.55.0
   */
  autoHangoutPressSkipEnabled: boolean;
  /**
   * 自动重新派遣使用的角色配置，逗号分隔
   * @deprecated 已过时
   * @since 0.55.0
   */
  autoReExploreCharacter: string;
  /**
   * 是否自动重新派遣，默认开启
   * @since 0.55.0
   */
  autoReExploreEnabled: boolean;
  /**
   * 是否在选择剧情选项前通过进程音频人声检测等待语音结束，默认关闭
   * @since 0.55.0
   */
  autoWaitDialogueOptionVoiceEnabled: boolean;
  /**
   * 点击对话框确认前的延迟，单位毫秒，默认 0
   * @since 0.55.0
   */
  beforeClickConfirmDelay: number;
  /**
   * 后台剧情结束后是否切回游戏前台，默认关闭
   * @since 0.55.0
   */
  bringGameToFrontAfterBackgroundDialogEnabled: boolean;
  /**
   * 对话选项选择策略，默认 "优先选择第一个选项"
   * @since 0.55.0
   */
  clickChatOption: ClickChatOption;
  /**
   * 是否自动关闭弹出层，默认开启
   * @since 0.55.0
   */
  closePopupPagedEnabled: boolean;
  /**
   * 是否启用自定义优先选项，默认关闭
   * @since 0.55.0
   */
  customPriorityOptionsEnabled: boolean;
  /**
   * 自定义优先选项文本，每行一个或用分号分隔，默认空字符串
   * @since 0.55.0
   */
  customPriorityOptions: string;
  /**
   * 人声检测等待语音结束的最大时长，单位秒，默认 30
   * @since 0.55.0
   */
  dialogueOptionVoiceMaxWaitSeconds: number;
  /**
   * 持续检测游戏进程音频并在设置页显示 Silero VAD 诊断数据，默认关闭
   * @since 0.66.0
   */
  dialogueOptionVoiceVadDiagnosticEnabled: boolean;
  /**
   * 是否启用自动跳过触发器，默认开启；启用后可快速跳过对话、自动点击选项，并在黑屏过长时自动跳过
   * @since 0.55.0
   */
  enabled: boolean;
  /**
   * 游戏失焦时是否显示画中画，默认关闭
   * @since 0.55.0
   */
  pictureInPictureEnabled: boolean;
  /**
   * 画中画图像源类型，默认 "CaptureLoop"
   * @since 0.55.0
   */
  pictureInPictureSourceType: PictureInPictureSourceType;
  /**
   * 是否快速跳过对话，默认开启
   * @since 0.55.0
   */
  quicklySkipConversationsEnabled: boolean;
  /**
   * 是否在后台运行，默认关闭
   * @since 0.55.0
   */
  runBackgroundEnabled: boolean;
  /**
   * 脚本调用时是否跳过内置默认点击选项，默认关闭
   * @since 0.55.0
   */
  skipBuiltInClickOptions: boolean;
  /**
   * 是否自动提交物品，默认开启
   * @since 0.55.0
   */
  submitGoodsEnabled: boolean;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoSkip {
    type AutoSkipConfig = import("./AutoSkipConfig").AutoSkipConfig;
    type ClickChatOption = import("./AutoSkipConfig").ClickChatOption;
    type HangoutCharacter = import("./AutoSkipConfig").HangoutCharacter;
    type PictureInPictureSourceType = import("./AutoSkipConfig").PictureInPictureSourceType;
  }
}

export interface AutoSkipConfigHostType extends HostType<
  AutoSkipConfig,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  /**
   * 构造实例
   * @since 0.55.0
   */
  new (): AutoSkipConfig;
}

export {};
