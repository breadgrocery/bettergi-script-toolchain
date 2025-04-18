import { Point2f } from "mirada/dist/src/types/opencv";
import { Area, Country } from "../enums/country";

declare global {
  namespace genshin {
    /**
     * 游戏宽度
     * @since 0.35
     */
    var width: number;

    /**
     * 游戏高度
     * @since 0.35
     */
    var height: number;

    /**
     * 游戏窗口大小相比1080P的缩放比例
     * @since 0.35
     */
    var scaleTo1080PRatio: number;

    /**
     * 系统屏幕的DPI缩放比例
     * @since 0.35
     */
    var screenDpiScale: number;

    /**
     * 传送到指定位置
     * @param x 目标水平位置（像素）
     * @param y 目标垂直位置（像素）
     * @since 0.32
     */
    function tp(x: number, y: number): Promise<void>;

    /**
     * 传送到指定位置
     * @param x 目标水平位置（像素）
     * @param y 目标垂直位置（像素）
     * @param force 是否强制（严格）传送（默认值：false）
     * @since 0.36
     */
    function tp(x: number, y: number, force: boolean): Promise<void>;

    /**
     * 传送到指定位置
     * @param x 目标水平位置（像素）
     * @param y 目标垂直位置（像素）
     * @since 0.34
     */
    function tp(x: string, y: string): Promise<void>;

    /**
     * 传送到指定位置
     * @param x 目标水平位置（像素）
     * @param y 目标垂直位置（像素）
     * @param force 是否强制（严格）传送（默认值：false）
     * @since 0.36
     */
    function tp(x: string, y: string, force: boolean): Promise<void>;

    /**
     * 移动大地图到指定坐标
     * @param x 目标水平位置（像素）
     * @param y 目标垂直位置（像素）
     * @param forceCountry 强制指定移动大地图时先切换的国家（默认值：无）
     * @since 0.44.3
     */
    function moveMapTo(x: number, y: number, forceCountry?: Area): Promise<void>;

    /**
     * 获取当前大地图缩放等级
     * @returns 大地图缩放等级（1.0-6.0）
     * @since 0.44.3
     */
    function getBigMapZoomLevel(): number;

    /**
     * 设置大地图缩放等级
     * @param zoomLevel 大地图缩放等级（1.0-6.0）
     * @since 0.44.3
     */
    function setBigMapZoomLevel(zoomLevel: number): Promise<void>;

    /**
     * 传送到七天神像
     * @since 0.44.3
     */
    function tpToStatueOfTheSeven(): Promise<void>;

    /**
     * 获取当前在大地图上的位置坐标
     * @since 0.44.3
     */
    function getPositionFromBigMap(): Point2f;

    /**
     * 获取当前在小地图上的位置坐标
     * @since 0.44.3
     */
    function getPositionFromMap(): Point2f;

    /**
     * 切换队伍
     * @param partyName 队伍名称
     * @since 0.36
     */
    function switchParty(partyName: string): Promise<void>;

    /**
     * 点击空月祝福
     * @param partyName 队伍名称
     * @since 0.38
     */
    function blessingOfTheWelkinMoon(): Promise<void>;

    /**
     * 持续对话并选择目标选项
     * @param option 选项文本
     * @param skipTimes 跳过次数（默认值：10）
     * @param isOrange 是否为橙色选项（默认值：false）
     * @since 0.38
     */
    function chooseTalkOption(
      option: string,
      skipTimes?: number,
      isOrange?: boolean
    ): Promise<void>;

    /**
     * 领取纪行奖励
     * @since 0.38
     */
    function claimBattlePassRewards(): Promise<void>;

    /**
     * 领取长效历练点奖励
     * @since 0.38
     */
    function claimEncounterPointsRewards(): Promise<void>;

    /**
     * 前往冒险家协会领取奖励
     * @param country 国家名称
     * @since 0.38
     */
    function goToAdventurersGuild(country: Country): Promise<void>;

    /**
     * 前往合成台
     * @param country 国家名称
     * @since 0.38
     */
    function goToCraftingBench(country: Country): Promise<void>;

    /**
     * 返回主界面
     * @since 0.38
     */
    function returnMainUi(): Promise<void>;

    /**
     * 自动钓鱼
     * @param fishingTimePolicy 钓鱼时间策略（0：全天，1：白天，2：夜晚，3：不调）
     * @since 0.43
     */
    function autoFishing(fishingTimePolicy: number): Promise<void>;

    /**
     * 重新登录
     * @since 0.44
     */
    function relogin(): Promise<void>;
  }
}

export {};
