import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../Microsoft/ClearScript/HostType";
import "../../../../OpenCvSharp/Mat";

/**
 * 受限工作区文件访问
 * @since 0.43.1
 */
declare const limitedFileBrand: unique symbol;
export interface LimitedFile extends ClrHostValue {
  readonly [limitedFileBrand]: true;
  /**
   * 读取指定文件夹内所有文件与子文件夹的非递归路径列表
   * 目录不存在时返回空数组
   * @param folderPath 相对工作区的目录路径
   * @returns 文件夹内文件与子文件夹的相对路径数组
   * @since 0.45.1
   */
  readPathSync(folderPath: string): HostArray<string>;
  /**
   * 创建指定路径的目录，已存在时跳过
   * @param folderPath 相对工作区的目录路径
   * @returns 是否创建成功或目录已存在
   * @since 0.61.0
   */
  createDirectory(folderPath: string): boolean;
  /**
   * 检查指定路径是否为文件夹
   * @param path 相对工作区的文件或目录路径
   * @returns 是否为文件夹
   * @since 0.45.1
   */
  isFolder(path: string): boolean;
  /**
   * 检查指定路径是否为文件
   * @param path 相对工作区的文件路径
   * @returns 是否为文件
   * @since 0.58.0
   */
  isFile(path: string): boolean;
  /**
   * 检查指定文件或目录是否存在
   * @param path 相对工作区的文件或目录路径
   * @returns 是否存在
   * @since 0.58.0
   */
  isExists(path: string): boolean;
  /**
   * 同步读取文件全部文本
   * 读取失败时返回空字符串
   * @param path 相对工作区的文件路径
   * @returns 文件文本内容
   * @since 0.43.1
   */
  readTextSync(path: string): string;
  /**
   * 异步读取文件全部文本
   * 读取失败时通过回调传入错误并返回空字符串
   * @param path 相对工作区的文件路径
   * @param callbackFunc 脚本回调 `(error, text)`；成功时 `error` 为 null，失败时 `text` 为 null
   * @returns 在任务完成后兑现文件文本的 Promise
   * @since 0.43.1
   */
  readText(
    path: string,
    callbackFunc: (error: string | null, text: string | null) => void
  ): Promise<string>;
  /**
   * 异步读取文件全部文本
   * 读取失败时返回空字符串
   * @param path 相对工作区的文件路径
   * @returns 在任务完成后兑现文件文本的 Promise
   * @since 0.43.1
   */
  readText(path: string): Promise<string>;
  /**
   * 同步读取图像文件为 Mat
   * 读取失败时返回空 Mat
   * @param path 相对工作区的图像文件路径
   * @returns 彩色 Mat 图像
   * @since 0.44.3
   */
  readImageMatSync(path: string): OpenCvSharp.Mat;
  /**
   * 同步读取图像文件为 Mat 并调整到指定尺寸
   * 插值算法：0 最近邻、1 双线性（默认）、2 双三次、3 像素区域关系重采样、4 Lanczos、5 精确双线性
   * 读取失败时返回空 Mat
   * @param path 相对工作区的图像文件路径
   * @param width 调整后的宽度
   * @param height 调整后的高度
   * @param interpolation 插值算法，默认为双线性插值 (1)
   * @returns 调整尺寸后的 Mat 图像
   * @since 0.54.0
   */
  readImageMatWithResizeSync(
    path: string,
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Mat;
  readImageMatWithResizeSync(
    path: string,
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>,
    interpolation: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Mat;
  /**
   * 同步写入文本到文件
   * @param path 相对工作区的文件路径
   * @param content 要写入的内容
   * @param append 是否追加到文件末尾，默认为 false（覆盖）
   * @returns 是否写入成功
   * @since 0.44.4
   */
  writeTextSync(path: string, content: string): boolean;
  writeTextSync(path: string, content: string, append: boolean): boolean;
  /**
   * 异步写入文本到文件
   * @param path 相对工作区的文件路径
   * @param content 要写入的内容
   * @param append 是否追加到文件末尾，默认为 false（覆盖）
   * @returns 在任务完成后兑现是否写入成功的 Promise
   * @since 0.44.4
   */
  writeText(path: string, content: string): Promise<boolean>;
  /**
   * 异步写入文本到文件并触发回调
   * @param path 相对工作区的文件路径
   * @param content 要写入的内容
   * @param callbackFunc 脚本回调 `(error, success)`；成功时 `error` 为 null，失败时 `success` 为 null
   * @param append 是否追加到文件末尾，默认为 false（覆盖）
   * @returns 在任务完成后兑现是否写入成功的 Promise
   * @since 0.44.4
   */
  writeText(
    path: string,
    content: string,
    callbackFunc: (error: string | null, success: boolean | null) => void
  ): Promise<boolean>;
  writeText(path: string, content: string, append: boolean): Promise<boolean>;
  writeText(
    path: string,
    content: string,
    callbackFunc: (error: string | null, success: boolean | null) => void,
    append: boolean
  ): Promise<boolean>;
  /**
   * 同步写入图片到文件，默认 PNG 格式
   * 路径缺少图片扩展名时自动追加 .png
   * @param path 相对工作区的文件路径
   * @param mat OpenCV Mat 图像
   * @returns 是否写入成功
   * @since 0.49.0
   */
  writeImageSync(path: string, mat: OpenCvSharp.Mat): boolean;
  /**
   * 重命名文件或文件夹
   * @param oldPath 相对工作区的原路径
   * @param newPath 相对工作区的新路径
   * @returns 是否重命名成功
   * @since 0.59.1
   */
  renamePathSync(oldPath: string, newPath: string): boolean;
}

declare global {
  namespace BetterGenshinImpact.Core.Script.Dependence {
    type LimitedFile = import("./LimitedFile").LimitedFile;
  }
}

export interface LimitedFileHostType extends HostType<LimitedFile, ReferenceTypeTrait> {
  /**
   * 构造实例
   * @param rootPath 工作区根路径
   * @since 0.43.1
   */
  new (rootPath: string): LimitedFile;
}

export {};
