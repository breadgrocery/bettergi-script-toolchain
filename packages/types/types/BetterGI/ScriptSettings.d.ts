/**
 * 脚本 settings 动态配置面参考
 *
 * 具体字段提示由各脚本 settings.ts 中的 `var settings: GlobalSettings` 声明
 * @since 0.43.1
 */
declare global {
  namespace BetterGI {
    /**
     * 脚本 settings 动态配置面，字段由脚本 settings.ts 合并扩展
     * @since 0.43.1
     */
    interface ScriptSettings {
      [key: string]: unknown;
      equals?(obj: unknown): boolean;
      getHashCode?(): number;
      toString?(): string;
    }
  }
}

export {};
