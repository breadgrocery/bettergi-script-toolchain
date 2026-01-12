declare global {
  namespace BetterGenshinImpact.GameTask.AutoSkip {
    class AutoSkipConfig {
      /** 触发器是否启用 启用后： 1. 快速跳过对话 2. 自动点击一个识别到的选项 3. 黑屏过长自动点击跳过 */
      enabled: boolean;

      /**
       * 快速跳过对话
       * @default true
       */
      quicklySkipConversationsEnabled: boolean;

      /**
       * 选择选项前的延迟（毫秒）
       * @default 0
       */
      afterChooseOptionSleepDelay: number;

      /**
       * 点击对话框前的延迟（毫秒）
       * @default 0
       */
      beforeClickConfirmDelay: number;

      /**
       * 自动领取每日委托奖励
       * @default true
       */
      autoGetDailyRewardsEnabled: boolean;

      /**
       * 自动重新派遣
       * @default true
       */
      autoReExploreEnabled: boolean;

      /** 自动重新派遣使用角色配置，逗号分割 */
      autoReExploreCharacter: string;

      /**
       * - 优先选择第一个选项
       * - 优先选择最后一个选项
       * - 自定义优先选项
       * - 不选择选项
       */
      clickChatOption: string;

      /** 自定义优先选项文本，每行一个或用分号分隔 */
      customPriorityOptions: string;

      /**
       * 启用自动邀约
       * @default false
       */
      autoHangoutEventEnabled: boolean;

      /** 自动邀约分支选择 */
      autoHangoutEndChoose: string;

      /**
       * 自动邀约选择选项前的延迟（毫秒）
       * @default 0
       */
      autoHangoutChooseOptionSleepDelay: number;

      /**
       * 自动邀约自动点击跳过按钮
       * @default true
       */
      autoHangoutPressSkipEnabled: boolean;

      /**
       * 后台运行
       * @default false
       */
      runBackgroundEnabled: boolean;

      /**
       * 提交物品
       * @default true
       */
      submitGoodsEnabled: boolean;

      /**
       * 游戏失焦时显示画中画
       * @default false
       */
      pictureInPictureEnabled: boolean;

      /**
       * 画中画的源图像类型 TriggerDispatcher：来自于截图器50ms一次 CaptureLoop：主动获取（60帧）
       * @default 'CaptureLoop'
       */
      pictureInPictureSourceType: string;

      /**
       * 关闭弹出层
       * @default true
       */
      closePopupPagedEnabled: boolean;
    }
  }
  export import AutoSkipConfig = BetterGenshinImpact.GameTask.AutoSkip.AutoSkipConfig;
}

export {};
