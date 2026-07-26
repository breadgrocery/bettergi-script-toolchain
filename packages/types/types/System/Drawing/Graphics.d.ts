import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IDisposable";
import "../IntPtr";
import "../MarshalByRefObject";
import "../MulticastDelegate";
import "../Numerics/Matrix3x2";
import "../Runtime/Serialization/ISerializable";
import "./Brush";
import "./Color";
import "./CopyPixelOperation";
import "./Drawing2D/CombineMode";
import "./Drawing2D/CompositingMode";
import "./Drawing2D/CompositingQuality";
import "./Drawing2D/CoordinateSpace";
import "./Drawing2D/FillMode";
import "./Drawing2D/FlushIntention";
import "./Drawing2D/GraphicsContainer";
import "./Drawing2D/GraphicsPath";
import "./Drawing2D/GraphicsState";
import "./Drawing2D/InterpolationMode";
import "./Drawing2D/Matrix";
import "./Drawing2D/MatrixOrder";
import "./Drawing2D/PixelOffsetMode";
import "./Drawing2D/SmoothingMode";
import "./Font";
import "./GraphicsUnit";
import "./IDeviceContext";
import "./Icon";
import "./Image";
import "./Imaging/CachedBitmap";
import "./Imaging/EmfPlusRecordType";
import "./Imaging/ImageAttributes";
import "./Imaging/Metafile";
import "./Imaging/PlayRecordCallback";
import "./Pen";
import "./Point";
import "./PointF";
import "./Rectangle";
import "./RectangleF";
import "./Region";
import "./Size";
import "./SizeF";
import "./StringFormat";
import "./Text/TextRenderingHint";

declare const graphicsBrand: unique symbol;
export interface Graphics
  extends
    Omit<
      System.MarshalByRefObject,
      | "addMetafileComment"
      | "beginContainer"
      | "clear"
      | "clip"
      | "clipBounds"
      | "compositingMode"
      | "compositingQuality"
      | "copyFromScreen"
      | "dispose"
      | "dpiX"
      | "dpiY"
      | "drawArc"
      | "drawBezier"
      | "drawBeziers"
      | "drawCachedBitmap"
      | "drawClosedCurve"
      | "drawCurve"
      | "drawEllipse"
      | "drawIcon"
      | "drawIconUnstretched"
      | "drawImage"
      | "drawImageUnscaled"
      | "drawImageUnscaledAndClipped"
      | "drawLine"
      | "drawLines"
      | "drawPath"
      | "drawPie"
      | "drawPolygon"
      | "drawRectangle"
      | "drawRectangles"
      | "drawString"
      | "endContainer"
      | "enumerateMetafile"
      | "excludeClip"
      | "fillClosedCurve"
      | "fillEllipse"
      | "fillPath"
      | "fillPie"
      | "fillPolygon"
      | "fillRectangle"
      | "fillRectangles"
      | "fillRegion"
      | "flush"
      | "getContextInfo"
      | "getHdc"
      | "getNearestColor"
      | "interpolationMode"
      | "intersectClip"
      | "isClipEmpty"
      | "isVisible"
      | "isVisibleClipEmpty"
      | "measureCharacterRanges"
      | "measureString"
      | "measureStringInternal"
      | "multiplyTransform"
      | "pageScale"
      | "pageUnit"
      | "pixelOffsetMode"
      | "releaseHdc"
      | "releaseHdcInternal"
      | "renderingOrigin"
      | "resetClip"
      | "resetTransform"
      | "restore"
      | "rotateTransform"
      | "save"
      | "scaleTransform"
      | "setClip"
      | "smoothingMode"
      | "textContrast"
      | "textRenderingHint"
      | "transform"
      | "transformElements"
      | "transformPoints"
      | "translateClip"
      | "translateTransform"
      | "visibleClipBounds"
    >,
    System.IDisposableInput,
    System.Drawing.IDeviceContextInput {
  readonly [graphicsBrand]: true;
  addMetafileComment(data: HostArray<number | StrongNumeric<ByteHost>>): VoidResult;
  beginContainer(): System.Drawing.Drawing2D.GraphicsContainer;
  beginContainer(
    dstrect: System.Drawing.Rectangle,
    srcrect: System.Drawing.Rectangle,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): System.Drawing.Drawing2D.GraphicsContainer;
  beginContainer(
    dstrect: System.Drawing.RectangleF,
    srcrect: System.Drawing.RectangleF,
    unit: EnumInput<System.Drawing.GraphicsUnit>
  ): System.Drawing.Drawing2D.GraphicsContainer;
  clear(color: System.Drawing.Color): VoidResult;
  clip: System.Drawing.Region;
  compositingMode: System.Drawing.Drawing2D.CompositingMode;
  compositingQuality: System.Drawing.Drawing2D.CompositingQuality;
  copyFromScreen(
    sourceX: number | StrongNumeric<Int32Host>,
    sourceY: number | StrongNumeric<Int32Host>,
    destinationX: number | StrongNumeric<Int32Host>,
    destinationY: number | StrongNumeric<Int32Host>,
    blockRegionSize: System.Drawing.Size
  ): VoidResult;
  copyFromScreen(
    sourceX: number | StrongNumeric<Int32Host>,
    sourceY: number | StrongNumeric<Int32Host>,
    destinationX: number | StrongNumeric<Int32Host>,
    destinationY: number | StrongNumeric<Int32Host>,
    blockRegionSize: System.Drawing.Size,
    copyPixelOperation: EnumInput<System.Drawing.CopyPixelOperation>
  ): VoidResult;
  copyFromScreen(
    upperLeftSource: System.Drawing.Point,
    upperLeftDestination: System.Drawing.Point,
    blockRegionSize: System.Drawing.Size
  ): VoidResult;
  copyFromScreen(
    upperLeftSource: System.Drawing.Point,
    upperLeftDestination: System.Drawing.Point,
    blockRegionSize: System.Drawing.Size,
    copyPixelOperation: EnumInput<System.Drawing.CopyPixelOperation>
  ): VoidResult;
  dispose(): VoidResult;
  drawArc(
    pen: System.Drawing.Pen,
    rect: System.Drawing.Rectangle,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawArc(
    pen: System.Drawing.Pen,
    rect: System.Drawing.RectangleF,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawArc(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    startAngle: number | StrongNumeric<Int32Host>,
    sweepAngle: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawArc(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawBezier(
    pen: System.Drawing.Pen,
    pt1: System.Drawing.Point,
    pt2: System.Drawing.Point,
    pt3: System.Drawing.Point,
    pt4: System.Drawing.Point
  ): VoidResult;
  drawBezier(
    pen: System.Drawing.Pen,
    pt1: System.Drawing.PointF,
    pt2: System.Drawing.PointF,
    pt3: System.Drawing.PointF,
    pt4: System.Drawing.PointF
  ): VoidResult;
  drawBezier(
    pen: System.Drawing.Pen,
    x1: number | StrongNumeric<SingleHost>,
    y1: number | StrongNumeric<SingleHost>,
    x2: number | StrongNumeric<SingleHost>,
    y2: number | StrongNumeric<SingleHost>,
    x3: number | StrongNumeric<SingleHost>,
    y3: number | StrongNumeric<SingleHost>,
    x4: number | StrongNumeric<SingleHost>,
    y4: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawBeziers(pen: System.Drawing.Pen, ...points: System.Drawing.PointF[]): VoidResult;
  drawBeziers(pen: System.Drawing.Pen, ...points: System.Drawing.Point[]): VoidResult;
  drawBeziers(pen: System.Drawing.Pen, points: HostArray<System.Drawing.Point>): VoidResult;
  drawBeziers(pen: System.Drawing.Pen, points: HostArray<System.Drawing.PointF>): VoidResult;
  drawCachedBitmap(
    cachedBitmap: System.Drawing.Imaging.CachedBitmap,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawClosedCurve(pen: System.Drawing.Pen, ...points: System.Drawing.PointF[]): VoidResult;
  drawClosedCurve(pen: System.Drawing.Pen, ...points: System.Drawing.Point[]): VoidResult;
  drawClosedCurve(pen: System.Drawing.Pen, points: HostArray<System.Drawing.Point>): VoidResult;
  drawClosedCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.Point>,
    tension: number | StrongNumeric<SingleHost>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  drawClosedCurve(pen: System.Drawing.Pen, points: HostArray<System.Drawing.PointF>): VoidResult;
  drawClosedCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.PointF>,
    tension: number | StrongNumeric<SingleHost>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  drawCurve(pen: System.Drawing.Pen, ...points: System.Drawing.PointF[]): VoidResult;
  drawCurve(pen: System.Drawing.Pen, ...points: System.Drawing.Point[]): VoidResult;
  drawCurve(pen: System.Drawing.Pen, points: HostArray<System.Drawing.Point>): VoidResult;
  drawCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.Point>,
    offset: number | StrongNumeric<Int32Host>,
    numberOfSegments: number | StrongNumeric<Int32Host>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.Point>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawCurve(pen: System.Drawing.Pen, points: HostArray<System.Drawing.PointF>): VoidResult;
  drawCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.PointF>,
    offset: number | StrongNumeric<Int32Host>,
    numberOfSegments: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.PointF>,
    offset: number | StrongNumeric<Int32Host>,
    numberOfSegments: number | StrongNumeric<Int32Host>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawCurve(
    pen: System.Drawing.Pen,
    points: HostArray<System.Drawing.PointF>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawEllipse(pen: System.Drawing.Pen, rect: System.Drawing.Rectangle): VoidResult;
  drawEllipse(pen: System.Drawing.Pen, rect: System.Drawing.RectangleF): VoidResult;
  drawEllipse(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawEllipse(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawIcon(icon: System.Drawing.Icon, targetRect: System.Drawing.Rectangle): VoidResult;
  drawIcon(
    icon: System.Drawing.Icon,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawIconUnstretched(icon: System.Drawing.Icon, targetRect: System.Drawing.Rectangle): VoidResult;
  drawImage(image: System.Drawing.Image, destPoints: HostArray<System.Drawing.Point>): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null,
    callbackData: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImage(image: System.Drawing.Image, destPoints: HostArray<System.Drawing.PointF>): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null,
    callbackData: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<Int32Host>,
    srcY: number | StrongNumeric<Int32Host>,
    srcWidth: number | StrongNumeric<Int32Host>,
    srcHeight: number | StrongNumeric<Int32Host>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<Int32Host>,
    srcY: number | StrongNumeric<Int32Host>,
    srcWidth: number | StrongNumeric<Int32Host>,
    srcHeight: number | StrongNumeric<Int32Host>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<Int32Host>,
    srcY: number | StrongNumeric<Int32Host>,
    srcWidth: number | StrongNumeric<Int32Host>,
    srcHeight: number | StrongNumeric<Int32Host>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<Int32Host>,
    srcY: number | StrongNumeric<Int32Host>,
    srcWidth: number | StrongNumeric<Int32Host>,
    srcHeight: number | StrongNumeric<Int32Host>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttrs: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null,
    callbackData: System.IntPtr
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<SingleHost>,
    srcY: number | StrongNumeric<SingleHost>,
    srcWidth: number | StrongNumeric<SingleHost>,
    srcHeight: number | StrongNumeric<SingleHost>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<SingleHost>,
    srcY: number | StrongNumeric<SingleHost>,
    srcWidth: number | StrongNumeric<SingleHost>,
    srcHeight: number | StrongNumeric<SingleHost>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttrs: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<SingleHost>,
    srcY: number | StrongNumeric<SingleHost>,
    srcWidth: number | StrongNumeric<SingleHost>,
    srcHeight: number | StrongNumeric<SingleHost>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttrs: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.Rectangle,
    srcX: number | StrongNumeric<SingleHost>,
    srcY: number | StrongNumeric<SingleHost>,
    srcWidth: number | StrongNumeric<SingleHost>,
    srcHeight: number | StrongNumeric<SingleHost>,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    imageAttrs: System.Drawing.Imaging.ImageAttributes | null,
    callback: Graphics_DrawImageAbort | null,
    callbackData: System.IntPtr
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    destRect: System.Drawing.RectangleF,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(image: System.Drawing.Image, point: System.Drawing.Point): VoidResult;
  drawImage(image: System.Drawing.Image, point: System.Drawing.PointF): VoidResult;
  drawImage(image: System.Drawing.Image, rect: System.Drawing.Rectangle): VoidResult;
  drawImage(image: System.Drawing.Image, rect: System.Drawing.RectangleF): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>
  ): VoidResult;
  drawImage(
    image: System.Drawing.Image,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawImageUnscaled(image: System.Drawing.Image, point: System.Drawing.Point): VoidResult;
  drawImageUnscaled(image: System.Drawing.Image, rect: System.Drawing.Rectangle): VoidResult;
  drawImageUnscaled(
    image: System.Drawing.Image,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImageUnscaled(
    image: System.Drawing.Image,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawImageUnscaledAndClipped(
    image: System.Drawing.Image,
    rect: System.Drawing.Rectangle
  ): VoidResult;
  drawLine(
    pen: System.Drawing.Pen,
    pt1: System.Drawing.Point,
    pt2: System.Drawing.Point
  ): VoidResult;
  drawLine(
    pen: System.Drawing.Pen,
    pt1: System.Drawing.PointF,
    pt2: System.Drawing.PointF
  ): VoidResult;
  drawLine(
    pen: System.Drawing.Pen,
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawLine(
    pen: System.Drawing.Pen,
    x1: number | StrongNumeric<SingleHost>,
    y1: number | StrongNumeric<SingleHost>,
    x2: number | StrongNumeric<SingleHost>,
    y2: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawLines(pen: System.Drawing.Pen, ...points: System.Drawing.PointF[]): VoidResult;
  drawLines(pen: System.Drawing.Pen, ...points: System.Drawing.Point[]): VoidResult;
  drawLines(pen: System.Drawing.Pen, points: HostArray<System.Drawing.Point>): VoidResult;
  drawLines(pen: System.Drawing.Pen, points: HostArray<System.Drawing.PointF>): VoidResult;
  drawPath(pen: System.Drawing.Pen, path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  drawPie(
    pen: System.Drawing.Pen,
    rect: System.Drawing.Rectangle,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawPie(
    pen: System.Drawing.Pen,
    rect: System.Drawing.RectangleF,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawPie(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    startAngle: number | StrongNumeric<Int32Host>,
    sweepAngle: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawPie(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawPolygon(pen: System.Drawing.Pen, ...points: System.Drawing.PointF[]): VoidResult;
  drawPolygon(pen: System.Drawing.Pen, ...points: System.Drawing.Point[]): VoidResult;
  drawPolygon(pen: System.Drawing.Pen, points: HostArray<System.Drawing.Point>): VoidResult;
  drawPolygon(pen: System.Drawing.Pen, points: HostArray<System.Drawing.PointF>): VoidResult;
  drawRectangle(pen: System.Drawing.Pen, rect: System.Drawing.Rectangle): VoidResult;
  drawRectangle(pen: System.Drawing.Pen, rect: System.Drawing.RectangleF): VoidResult;
  drawRectangle(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  drawRectangle(
    pen: System.Drawing.Pen,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawRectangles(pen: System.Drawing.Pen, ...rects: System.Drawing.RectangleF[]): VoidResult;
  drawRectangles(pen: System.Drawing.Pen, ...rects: System.Drawing.Rectangle[]): VoidResult;
  drawRectangles(pen: System.Drawing.Pen, rects: HostArray<System.Drawing.Rectangle>): VoidResult;
  drawRectangles(pen: System.Drawing.Pen, rects: HostArray<System.Drawing.RectangleF>): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    layoutRectangle: System.Drawing.RectangleF
  ): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    layoutRectangle: System.Drawing.RectangleF,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    point: System.Drawing.PointF
  ): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    point: System.Drawing.PointF,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): VoidResult;
  drawString(
    s: string | null,
    font: System.Drawing.Font,
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  endContainer(container: System.Drawing.Drawing2D.GraphicsContainer): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.Point,
    srcRect: System.Drawing.Rectangle,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoint: System.Drawing.PointF,
    srcRect: System.Drawing.RectangleF,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.Point>,
    srcRect: System.Drawing.Rectangle,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    srcRect: System.Drawing.Rectangle,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.Rectangle,
    srcRect: System.Drawing.Rectangle,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    srcRect: System.Drawing.RectangleF,
    srcUnit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr
  ): VoidResult;
  enumerateMetafile(
    metafile: System.Drawing.Imaging.Metafile,
    destRect: System.Drawing.RectangleF,
    srcRect: System.Drawing.RectangleF,
    unit: EnumInput<System.Drawing.GraphicsUnit>,
    callback: Graphics_EnumerateMetafileProc,
    callbackData: System.IntPtr,
    imageAttr: System.Drawing.Imaging.ImageAttributes | null
  ): VoidResult;
  excludeClip(rect: System.Drawing.Rectangle): VoidResult;
  excludeClip(region: System.Drawing.Region): VoidResult;
  fillClosedCurve(brush: System.Drawing.Brush, ...points: System.Drawing.PointF[]): VoidResult;
  fillClosedCurve(brush: System.Drawing.Brush, ...points: System.Drawing.Point[]): VoidResult;
  fillClosedCurve(brush: System.Drawing.Brush, points: HostArray<System.Drawing.Point>): VoidResult;
  fillClosedCurve(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.Point>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  fillClosedCurve(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.Point>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillClosedCurve(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.PointF>
  ): VoidResult;
  fillClosedCurve(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.PointF>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  fillClosedCurve(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.PointF>,
    fillmode: EnumInput<System.Drawing.Drawing2D.FillMode>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillEllipse(brush: System.Drawing.Brush, rect: System.Drawing.Rectangle): VoidResult;
  fillEllipse(brush: System.Drawing.Brush, rect: System.Drawing.RectangleF): VoidResult;
  fillEllipse(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillEllipse(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillPath(brush: System.Drawing.Brush, path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  fillPie(
    brush: System.Drawing.Brush,
    rect: System.Drawing.Rectangle,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillPie(
    brush: System.Drawing.Brush,
    rect: System.Drawing.RectangleF,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillPie(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    startAngle: number | StrongNumeric<Int32Host>,
    sweepAngle: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillPie(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillPolygon(brush: System.Drawing.Brush, ...points: System.Drawing.PointF[]): VoidResult;
  fillPolygon(brush: System.Drawing.Brush, points: HostArray<System.Drawing.Point>): VoidResult;
  fillPolygon(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.Point>,
    fillMode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  fillPolygon(brush: System.Drawing.Brush, points: HostArray<System.Drawing.PointF>): VoidResult;
  fillPolygon(
    brush: System.Drawing.Brush,
    points: HostArray<System.Drawing.PointF>,
    fillMode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): VoidResult;
  fillRectangle(brush: System.Drawing.Brush, rect: System.Drawing.Rectangle): VoidResult;
  fillRectangle(brush: System.Drawing.Brush, rect: System.Drawing.RectangleF): VoidResult;
  fillRectangle(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  fillRectangle(
    brush: System.Drawing.Brush,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  fillRectangles(brush: System.Drawing.Brush, ...rects: System.Drawing.RectangleF[]): VoidResult;
  fillRectangles(brush: System.Drawing.Brush, ...rects: System.Drawing.Rectangle[]): VoidResult;
  fillRectangles(
    brush: System.Drawing.Brush,
    rects: HostArray<System.Drawing.Rectangle>
  ): VoidResult;
  fillRectangles(
    brush: System.Drawing.Brush,
    rects: HostArray<System.Drawing.RectangleF>
  ): VoidResult;
  fillRegion(brush: System.Drawing.Brush, region: System.Drawing.Region): VoidResult;
  flush(): VoidResult;
  flush(intention: EnumInput<System.Drawing.Drawing2D.FlushIntention>): VoidResult;
  getContextInfo(): unknown;
  getContextInfo(offset: HostVariableOut<System.Drawing.PointF>): VoidResult;
  getContextInfo(
    offset: HostVariableOut<System.Drawing.PointF>,
    clip: HostVariableOut<System.Drawing.Region>
  ): VoidResult;
  getHdc(): System.IntPtr;
  getNearestColor(color: System.Drawing.Color): System.Drawing.Color;
  interpolationMode: System.Drawing.Drawing2D.InterpolationMode;
  intersectClip(rect: System.Drawing.Rectangle): VoidResult;
  intersectClip(rect: System.Drawing.RectangleF): VoidResult;
  intersectClip(region: System.Drawing.Region): VoidResult;
  isVisible(point: System.Drawing.Point): boolean;
  isVisible(point: System.Drawing.PointF): boolean;
  isVisible(rect: System.Drawing.Rectangle): boolean;
  isVisible(rect: System.Drawing.RectangleF): boolean;
  isVisible(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): boolean;
  isVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): boolean;
  isVisible(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  isVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): boolean;
  measureCharacterRanges(
    text: string | null,
    font: System.Drawing.Font,
    layoutRect: System.Drawing.RectangleF,
    stringFormat: System.Drawing.StringFormat | null
  ): HostArray<System.Drawing.Region>;
  measureString(text: string | null, font: System.Drawing.Font): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    layoutArea: System.Drawing.SizeF
  ): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    layoutArea: System.Drawing.SizeF,
    stringFormat: System.Drawing.StringFormat | null
  ): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    layoutArea: System.Drawing.SizeF,
    stringFormat: System.Drawing.StringFormat | null,
    charactersFitted: HostVariableOut<number>,
    linesFilled: HostVariableOut<number>
  ): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    origin: System.Drawing.PointF,
    stringFormat: System.Drawing.StringFormat | null
  ): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    width: number | StrongNumeric<Int32Host>
  ): System.Drawing.SizeF;
  measureString(
    text: string | null,
    font: System.Drawing.Font,
    width: number | StrongNumeric<Int32Host>,
    format: System.Drawing.StringFormat | null
  ): System.Drawing.SizeF;
  multiplyTransform(matrix: System.Drawing.Drawing2D.Matrix): VoidResult;
  multiplyTransform(
    matrix: System.Drawing.Drawing2D.Matrix,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  pageScale: number;
  pageUnit: System.Drawing.GraphicsUnit;
  pixelOffsetMode: System.Drawing.Drawing2D.PixelOffsetMode;
  readonly clipBounds: System.Drawing.RectangleF;
  readonly dpiX: number;
  readonly dpiY: number;
  readonly isClipEmpty: boolean;
  readonly isVisibleClipEmpty: boolean;
  readonly visibleClipBounds: System.Drawing.RectangleF;
  releaseHdc(): VoidResult;
  releaseHdc(hdc: System.IntPtr): VoidResult;
  releaseHdcInternal(hdc: System.IntPtr): VoidResult;
  renderingOrigin: System.Drawing.Point;
  resetClip(): VoidResult;
  resetTransform(): VoidResult;
  restore(gstate: System.Drawing.Drawing2D.GraphicsState): VoidResult;
  rotateTransform(angle: number | StrongNumeric<SingleHost>): VoidResult;
  rotateTransform(
    angle: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  save(): System.Drawing.Drawing2D.GraphicsState;
  scaleTransform(
    sx: number | StrongNumeric<SingleHost>,
    sy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  scaleTransform(
    sx: number | StrongNumeric<SingleHost>,
    sy: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  setClip(g: System.Drawing.Graphics): VoidResult;
  setClip(
    g: System.Drawing.Graphics,
    combineMode: EnumInput<System.Drawing.Drawing2D.CombineMode>
  ): VoidResult;
  setClip(path: System.Drawing.Drawing2D.GraphicsPath): VoidResult;
  setClip(
    path: System.Drawing.Drawing2D.GraphicsPath,
    combineMode: EnumInput<System.Drawing.Drawing2D.CombineMode>
  ): VoidResult;
  setClip(rect: System.Drawing.Rectangle): VoidResult;
  setClip(
    rect: System.Drawing.Rectangle,
    combineMode: EnumInput<System.Drawing.Drawing2D.CombineMode>
  ): VoidResult;
  setClip(rect: System.Drawing.RectangleF): VoidResult;
  setClip(
    rect: System.Drawing.RectangleF,
    combineMode: EnumInput<System.Drawing.Drawing2D.CombineMode>
  ): VoidResult;
  setClip(
    region: System.Drawing.Region,
    combineMode: EnumInput<System.Drawing.Drawing2D.CombineMode>
  ): VoidResult;
  smoothingMode: System.Drawing.Drawing2D.SmoothingMode;
  textContrast: number;
  textRenderingHint: System.Drawing.Text.TextRenderingHint;
  transform: System.Drawing.Drawing2D.Matrix;
  transformElements: System.Numerics.Matrix3x2;
  transformPoints(
    destSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    srcSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    ...pts: System.Drawing.PointF[]
  ): VoidResult;
  transformPoints(
    destSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    srcSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    ...pts: System.Drawing.Point[]
  ): VoidResult;
  transformPoints(
    destSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    srcSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    pts: HostArray<System.Drawing.Point>
  ): VoidResult;
  transformPoints(
    destSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    srcSpace: EnumInput<System.Drawing.Drawing2D.CoordinateSpace>,
    pts: HostArray<System.Drawing.PointF>
  ): VoidResult;
  translateClip(
    dx: number | StrongNumeric<Int32Host>,
    dy: number | StrongNumeric<Int32Host>
  ): VoidResult;
  translateClip(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  translateTransform(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  translateTransform(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
}

declare const delegateGraphics_DrawImageAbortBrand: unique symbol;
export interface Graphics_DrawImageAbort extends HostDelegate {
  readonly [delegateGraphics_DrawImageAbortBrand]: true;
  (callbackdata: System.IntPtr): boolean;
  invoke(callbackdata: System.IntPtr): boolean;
}

export interface Graphics_DrawImageAbortHostType extends HostType<
  Graphics_DrawImageAbort,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): Graphics_DrawImageAbort;
}

declare global {
  namespace System.Drawing.Graphics {
    type DrawImageAbort = import("./Graphics").Graphics_DrawImageAbort;
  }
}

declare const delegateGraphics_EnumerateMetafileProcBrand: unique symbol;
export interface Graphics_EnumerateMetafileProc extends HostDelegate {
  readonly [delegateGraphics_EnumerateMetafileProcBrand]: true;
  (
    recordType: EnumInput<System.Drawing.Imaging.EmfPlusRecordType>,
    flags: number | StrongNumeric<Int32Host>,
    dataSize: number | StrongNumeric<Int32Host>,
    data: System.IntPtr,
    callbackData: System.Drawing.Imaging.PlayRecordCallback | null
  ): boolean;
  invoke(
    recordType: EnumInput<System.Drawing.Imaging.EmfPlusRecordType>,
    flags: number | StrongNumeric<Int32Host>,
    dataSize: number | StrongNumeric<Int32Host>,
    data: System.IntPtr,
    callbackData: System.Drawing.Imaging.PlayRecordCallback | null
  ): boolean;
}

export interface Graphics_EnumerateMetafileProcHostType extends HostType<
  Graphics_EnumerateMetafileProc,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): Graphics_EnumerateMetafileProc;
}

declare global {
  namespace System.Drawing.Graphics {
    type EnumerateMetafileProc = import("./Graphics").Graphics_EnumerateMetafileProc;
  }
}

declare global {
  namespace System.Drawing {
    type Graphics = import("./Graphics").Graphics;
  }
}

export interface GraphicsHostType extends HostType<Graphics, ReferenceTypeTrait> {
  fromHdc(hdc: System.IntPtr): System.Drawing.Graphics;
  fromHdcInternal(hdc: System.IntPtr): System.Drawing.Graphics;
  fromHdc(hdc: System.IntPtr, hdevice: System.IntPtr): System.Drawing.Graphics;
  fromHwnd(hwnd: System.IntPtr): System.Drawing.Graphics;
  fromHwndInternal(hwnd: System.IntPtr): System.Drawing.Graphics;
  fromImage(image: System.Drawing.Image): System.Drawing.Graphics;
  getHalftonePalette(): System.IntPtr;
  readonly DrawImageAbort: Graphics_DrawImageAbortHostType;
  readonly EnumerateMetafileProc: Graphics_EnumerateMetafileProcHostType;
}

export {};
