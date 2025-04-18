declare global {
  namespace pathingScript {
    /**
     * 运行[地图追踪]任务
     * @param json [地图追踪]的JSON字符串
     * @since 0.33
     */
    function run(json: string): Promise<void>;

    /**
     * 运行[地图追踪]任务
     * @param path [地图追踪]的JSON文件路径
     * @since 0.33
     */
    function runFile(path: string): Promise<void>;

    /**
     * 运行[地图追踪]任务
     * @param path 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @since 0.38
     */
    function runFileFromUser(path: string): Promise<void>;
  }
}

export {};
