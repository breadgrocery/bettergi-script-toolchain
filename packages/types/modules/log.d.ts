declare global {
  namespace log {
    /**
     * 输出调试信息
     * @param message 调试信息（支持占位符）
     * @param args 占位参数
     * @since 0.32
     */
    function debug(message?: string, ...args: any[]): void;

    /**
     * 输出提示信息
     * @param message 提示信息（支持占位符）
     * @param args 占位参数
     * @since 0.32
     */
    function info(message?: string, ...args: any[]): void;

    /**
     * 输出警告信息
     * @param message 警告信息（支持占位符）
     * @param args 占位参数
     * @since 0.32
     */
    function warn(message?: string, ...args: any[]): void;

    /**
     * 输出错误信息
     * @param message 错误信息（支持占位符）
     * @param args 占位参数
     * @since 0.32
     */
    function error(message?: string, ...args: any[]): void;
  }
}

export {};
