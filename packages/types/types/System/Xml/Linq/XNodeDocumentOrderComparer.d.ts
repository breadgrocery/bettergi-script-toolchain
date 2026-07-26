import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IComparer";
import "../../Collections/IComparer";
import "./XNode";

declare const xNodeDocumentOrderComparerBrand: unique symbol;
export interface XNodeDocumentOrderComparer
  extends
    ClrHostValue,
    System.Collections.IComparerInput,
    System.Collections.Generic.IComparerInput<System.Xml.Linq.XNode> {
  readonly [xNodeDocumentOrderComparerBrand]: true;
  compare(x: System.Xml.Linq.XNode | null, y: System.Xml.Linq.XNode | null): number;
}

declare global {
  namespace System.Xml.Linq {
    type XNodeDocumentOrderComparer =
      import("./XNodeDocumentOrderComparer").XNodeDocumentOrderComparer;
  }
}

export interface XNodeDocumentOrderComparerHostType extends HostType<
  XNodeDocumentOrderComparer,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XNodeDocumentOrderComparer;
}

export {};
