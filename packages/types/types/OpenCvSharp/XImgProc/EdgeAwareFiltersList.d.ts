import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const edgeAwareFiltersListBrand: unique symbol;
export interface EdgeAwareFiltersList extends ClrHostValue {
  readonly [edgeAwareFiltersListBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type EdgeAwareFiltersList = import("./EdgeAwareFiltersList").EdgeAwareFiltersList;
  }
}

export interface EdgeAwareFiltersListHostType extends HostType<
  EdgeAwareFiltersList,
  EnumTypeTrait
> {
  readonly dtF_NC: EdgeAwareFiltersList;
  readonly dtF_IC: EdgeAwareFiltersList;
  readonly dtF_RF: EdgeAwareFiltersList;
  readonly guideD_FILTER: EdgeAwareFiltersList;
  readonly aM_FILTER: EdgeAwareFiltersList;
}

export {};
