declare global {
  namespace BetterGenshinImpact.GameTask.AutoLeyLineOutcrop {
    class FightFinishDetectConfig {
      /** 战斗结束进度条颜色 (RGB格式，例如 "95,235,255") */
      battleEndProgressBarColor: string;

      /** 战斗结束进度条颜色容差 (RGB偏差值，例如 "6,6,6" 或单个值 "6") */
      battleEndProgressBarColorTolerance: string;

      /** 快速检查战斗结束功能启用状态 */
      fastCheckEnabled: boolean;

      /** 旋转寻找敌人位置启用状态 */
      rotateFindEnemyEnabled: boolean;

      /** 快速检查参数 (数字表示秒数，人名用分号分隔，例如 "15,白术;钟离;") */
      fastCheckParams: string;

      /** 检查战斗结束的延时配置 (格式如 "2.5;白术,1.5;钟离,1.0;") */
      checkEndDelay: string;

      /** 按下切换队伍后检查屏幕色块的延迟 (秒数，默认 0.45) */
      beforeDetectDelay: string;

      /** 旋转寻找敌人的旋转因子 (默认值为 10，越大越快) */
      rotaryFactor: number;

      /** 是否是第一次检查和面敌 */
      isFirstCheck: boolean;

      /** 是否在元素爆发前检查战斗结束 */
      checkBeforeBurst: boolean;

      constructor();
    }
  }
}

export {};
