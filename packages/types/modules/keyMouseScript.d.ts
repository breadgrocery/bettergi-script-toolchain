declare global {
  namespace keyMouseScript {
    /**
     * 运行[录像回放]任务
     * @param json [录像回放]的JSON字符串
     * @since 0.33
     */
    function run(json: string): Promise<void>;

    /**
     * 运行[录像回放]任务
     * @param path [录像回放]的JSON文件路径
     * @since 0.33
     */
    function runFile(path: string): Promise<void>;
  }
}

export {};
