import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../../Microsoft/ClearScript/VoidResult";
import "../../../../OpenCvSharp/Rect";
import "../../../../System/Collections/Generic/List";
import "../../../../System/DateTime";
import "../../../../System/Nullable";
import "../../../../System/Threading/CancellationToken";
import "../../../../System/ValueTuple";
import "../../../../System/WebSocket";
import type { KeyCode } from "../../../Helpers/User32Helper";
import "../../Model/Area/ImageRegion";
import "../Config/CombatAvatar";
import "./CombatScenes";

export type AvatarName =
  | "未知角色"
  | "神里绫华"
  | "琴"
  | "旅行者"
  | "荧"
  | "空"
  | "丽莎"
  | "芭芭拉"
  | "凯亚"
  | "迪卢克"
  | "雷泽"
  | "安柏"
  | "温迪"
  | "香菱"
  | "北斗"
  | "行秋"
  | "魈"
  | "凝光"
  | "可莉"
  | "钟离"
  | "菲谢尔"
  | "班尼特"
  | "达达利亚"
  | "诺艾尔"
  | "七七"
  | "重云"
  | "甘雨"
  | "阿贝多"
  | "迪奥娜"
  | "莫娜"
  | "刻晴"
  | "砂糖"
  | "辛焱"
  | "罗莎莉亚"
  | "胡桃"
  | "枫原万叶"
  | "烟绯"
  | "宵宫"
  | "托马"
  | "优菈"
  | "雷电将军"
  | "早柚"
  | "珊瑚宫心海"
  | "五郎"
  | "九条裟罗"
  | "荒泷一斗"
  | "八重神子"
  | "鹿野院平藏"
  | "夜兰"
  | "绮良良"
  | "埃洛伊"
  | "申鹤"
  | "云堇"
  | "久岐忍"
  | "神里绫人"
  | "柯莱"
  | "多莉"
  | "提纳里"
  | "妮露"
  | "赛诺"
  | "坎蒂丝"
  | "纳西妲"
  | "莱依拉"
  | "流浪者"
  | "珐露珊"
  | "瑶瑶"
  | "艾尔海森"
  | "迪希雅"
  | "米卡"
  | "卡维"
  | "白术"
  | "琳妮特"
  | "林尼"
  | "菲米尼"
  | "莱欧斯利"
  | "那维莱特"
  | "夏洛蒂"
  | "芙宁娜"
  | "夏沃蕾"
  | "娜维娅"
  | "嘉明"
  | "闲云"
  | "千织"
  | "希格雯"
  | "阿蕾奇诺"
  | "赛索斯"
  | "克洛琳德"
  | "艾梅莉埃"
  | "卡齐娜"
  | "基尼奇"
  | "玛拉妮"
  | "希诺宁"
  | "恰斯卡"
  | "欧洛伦"
  | "玛薇卡"
  | "茜特菈莉"
  | "蓝砚"
  | "梦见月瑞希"
  | "伊安珊"
  | "瓦雷莎"
  | "爱可菲"
  | "伊法"
  | "丝柯克"
  | "塔利雅"
  | "伊涅芙"
  | "奇偶(男)"
  | "奇偶(女)"
  | "菈乌玛"
  | "菲林斯"
  | "爱诺"
  | "奈芙尔"
  | "杜林"
  | "雅珂达"
  | "哥伦比娅"
  | "兹白"
  | "叶洛亚"
  | "法尔伽"
  | "莉奈娅"
  | "洛恩"
  | "尼可"
  | "布伦妮"
  | "桑多涅"
  | "阿罗夏"
  | "奥黛塔"
  | (string & {});

/**
 * 角色行走方向键
 * @since 0.50.0
 */
export type WalkKey =
  | "w" // 前
  | "s" // 后
  | "a" // 左
  | "d" // 右
  | (string & {});

/**
 * 角色模拟用鼠标按键（小写；与 `KeyMouseHook.MouseButton` 的 PascalCase 不同）
 * @since 0.50.0
 */
export type MouseButtonName =
  | "left" // 左键
  | "right" // 右键
  | "middle" // 中键
  | (string & {});

/**
 * 队伍内的角色
 * @since 0.50.0
 */
declare const avatarBrand: unique symbol;
export interface Avatar extends ClrHostValue {
  readonly [avatarBrand]: true;
  /**
   * 配置文件中的角色静态信息
   * @since 0.50.0
   */
  readonly combatAvatar: BetterGenshinImpact.GameTask.AutoFight.Config.CombatAvatar;
  /**
   * 角色名称（中文）
   * @since 0.50.0
   */
  name: AvatarName;
  /**
   * 队伍内序号，从 1 开始
   * @since 0.50.0
   */
  index: number;
  /**
   * 手动配置的元素战技冷却时长，单位秒；有值时跳过 OCR，小于 0 表示自动识别
   * @since 0.50.0
   */
  manualSkillCd: number;
  /**
   * 最近一次使用元素战技的时间
   * @since 0.50.0
   */
  lastSkillTime: System.DateTime;
  /**
   * 元素爆发是否就绪
   * @since 0.50.0
   */
  isBurstReady: boolean;
  /**
   * 角色名称在截图中的矩形位置
   * @since 0.50.0
   */
  nameRect: OpenCvSharp.Rect;
  /**
   * 角色编号在截图中的矩形位置
   * @since 0.50.0
   */
  indexRect: OpenCvSharp.Rect;
  /**
   * 任务取消令牌
   * @since 0.50.0
   */
  ct: System.Threading.CancellationToken;
  /**
   * 所属战斗场景
   * @since 0.50.0
   */
  combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes;
  /**
   * 切换到本角色，切换冷却约 1 秒，失败时最多重试 5 次
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  switch(): VoidResult;
  /**
   * 尝试切换到本角色
   * @param tryTimes 最大尝试次数
   * @returns 是否切换成功
   * @since 0.59.0
   */
  trySwitch(): boolean;
  trySwitch(tryTimes: number | StrongNumeric<Int32Host>): boolean;
  /**
   * 切换到本角色且不绑定取消令牌，切换冷却约 1 秒，失败时最多重试 5 次
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  switchWithoutCts(): VoidResult;
  /**
   * 判断本角色是否处于出战状态
   * @param region 完整游戏画面的图像区域
   * @returns 是否出战
   * @since 0.50.0
   */
  isActive(region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion): boolean;
  /**
   * 判断本角色是否处于出战状态（不依赖编号矩形）
   * @param region 完整游戏画面的图像区域
   * @returns 是否出战
   * @deprecated 已过时
   * @since 0.50.0
   */
  isActiveNoIndexRect(region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion): boolean;
  /**
   * 普通攻击
   * @param ms 攻击时长，单位毫秒，建议为 200 的倍数，默认 0
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  attack(): VoidResult;
  attack(ms: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 使用元素战技
   * @param hold 是否长按，默认短按
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  useSkill(): VoidResult;
  useSkill(hold: boolean): VoidResult;
  /**
   * 在使用完元素战技后更新冷却状态，不检测是否需要前往七天神像；`useSkill` 内部会调用，若未走该方法释放技能后需手动调用
   * @param givenRegion 可选的已有截图区域，省略时重新截图
   * @returns 当前元素战技剩余冷却秒数
   * @since 0.50.0
   */
  afterUseSkill(): number;
  afterUseSkill(givenRegion: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null): number;
  /**
   * 使用元素爆发，释放等待约 2 秒，超时视为没有元素爆发
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  useBurst(): VoidResult;
  /**
   * 冲刺
   * @param ms 冲刺时长，单位毫秒
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  dash(): VoidResult;
  dash(ms: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 沿指定方向行走
   * @param key 方向键，如 `w`/`a`/`s`/`d`
   * @param ms 行走时长，单位毫秒
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  walk(key: WalkKey, ms: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 移动摄像机
   * @param pixelDeltaX 水平像素偏移，负数为左移，正数为右移
   * @param pixelDeltaY 垂直像素偏移，负数为上移，正数为下移
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  moveCamera(
    pixelDeltaX: number | StrongNumeric<Int32Host>,
    pixelDeltaY: number | StrongNumeric<Int32Host>
  ): VoidResult;
  /**
   * 等待指定时长
   * @param ms 等待时长，单位毫秒
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  wait(ms: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 标记当前动作序列已完成
   * @returns ClearScript 宿主空结果
   * @since 0.55.0
   */
  ready(): VoidResult;
  /**
   * 根据冷却推算元素战技是否就绪
   * @param printLog 是否输出日志
   * @returns 是否就绪
   * @since 0.50.0
   */
  isSkillReady(): boolean;
  isSkillReady(printLog: boolean): boolean;
  /**
   * 获取上一次使用元素战技后剩余的冷却秒数
   * @returns 剩余冷却秒数
   * @since 0.50.0
   */
  getSkillCdSeconds(): number;
  /**
   * 等待元素战技冷却完成
   * @param ct 取消令牌
   * @returns 在冷却完成后兑现的 Promise
   * @since 0.50.0
   */
  waitSkillCd(): Promise<void>;
  waitSkillCd(ct: System.Threading.CancellationToken): Promise<void>;
  /**
   * 跳跃
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  jump(): VoidResult;
  /**
   * 重击
   * @param ms 蓄力时长，单位毫秒
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  charge(): VoidResult;
  charge(ms: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 按下鼠标按键
   * @param key 鼠标按键标识，省略时为左键
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  mouseDown(): VoidResult;
  mouseDown(key: MouseButtonName): VoidResult;
  /**
   * 抬起鼠标按键
   * @param key 鼠标按键标识，省略时为左键
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  mouseUp(): VoidResult;
  mouseUp(key: MouseButtonName): VoidResult;
  /**
   * 点击鼠标按键
   * @param key 鼠标按键标识，省略时为左键
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  click(): VoidResult;
  click(key: MouseButtonName): VoidResult;
  /**
   * 相对移动鼠标
   * @param x 水平像素偏移
   * @param y 垂直像素偏移
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  moveBy(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 滚动鼠标滚轮
   * @param scrollAmountInClicks 滚动格数，正负表示方向
   * @returns ClearScript 宿主空结果
   * @since 0.56.2
   */
  scroll(scrollAmountInClicks: number | StrongNumeric<Int32Host>): VoidResult;
  /**
   * 按下键盘按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  keyDown(key: KeyCode): VoidResult;
  /**
   * 抬起键盘按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  keyUp(key: KeyCode): VoidResult;
  /**
   * 单击键盘按键
   * @param key 按键编码
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  keyPress(key: KeyCode): VoidResult;
}

declare global {
  namespace BetterGenshinImpact.GameTask.AutoFight.Model {
    type Avatar = import("./Avatar").Avatar;
    type AvatarName = import("./Avatar").AvatarName;
    type MouseButtonName = import("./Avatar").MouseButtonName;
    type WalkKey = import("./Avatar").WalkKey;
  }
}

export interface AvatarHostType extends HostType<Avatar, ReferenceTypeTrait> {
  /**
   * 创建队伍内角色实例
   * @param combatScenes 所属战斗场景
   * @param name 角色名称（中文）
   * @param index 队伍内序号，从 1 开始
   * @param nameRect 角色名称在截图中的矩形位置
   * @param manualSkillCd 手动配置的元素战技冷却时长，单位秒
   * @since 0.50.0
   */
  new (
    combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes,
    name: AvatarName,
    index: number | StrongNumeric<Int32Host>,
    nameRect: OpenCvSharp.Rect
  ): Avatar;
  new (
    combatScenes: BetterGenshinImpact.GameTask.AutoFight.Model.CombatScenes,
    name: AvatarName,
    index: number | StrongNumeric<Int32Host>,
    nameRect: OpenCvSharp.Rect,
    manualSkillCd: number | StrongNumeric<DoubleHost>
  ): Avatar;
  /**
   * 检测到角色被击败确认按钮时抛出异常
   * @param region 完整游戏画面的图像区域
   * @param ct 取消令牌
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  throwWhenDefeated(
    region: BetterGenshinImpact.GameTask.Model.Area.ImageRegion,
    ct: System.Threading.CancellationToken
  ): VoidResult;
  /**
   * 传送到七天神像恢复角色状态
   * @param ct 取消令牌
   * @param ex 触发恢复的异常
   * @returns ClearScript 宿主空结果
   * @since 0.50.0
   */
  tpForRecover(ct: System.Threading.CancellationToken, ex: System.Exception): VoidResult;
  /**
   * 从配置字符串中查找角色冷却秒数
   * @param avatarName 角色名称
   * @param input 冷却配置序列
   * @returns 仅有角色名时返回 -1，未找到角色返回 null，否则返回冷却秒数
   * @since 0.50.0
   */
  parseActionSchedulerByCd(avatarName: AvatarName, input: string): number | null;
  /**
   * 识别屏幕上的血条位置列表
   * @param existingCapture 可选的已有截图区域，省略时重新截图
   * @returns 血条边界框元组列表
   * @since 0.50.0
   */
  findBloodBars(): System.Collections.Generic.List<
    System.ValueTuple<number, number, number, number>
  >;
  findBloodBars(
    existingCapture: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null
  ): System.Collections.Generic.List<System.ValueTuple<number, number, number, number>>;
  /**
   * 通过 OCR 寻找伤害数字或反应文字作为追踪目标（备用寻敌）；在 450,240–1600,900 区域 OCR，过滤纯数字 ≥4 位或含反应关键词的文本，按 `h²×文本字数` 加权得到中心坐标
   * @param existingCapture 可选的已有截图区域，省略时重新截图
   * @returns 离加权中心最近的有效项坐标与文本，未找到时为 null
   * @since 0.50.0
   */
  findDamageNumber(): System.ValueTuple<number, number, string> | null;
  findDamageNumber(
    existingCapture: BetterGenshinImpact.GameTask.Model.Area.ImageRegion | null
  ): System.ValueTuple<number, number, string> | null;
}

export {};
