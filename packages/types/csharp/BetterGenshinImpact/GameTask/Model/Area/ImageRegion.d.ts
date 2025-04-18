import { Mat, Rect } from "mirada/dist/src/types/opencv";
import { List } from "../../../../System/Collections/Generic/List";
import { Bitmap } from "../../../../System/Drawing/Bitmap";
import { RecognitionObject } from "../../../Core/Recognition/RecognitionObject";
import { Region } from "./Region";

export interface ImageRegion extends Region {
  /**
   * 存储原始图像的位图(Bitmap)数据结构
   */
  srcBitmap: Bitmap;

  /**
   * 使用OpenCV矩阵(Mat)格式存储的彩色图像数据
   */
  srcMat: Mat;

  /**
   * 将彩色图像转换后的灰度矩阵(Mat)数据
   */
  srcGreyMat: Mat;

  /** 剪裁派生 */
  deriveCrop: {
    (x: number, y: number, w: number, h: number): ImageRegion;

    (rect: Rect): ImageRegion;
  };

  /**
   * 在本区域内查找最优识别对象
   * @param ro 识别对象
   * @param successAction 识别成功回调
   * @param failAction 识别失败回调
   */
  find: (ro: RecognitionObject, successAction?: () => Region, failAction?: () => void) => Region;

  /**
   * 在本区域内查找识别对象，返回所有找到的结果
   * @param ro 识别对象
   * @param successAction  识别成功回调
   * @param failAction  识别失败回调
   * @returns
   */
  findMulti: (
    ro: RecognitionObject,
    successAction?: () => List<Region>,
    failAction?: () => void
  ) => List<Region>;
}
