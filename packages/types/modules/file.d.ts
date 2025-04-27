import { Mat } from "mirada/dist/src/types/opencv";

declare global {
  namespace file {
    /**
     * 读取指定文件夹内所有文件和文件夹的路径（非递归方式）
     * @param folderPath 文件路径（相对于脚本根目录）
     * @since 0.44.8
     */
    function readPathSync(folderPath: string): string[];

    /**
     * 判断指定路径是否为文件夹
     * @param path 文件路径（相对于脚本根目录）
     * @since 0.44.8
     */
    function isFolder(path: string): boolean;

    /**
     * 读取文件文本（支持文件扩展名：`.txt`, `.json`, `.log`, `.csv`, `.xml`, `.html`, `.css`）
     * @param path 文件路径（相对于脚本根目录）
     * @since 0.33
     */
    function readTextSync(path: string): string;

    /**
     * 读取文件文本（支持文件扩展名：`.txt`, `.json`, `.log`, `.csv`, `.xml`, `.html`, `.css`）
     * @param path 文件路径（相对于脚本根目录）
     * @since 0.33
     */
    function readText(path: string): Promise<string>;

    /**
     * 读取文件文本（支持文件扩展名：`.txt`, `.json`, `.log`, `.csv`, `.xml`, `.html`, `.css`）
     * @param path 文件路径（相对于脚本根目录）
     * @param callbackFunc 回调函数
     * @since 0.33
     */
    function readText(
      path: string,
      callbackFunc: (ex?: string, ret?: string) => void
    ): Promise<string>;

    /**
     * 读取Mat图片
     * @param path 文件路径（相对于脚本根目录）
     * @since 0.34
     */
    function readImageMatSync(path: string): Mat;

    /**
     * 输出文本文件
     * @param path 文件路径（相对于脚本根目录，会自动创建目录）
     * @param content 文件内容（不能超过999MB）
     * @param append 是否追加内容（默认值：false）
     * @since 0.44.4
     */
    function writeTextSync(path: string, content: string, append?: boolean): boolean;

    /**
     * 输出文本文件
     * @param path 文件路径（相对于脚本根目录，会自动创建目录）
     * @param content 文件内容（不能超过999MB）
     * @param append 是否追加内容（默认值：false）
     * @since 0.44.4
     */
    function writeText(path: string, content: string, append?: boolean): Promise<boolean>;

    /**
     *
     * @param path 文件路径（相对于脚本根目录，会自动创建目录）
     * @param content 文件内容（不能超过999MB）
     * @param callbackFunc 回调函数
     * @param append 是否追加内容（默认值：false）
     * @since 0.44.4
     */
    function writeText(
      path: string,
      content: string,
      callbackFunc: (ex?: string, ret?: string) => void,
      append?: boolean
    ): Promise<boolean>;
  }
}

export {};
