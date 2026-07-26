/**
 * settings 由各脚本的 settings.ts 声明具体形状（`var settings: GlobalSettings`）
 * 运行时始终注入 ExpandoObject；此处只保证相关类型模块被入口加载
 * @since 0.43.1
 */
import "../types/BetterGI/ScriptSettings";

export {};
