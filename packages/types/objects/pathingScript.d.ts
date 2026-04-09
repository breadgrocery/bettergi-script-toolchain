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

    /**
     * 判断 AutoPathing 目录下的路径是否存在
     * @param subPath 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @since 0.58.0
     */
    function isExists(subPath: string): boolean;

    /**
     * 判断 AutoPathing 目录下的路径是否为文件夹
     * @param subPath 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @since 0.58.0
     */
    function isFile(subPath: string): boolean;

    /**
     * 判断 AutoPathing 目录下的路径是否为文件夹
     * @param subPath 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @since 0.58.0
     */
    function isFolder(subPath: string): boolean;

    /**
     * 读取 AutoPathing 目录下指定文件夹的内容（非递归方式）
     * @param subPath 相对于已订阅的内容目录 `\User\AutoPathing` 的JSON文件路径
     * @returns 文件夹内所有文件和文件夹的相对路径数组，出错时返回空数组
     * @since 0.58.0
     */
    function readPathSync(subPath: string): string[];
  }
}

export {};
