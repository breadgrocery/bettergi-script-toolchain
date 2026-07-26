import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  IsFamilyArgumentOmitted,
  ReferenceTypeTrait
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/IEquatable";
import "../../../Number";
import "../../../Rational";
import "../../../SignedRational";
import "./EncodedString";

declare const exifTagArity0Brand: unique symbol;
export interface _ExifTagArity0 extends ClrHostValue {
  readonly [exifTagArity0Brand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag | null): boolean;
  getHashCode(): number;
  toString(): string;
}

export interface _ExifTagArity0HostType extends HostType<_ExifTagArity0, ReferenceTypeTrait> {
  readonly faxProfile: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly modeNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly gpsAltitudeRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly clipPath: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly versionYear: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly xmp: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly iptc: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly iccProfile: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly cfaPattern2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly tiffepStandardID: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly gpsVersionID: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly pixelScale: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly intergraphMatrix: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly modelTiePoint: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly modelTransform: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly userComment: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Metadata.Profiles.Exif.EncodedString>;
  readonly gpsProcessingMethod: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Metadata.Profiles.Exif.EncodedString>;
  readonly gpsAreaInformation: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Metadata.Profiles.Exif.EncodedString>;
  readonly subfileType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly subIFDOffset: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly gpsifdOffset: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly t4Options: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly t6Options: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly xClipPathUnits: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly yClipPathUnits: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly profileType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly codingMethods: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly t82ptions: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly jpegInterchangeFormat: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly jpegInterchangeFormatLength: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly mdFileTag: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly standardOutputSensitivity: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly recommendedExposureIndex: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly isoSpeed: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly isoSpeedLatitudeyyy: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly isoSpeedLatitudezzz: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly faxRecvParams: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly faxRecvTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly imageNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly freeOffsets: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly freeByteCounts: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly colorResponseUnit: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly sMinSampleValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly sMaxSampleValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly jpegqTables: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly jpegdcTables: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly jpegacTables: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly stripRowCounts: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly intergraphRegisters: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly subIFDs: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly imageWidth: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly imageLength: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly rowsPerStrip: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly tileWidth: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly tileLength: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly badFaxLines: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly consecutiveBadFaxLines: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly pixelXDimension: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly pixelYDimension: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Number>;
  readonly stripOffsets: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Number>
  >;
  readonly stripByteCounts: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Number>
  >;
  readonly tileByteCounts: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Number>
  >;
  readonly tileOffsets: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Number>
  >;
  readonly imageLayer: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Number>
  >;
  readonly xPosition: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly yPosition: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly xResolution: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly yResolution: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly batteryLevel: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly exposureTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly fNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly mdScalePixel: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly compressedBitsPerPixel: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly apertureValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly maxApertureValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly subjectDistance: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly focalLength: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly flashEnergy2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly focalPlaneXResolution2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly focalPlaneYResolution2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly exposureIndex2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly humidity: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly pressure: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly acceleration: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly flashEnergy: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly focalPlaneXResolution: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly focalPlaneYResolution: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly exposureIndex: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly digitalZoomRatio: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsAltitude: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsdop: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsSpeed: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsTrack: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsImgDirection: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsDestBearing: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpsDestDistance: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly gpshPositioningError: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.Rational>;
  readonly whitePoint: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly primaryChromaticities: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly yCbCrCoefficients: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly referenceBlackWhite: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly gpsLatitude: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly gpsLongitude: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly gpsTimestamp: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly gpsDestLatitude: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly gpsDestLongitude: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly lensSpecification: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.Rational>
  >;
  readonly oldSubfileType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly compression: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly photometricInterpretation: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly thresholding: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly cellWidth: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly cellLength: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly fillOrder: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly orientation: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly samplesPerPixel: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly planarConfiguration: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly predictor: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly grayResponseUnit: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly resolutionUnit: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly cleanFaxData: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly inkSet: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly numberOfInks: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly dotRange: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly indexed: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly opiProxy: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly jpegProc: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly jpegRestartInterval: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly yCbCrPositioning: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly rating: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly ratingPercent: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly exposureProgram: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly interlace: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly selfTimerMode: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sensitivityType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly meteringMode: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly lightSource: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly focalPlaneResolutionUnit2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sensingMethod2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly flash: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly colorSpace: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly focalPlaneResolutionUnit: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sensingMethod: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly customRendered: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly exposureMode: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly whiteBalance: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly focalLengthIn35mmFilm: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sceneCaptureType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly gainControl: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly contrast: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly saturation: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sharpness: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly subjectDistanceRange: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly gpsDifferential: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly bitsPerSample: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly minSampleValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly maxSampleValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly grayResponseCurve: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly colorMap: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly extraSamples: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly pageNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly transferFunction: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly halftoneHints: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly sampleFormat: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly transferRange: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly defaultImageColor: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly jpegLosslessPredictors: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly jpegPointTransforms: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly yCbCrSubsampling: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly cfaRepeatPatternDim: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly intergraphPacketData: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly isoSpeedRatings: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly subjectArea: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly subjectLocation: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly shutterSpeedValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly brightnessValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly exposureBiasValue: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly ambientTemperature: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly waterDepth: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly cameraElevationAngle: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<SixLabors.ImageSharp.SignedRational>;
  readonly decode: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<SixLabors.ImageSharp.SignedRational>
  >;
  readonly timeZoneOffset: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly imageDescription: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly make: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly model: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly software: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly dateTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly artist: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly hostComputer: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly copyright: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly documentName: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly pageName: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly inkNames: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly targetPrinter: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly imageID: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly mdLabName: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly mdSampleInfo: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly mdPrepDate: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly mdPrepTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly mdFileUnits: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly semInfo: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly spectralSensitivity: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly dateTimeOriginal: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly dateTimeDigitized: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly subsecTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly subsecTimeOriginal: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly subsecTimeDigitized: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly relatedSoundFile: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly faxSubaddress: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly offsetTime: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly offsetTimeOriginal: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly offsetTimeDigitized: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly securityClassification: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly imageHistory: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly imageUniqueID: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly ownerName: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly serialNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly lensMake: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly lensModel: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly lensSerialNumber: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gdalMetadata: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gdalNoData: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsLatitudeRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsLongitudeRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsSatellites: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsStatus: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsMeasureMode: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsSpeedRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsTrackRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsImgDirectionRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsMapDatum: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsDestLatitudeRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsDestLongitudeRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsDestBearingRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsDestDistanceRef: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly gpsDateStamp: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly xpTitle: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly xpComment: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly xpAuthor: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly xpKeywords: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly xpSubject: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<string>;
  readonly jpegTables: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly oecf: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly exifVersion: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly componentsConfiguration: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly makerNote: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly flashpixVersion: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly spatialFrequencyResponse: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly spatialFrequencyResponse2: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly noise: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly cfaPattern: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly deviceSettingDescription: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<
    HostArray<number>
  >;
  readonly imageSourceData: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<HostArray<number>>;
  readonly fileSource: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
  readonly sceneType: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<number>;
}

declare const exifTagArity1Brand: unique symbol;
export interface _ExifTagArity1<TValueType> extends _ExifTagArity0 {
  readonly [exifTagArity1Brand]: true;
}

export interface _ExifTagArity1HostType<TValueType> extends HostType<
  _ExifTagArity1<TValueType>,
  ReferenceTypeTrait
> {}

export type ExifTagFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _ExifTagArity0 : _ExifTagArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type ExifTag<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ExifTag").ExifTagFamily<T1>;
  }
}

export type ExifTagHostType = _ExifTagArity0HostType;

export {};
