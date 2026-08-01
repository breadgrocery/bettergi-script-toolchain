/**
 * 路径点类型
 * @since 0.43.1
 */
export type WaypointPointType =
  | "path" // 途径点
  | "target" // 目标点
  | "teleport" // 传送点
  | "orientation" // 方位点
  | (string & {});

/**
 * 路径点移动模式
 * @since 0.43.1
 */
export type MoveMode =
  | "walk" // 步行
  | "run" // 奔跑
  | "dash" // 持续冲刺
  | "climb" // 攀爬
  | "fly" // 飞行
  | "jump" // 跳跃
  | "swim" // 游泳
  | (string & {});

/**
 * 路径追踪赶路模式（`PathingPartyConfig.TravelMode`）
 * 上游 UI 列表为 `精准靠近` / `连续赶路`；空串运行时会回退为 `精准靠近`
 * @since 0.43.1
 */
export type TravelMode =
  | "精准靠近" // 适合采集，节点间减速
  | "连续赶路" // 适合锄地
  | (string & {});

/**
 * 路径追踪队伍角色槽位序号（字符串）
 * 上游 `PathingPartyConfig.AvatarIndexList`：`""` / `1`–`4`
 * 用于 `MainAvatarIndex`、`GuardianAvatarIndex` 等
 * @since 0.43.1
 */
export type MainAvatarIndex = "" | "1" | "2" | "3" | "4" | (string & {});

/**
 * 路径追踪自动赶路角色
 * 上游 `PathingPartyConfig.HurryOnAvatarList`
 * @since 0.43.1
 */
export type HurryOnAvatar =
  | "" // 未指定 / 关闭列表首项
  | "自动" // 按名单与主C自动挑选
  | "玛薇卡"
  | "闲云"
  | "桑多涅"
  | "恰斯卡"
  | "流浪者"
  | "伊法"
  | "希诺宁"
  | (string & {});

/**
 * 路径点到达动作
 * @since 0.43.1
 */
export type WaypointAction =
  | "stop_flying" // 下落攻击
  | "force_tp" // 当前点传送
  | "nahida_collect" // 纳西妲长按 E 收集
  | "pick_around" // 周围拾取
  | "fight" // 战斗
  | "up_down_grab_leaf" // 四叶印
  | "hydro_collect" // 水元素力采集
  | "electro_collect" // 雷元素力采集
  | "anemo_collect" // 风元素力采集
  | "pyro_collect" // 火元素力采集
  | "combat_script" // 战斗策略脚本
  | "mining" // 挖矿
  | "linnea_mining" // 莉奈娅挖矿
  | "log_output" // 输出日志
  | "fishing" // 钓鱼
  | "exit_and_relogin" // 退出并重新登录
  | "wonderland_cycle" // 进出千星奇域
  | "set_time" // 设置时间
  | "use_gadget" // 使用小道具
  | "pick_up_collect" // 聚集材料
  | (string & {});

/**
 * 路径异常识别处理方式
 * @since 0.43.1
 */
export type MisidentificationHandlingMode =
  | "previousDetectedPoint" // 使用上一识别点
  | "mapRecognition" // 大地图识别
  | "ScheduledArrival" // 定时到达
  | (string & {});

/**
 * 路径异常识别触发类型
 * @since 0.43.1
 */
export type MisidentificationTriggerType =
  | "unrecognized" // 未识别
  | "pathTooFar" // 路径过远
  | (string & {});

/**
 * 路径点怪物标签
 * @since 0.43.1
 */
export type MonsterTag =
  | "normal" // 小怪
  | "elite" // 精英
  | "legendary" // 传奇
  | (string & {});

declare global {
  namespace BetterGenshinImpact.GameTask.AutoPathing {
    type HurryOnAvatar = import("./PathingScriptNames").HurryOnAvatar;
    type MainAvatarIndex = import("./PathingScriptNames").MainAvatarIndex;
    type MisidentificationHandlingMode =
      import("./PathingScriptNames").MisidentificationHandlingMode;
    type MisidentificationTriggerType = import("./PathingScriptNames").MisidentificationTriggerType;
    type MonsterTag = import("./PathingScriptNames").MonsterTag;
    type MoveMode = import("./PathingScriptNames").MoveMode;
    type TravelMode = import("./PathingScriptNames").TravelMode;
    type WaypointAction = import("./PathingScriptNames").WaypointAction;
    type WaypointPointType = import("./PathingScriptNames").WaypointPointType;
  }
}

export {};
