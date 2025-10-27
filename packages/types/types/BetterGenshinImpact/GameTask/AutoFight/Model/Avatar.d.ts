import { Rect } from "mirada/dist/src/types/opencv";
import "../../../../System/DateTime";
import "../../../../System/Exception";
import "../../../../System/Threading/CancellationToken";
import "../../../GameTask/Model/Area/ImageRegion";
import "../../AutoFight/Model/CombatScenes";
import "../Config/CombatAvatar";

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    /** 队伍内的角色 */
    class Avatar {
      /** 配置文件中的角色信息 */
      combatAvatar: BetterGenshinImpact.GameTask.AutoFight.Config.CombatAvatar;

      /** 角色名称 中文 */
      name: string;

      /** 队伍内序号 */
      index: number;

      /** 最近一次OCR识别出的CD到期时间 */
      ocrSkillCd: System.DateTime;

      /** 手动配置的技能CD，有它就不使用OCR,小于0为自动 */
      manualSkillCd: number;

      /** 最近一次使用元素战技的时间 */
      lastSkillTime: System.DateTime;

      /** 元素爆发是否就绪 */
      isBurstReady: boolean;

      /** 名字所在矩形位置 */
      nameRect: Rect;

      /** 名字右边的编号位置 */
      indexRect: Rect;

      /** 任务取消令牌 */
      ct: System.Threading.CancellationToken;

      /** 战斗场景 */
      combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;

      /** 切换到本角色 切换cd是1秒，如果切换失败，会尝试再次切换，最多尝试5次 */
      switch(): void;

      /** 尝试切换到本角色 */
      trySwitch(): boolean;
      // overload
      trySwitch(tryTimes: number): boolean;
      trySwitch(tryTimes: number, needLog: boolean): boolean;

      /** 切换到本角色 切换cd是1秒，如果切换失败，会尝试再次切换，最多尝试5次 */
      switchWithoutCts(): void;

      /** 是否出战状态 */
      isActive(region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion): boolean;

      /** 普通攻击 */
      attack(): void;
      // overload
      attack(ms: number): void;

      /** 使用元素战技 E */
      useSkill(): void;
      // overload
      useSkill(hold: boolean): void;

      /** 使用完元素战技的回调,注意,不会在这里检测是不是需要跑七天神像 */
      afterUseSkill(): void;
      // overload
      afterUseSkill(givenRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null): void;

      /** 使用元素爆发 Q Q释放等待 2s 超时认为没有Q技能 */
      useBurst(): void;

      /** 冲刺 */
      dash(): void;
      // overload
      dash(ms: number): void;

      /** 移动 */
      walk(key: string, ms: number): void;

      /** 移动摄像机  */
      moveCamera(pixelDeltaX: number, pixelDeltaY: number): void;

      /** 等待 */
      wait(ms: number): void;

      /** 根据cd推算E技能是否好了 */
      isSkillReady(): boolean;
      // overload
      isSkillReady(printLog: boolean): boolean;

      /** 计算上一次使用技能到现在还剩下多长时间的cd */
      getSkillCdSeconds(): number;

      /** 等待技能CD */
      waitSkillCd(): Promise<void>;
      // overload
      waitSkillCd(ct: System.Threading.CancellationToken): Promise<void>;

      /** 跳跃 */
      jump(): void;

      /** 重击 */
      charge(): void;
      // overload
      charge(ms: number): void;

      /** 鼠标按下 */
      mouseDown(): void;
      // overload
      mouseDown(key: string): void;

      /** 鼠标抬起 */
      mouseUp(): void;
      // overload
      mouseUp(key: string): void;

      /** 鼠标点击 */
      click(): void;
      // overload
      click(key: string): void;

      /** 鼠标相对移动 */
      moveBy(x: number, y: number): void;

      /** 按下按键 */
      keyDown(key: string): void;

      /** 抬起按键 */
      keyUp(key: string): void;

      /** 按下并抬起按键 */
      keyPress(key: string): void;

      /** 从配置字符串中查找角色cd 仅有角色名时返回 -1 ,没找到角色返回null */
      parseActionSchedulerByCd(avatarName: string, input: string): number | null;

      constructor(
        combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes,
        name: string,
        index: number,
        nameRect: Rect
      );
      constructor(
        combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes,
        name: string,
        index: number,
        nameRect: Rect,
        manualSkillCd: number
      );

      /** 是否存在角色被击败 通过判断确认按钮 */
      static throwWhenDefeated(
        region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
        ct: System.Threading.CancellationToken
      ): void;

      /** tp 到七天神像恢复 */
      static tpForRecover(ct: System.Threading.CancellationToken, ex: System.Exception): void;
    }
  }
  export import Avatar = BetterGenshinImpact.GameTask.AutoFight.Model.Avatar;
}

export {};
