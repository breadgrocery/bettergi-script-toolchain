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
  | "优先选择第一个选项"
  | "随机选择选项"
  | "优先选择最后一个选项"
  | "不选择选项"
  | (string & {});

/**
 * 画中画图像源
 * @since 0.55.0
 */
export type PictureInPictureSourceType =
  | "CaptureLoop" // 主动约 60 帧采图
  | "TriggerDispatcher" // 截图器供图
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
   * 选择选项前的延迟，单位毫秒
   * @since 0.55.0
   */
  afterChooseOptionSleepDelay: number;
  /**
   * 是否自动领取每日委托奖励
   * @since 0.55.0
   */
  autoGetDailyRewardsEnabled: boolean;
  /**
   * 自动邀约选择选项前的延迟，单位毫秒
   * @since 0.55.0
   */
  autoHangoutChooseOptionSleepDelay: number;
  /**
   * 自动邀约分支选择目标
   * @since 0.55.0
   */
  autoHangoutEndChoose: string;
  /**
   * 是否启用自动邀约
   * @since 0.55.0
   */
  autoHangoutEventEnabled: boolean;
  /**
   * 自动邀约是否自动点击跳过按钮
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
   * 是否自动重新派遣
   * @since 0.55.0
   */
  autoReExploreEnabled: boolean;
  /**
   * 是否在选择剧情选项前通过进程音频人声检测等待语音结束
   * @since 0.55.0
   */
  autoWaitDialogueOptionVoiceEnabled: boolean;
  /**
   * 点击对话框确认前的延迟，单位毫秒
   * @since 0.55.0
   */
  beforeClickConfirmDelay: number;
  /**
   * 后台剧情结束后是否切回游戏前台
   * @since 0.55.0
   */
  bringGameToFrontAfterBackgroundDialogEnabled: boolean;
  /**
   * 对话选项选择策略
   * @since 0.55.0
   */
  clickChatOption: ClickChatOption;
  /**
   * 是否自动关闭弹出层
   * @since 0.55.0
   */
  closePopupPagedEnabled: boolean;
  /**
   * 是否启用自定义优先选项
   * @since 0.55.0
   */
  customPriorityOptionsEnabled: boolean;
  /**
   * 自定义优先选项文本，每行一个或用分号分隔
   * @since 0.55.0
   */
  customPriorityOptions: string;
  /**
   * 人声检测等待语音结束的最大时长，单位秒，默认 30
   * @since 0.55.0
   */
  dialogueOptionVoiceMaxWaitSeconds: number;
  /**
   * 是否启用自动跳过触发器；启用后可快速跳过对话、自动点击选项，并在黑屏过长时自动跳过
   * @since 0.55.0
   */
  enabled: boolean;
  /**
   * 游戏失焦时是否显示画中画
   * @since 0.55.0
   */
  pictureInPictureEnabled: boolean;
  /**
   * 画中画图像源类型
   * @since 0.55.0
   */
  pictureInPictureSourceType: PictureInPictureSourceType;
  /**
   * 是否快速跳过对话
   * @since 0.55.0
   */
  quicklySkipConversationsEnabled: boolean;
  /**
   * 是否在后台运行
   * @since 0.55.0
   */
  runBackgroundEnabled: boolean;
  /**
   * 脚本调用时是否跳过内置默认点击选项
   * @since 0.55.0
   */
  skipBuiltInClickOptions: boolean;
  /**
   * 是否自动提交物品
   * @since 0.55.0
   */
  submitGoodsEnabled: boolean;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoSkip {
    type AutoSkipConfig = import("./AutoSkipConfig").AutoSkipConfig;
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
