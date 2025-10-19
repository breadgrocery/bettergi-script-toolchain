namespace bettergi {
  export interface BetterGI {
    /**
     * 是否启用 BetterGI 脚本安装
     * @default true
     */
    enable?: boolean;

    /**
     * BetterGI 安装位置，用于输出脚本到其 `User/JsScript` 目录下
     * @default 读取系统注册表获取
     */
    installPath?: string;

    /**
     * BetterGI 脚本位置，用于输出脚本到该目录下
     * @default ${installPath}/User/JsScript
     */
    scriptPath?: string;

    /**
     * 输出脚本文件夹
     * @default package.json 的 `name` 字段
     */
    outDir?: string;
  }
}
namespace manifest {
  export interface Manifest {
    /**
     * 清单版本
     * @default 1
     */
    manifest_version?: number;

    /**
     * 脚本名称
     * @default package.json 的 `name` 字段
     */
    name?: string;

    /**
     * 脚本版本
     * @default package.json 的 `version` 字段
     *  */
    version?: string;

    /**
     * 适用于 BetterGI 的最低版本，BetterGI低于此版本会提示
     * @default 当前开发人员所使用的版本，从 ${installPath}/User/config.json 文件中读取 `commonConfig.runForVersion`
     * */
    bgi_version?: string;

    /**
     * 脚本描述
     * @default package.json 的 `description` 字段
     *  */
    description?: string;

    /** 作者信息 */
    authors?: Author[];

    /**
     * @deprecated 已弃用
     */
    scripts?: string[];

    /** external 类库（仅支持 CommonJS ） */
    library?: string[];

    /** 订阅/导入新版脚本时，备份并恢复旧版脚本的 文件（夹） 列表 */
    saved_files?: string[];

    /** 允许请求的 URL 列表（支持通配符） */
    http_allowed_urls?: string[];
  }

  interface Author {
    /** 作者名称 */
    name: string;

    /** 作者主页 */
    link?: string;
  }
}

namespace settings {
  interface Control<T> {
    /** 变量名 */
    name: string;

    /** 显示标签 */
    label: string;

    /** 默认值 */
    default?: T;
  }

  interface TextBox extends Control<string> {
    /** 输入框 */
    type: "input-text";
  }

  interface ComboBox extends Control<string> {
    type: "select";
    options: string[];
  }

  interface CheckBox extends Control<boolean> {
    /** 勾选框 */
    type: "checkbox";
  }

  export type SettingItem = TextBox | ComboBox | CheckBox;
}

export interface ScriptConfig {
  /**
   * 脚本文件
   * @default `main.ts`
   */
  main?: string;

  /**
   * 资源文件目录
   * @default `assets`
   */
  assetsDir?: string;

  /**
   * 输出路径
   * @default `dist`
   */
  outDir?: string;

  /**
   * 启用脚本压缩
   * @default false
   */
  minify?: boolean;

  /** BetterGI 调试配置 */
  bettergi?: bettergi.BetterGI;

  /** Manifest 信息 */
  manifest?: manifest.Manifest;

  /** UI 配置 */
  settings?: settings.SettingItem[];
}

export const defineConfig = (config: ScriptConfig): ScriptConfig => {
  return config;
};

export type Settings = settings.SettingItem[];

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends bigint
        ? bigint
        : T extends symbol
          ? symbol
          : T;

/**
 * 提取设置参数名称
 */
export type ExtractSettingsMap<T extends readonly { name: string; default?: any }[]> = {
  [K in T[number] as K["name"]]: Widen<K["default"]>;
};
