import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";

declare const iXmlLineInfoInputBrand: unique symbol;
export interface IXmlLineInfoInput {
  readonly [iXmlLineInfoInputBrand]: true;
}

export interface IXmlLineInfo
  extends Microsoft.ClearScript.ClrInterfaceView<IXmlLineInfoInput>, IXmlLineInfoInput {
  hasLineInfo(): boolean;
  readonly lineNumber: number;
  readonly linePosition: number;
}

declare global {
  namespace System.Xml {
    type IXmlLineInfoInput = import("./IXmlLineInfo").IXmlLineInfoInput;
  }
}

declare global {
  namespace System.Xml {
    type IXmlLineInfo = import("./IXmlLineInfo").IXmlLineInfo;
  }
}

export interface IXmlLineInfoHostType extends HostType<IXmlLineInfo, InterfaceTypeTrait> {}

export {};
