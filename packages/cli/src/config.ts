import { type BuildOptions, type OutputOptions } from "rolldown";

export namespace manifest {
  export interface Manifest extends ScriptWebRenderItem {
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

    /**
     * 作者信息
     * @default package.json 的 `author` 和 `contributors` 字段
     */
    authors?: Author[];

    /**
     * @deprecated 已弃用
     */
    scripts?: string[];

    /** external 类库 */
    library?: string[];

    /** 脚本升级时需保留还原的 文件/文件夹 列表（支持正则表达式与通配符） */
    saved_files?: string[];

    /** 允许请求的 URL 列表（支持通配符） */
    http_allowed_urls?: string[];
  }

  // https://github.com/zaodonganqi/bettergi-script-web
  export interface ScriptWebRenderItem {
    /**
     * 标签列表
     * @default package.json 的 `keywords` 字段
     */
    tags?: string[];
  }

  export interface Author {
    /** 作者名称 */
    name: string;

    /** 作者主页/项目地址 */
    link?: string;
  }
}

export namespace settings {
  export type SettingItem = Separator | TextBox | ComboBox | CheckBox | MultiCheckbox;

  export interface Component {
    type: string;
  }

  export interface Separator extends Component {
    /**
     * 分隔符
     * @since 0.55.0
     */
    type: "separator";
  }

  /** 控件 */
  export interface Control<TValue> extends Component {
    /** 参数名 */
    name: string;

    /** 显示标签 */
    label: string;

    /** 默认值 */
    default?: TValue;
  }

  export interface TextBox extends Control<string> {
    /**
     * 输入框
     * @since 0.33.3
     */
    type: "input-text";
  }

  export interface ComboBox extends Control<string> {
    /**
     * 下拉框
     * @since 0.33.3
     */
    type: "select";
    options: string[];
  }

  export interface CheckBox extends Control<boolean> {
    /**
     * 勾选框
     * @since 0.33.3
     */
    type: "checkbox";
  }

  export interface MultiCheckbox extends Control<string[]> {
    /**
     * 多选框
     * @since 0.55.0
     */
    type: "multi-checkbox";
    options: string[];
  }
}

export namespace bettergi {
  export interface BetterGI {
    /**
     * 是否安装脚本到 BetterGI 脚本目录
     * @default true
     */
    enable?: boolean;

    /**
     * BetterGI 安装位置，用于输出脚本到其 `User/JsScript` 目录下
     * @default 读取系统注册表获取
     */
    installPath?: string;

    /**
     * BetterGI 脚本目录，用于输出脚本到该目录下
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
   * 构建输出路径
   * @default `dist`
   */
  outDir?: string;

  /**
   * 额外打包文件（支持通配符）
   * @default `README.md` 和 `LICENSE`
   */
  additionalFiles?:
    | string
    | {
        from: string;
        to?: string;
      }
    | (
        | string
        | {
            from: string;
            to?: string;
          }
      )[];

  /** 加载器配置 */
  loaders?: {
    /** 图片加载器配置 */
    image?: {
      /**
       * 图片基础目录
       * @default `assets`
       */
      baseDir?: string;
    };
  };

  /**
   * 启用代码分割
   * @default true
   */
  codeSplitting?: boolean;

  /**
   * 代码分割分组
   */
  chunkGroups?: NonNullable<OutputOptions["codeSplitting"]>["groups"];

  /**
   * Tree Shaking
   */
  treeshake?: BuildOptions["treeshake"];

  /**
   * 启用脚本压缩
   * @default false
   */
  minify?: boolean;

  /**
   * 文件头部注释
   * @default true
   */
  banner?: boolean | string;

  /**
   * 监听文件变化（支持通配符）
   * 固定监听文件：[ `脚本入口文件`, `package.json`, `资源文件目录` ]
   */
  watch?: string[];

  /** Manifest 信息 */
  manifest?: manifest.Manifest;

  /** UI 配置 */
  settings?: settings.SettingItem[];

  /** BetterGI 调试配置 */
  bettergi?: bettergi.BetterGI;
}

export const defineConfig = (config: ScriptConfig): ScriptConfig => {
  return config;
};

export type Settings = settings.SettingItem[];

export type BaseType<T> = T extends readonly (infer U)[]
  ? BaseType<U>[]
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends bigint
          ? bigint
          : T;
/**
 * 提取设置参数类型映射
 */
export type ExtractSettingsMap<T extends readonly settings.Component[]> = Partial<{
  [K in Extract<T[number], settings.Control<any>> as Extract<K["name"], PropertyKey>]: BaseType<
    K["default"]
  >;
}>;
