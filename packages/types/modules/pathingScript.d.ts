declare global {
  /** @since 0.32.6 */
  namespace pathingScript {
    /**
     * 运行[地图追踪]任务
     * @param json [地图追踪]的JSON字符串
     * @since 0.32.6
     */
    function run(json: string): Promise<void>;

    /**
     * 运行[地图追踪]任务
     * @param path [地图追踪]的JSON文件路径
     * @since 0.32.6
     */
    function runFile(path: string): Promise<void>;

    /**
     * 运行[地图追踪]任务
     * @param path 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @since 0.37.4
     */
    function runFileFromUser(path: string): Promise<void>;
  }
}

export {};
