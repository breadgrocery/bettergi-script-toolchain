import type {
  ClrHostValue,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/ValueType";
import "../Point2f";

declare const keyLineBrand: unique symbol;
export interface KeyLine extends ClrHostValue {
  readonly [keyLineBrand]: true;
  readonly angle: number;
  readonly classId: number;
  readonly octave: number;
  readonly pt: OpenCvSharp.Point2f;
  readonly response: number;
  readonly size: number;
  readonly startPointX: number;
  readonly startPointY: number;
  readonly endPointX: number;
  readonly endPointY: number;
  readonly sPointInOctaveX: number;
  readonly sPointInOctaveY: number;
  readonly ePointInOctaveX: number;
  readonly ePointInOctaveY: number;
  readonly lineLength: number;
  readonly numOfPixels: number;
  readonly startPoint: OpenCvSharp.Point2f;
  readonly endPoint: OpenCvSharp.Point2f;
  readonly startPointInOctave: OpenCvSharp.Point2f;
  readonly endPointInOctave: OpenCvSharp.Point2f;
}

declare global {
  namespace OpenCvSharp.LineDescriptor {
    type KeyLine = import("./KeyLine").KeyLine;
  }
}

export interface KeyLineHostType extends HostType<KeyLine, ValueTypeTrait> {
  new (): KeyLine;
  new (angle: number | StrongNumeric<SingleHost>): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>,
    sPointInOctaveY: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>,
    sPointInOctaveY: number | StrongNumeric<SingleHost>,
    ePointInOctaveX: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>,
    sPointInOctaveY: number | StrongNumeric<SingleHost>,
    ePointInOctaveX: number | StrongNumeric<SingleHost>,
    ePointInOctaveY: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>,
    sPointInOctaveY: number | StrongNumeric<SingleHost>,
    ePointInOctaveX: number | StrongNumeric<SingleHost>,
    ePointInOctaveY: number | StrongNumeric<SingleHost>,
    lineLength: number | StrongNumeric<SingleHost>
  ): KeyLine;
  new (
    angle: number | StrongNumeric<SingleHost>,
    classId: number | StrongNumeric<Int32Host>,
    octave: number | StrongNumeric<Int32Host>,
    pt: OpenCvSharp.Point2f,
    response: number | StrongNumeric<SingleHost>,
    size: number | StrongNumeric<SingleHost>,
    startPointX: number | StrongNumeric<SingleHost>,
    startPointY: number | StrongNumeric<SingleHost>,
    endPointX: number | StrongNumeric<SingleHost>,
    endPointY: number | StrongNumeric<SingleHost>,
    sPointInOctaveX: number | StrongNumeric<SingleHost>,
    sPointInOctaveY: number | StrongNumeric<SingleHost>,
    ePointInOctaveX: number | StrongNumeric<SingleHost>,
    ePointInOctaveY: number | StrongNumeric<SingleHost>,
    lineLength: number | StrongNumeric<SingleHost>,
    numOfPixels: number | StrongNumeric<Int32Host>
  ): KeyLine;
}

export {};
