import type {
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../../Microsoft/ClearScript/HostType";
import "../../Unicode/UnicodeRange";
import "./TextEncoder";
import "./TextEncoderSettings";

declare const javaScriptEncoderBrand: unique symbol;
export interface JavaScriptEncoder extends System.Text.Encodings.Web.TextEncoder {
  readonly [javaScriptEncoderBrand]: true;
}

declare global {
  namespace System.Text.Encodings.Web {
    type JavaScriptEncoder = import("./JavaScriptEncoder").JavaScriptEncoder;
  }
}

export interface JavaScriptEncoderHostType extends HostType<JavaScriptEncoder, ReferenceTypeTrait> {
  readonly default: System.Text.Encodings.Web.JavaScriptEncoder;
  readonly unsafeRelaxedJsonEscaping: System.Text.Encodings.Web.JavaScriptEncoder;
  create(
    settings: System.Text.Encodings.Web.TextEncoderSettings
  ): System.Text.Encodings.Web.JavaScriptEncoder;
  create(
    allowedRanges: HostArray<System.Text.Unicode.UnicodeRange>
  ): System.Text.Encodings.Web.JavaScriptEncoder;
  create(
    ...allowedRanges: System.Text.Unicode.UnicodeRange[]
  ): System.Text.Encodings.Web.JavaScriptEncoder;
}

export {};
