import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/Generic/IEqualityComparer";
import "../../Collections/IEqualityComparer";
import "./XNode";

declare const xNodeEqualityComparerBrand: unique symbol;
export interface XNodeEqualityComparer
  extends
    ClrHostValue,
    System.Collections.IEqualityComparerInput,
    System.Collections.Generic.IEqualityComparerInput<System.Xml.Linq.XNode> {
  readonly [xNodeEqualityComparerBrand]: true;
  equals(x: System.Xml.Linq.XNode | null, y: System.Xml.Linq.XNode | null): boolean;
  getHashCode(obj: System.Xml.Linq.XNode): number;
}

declare global {
  namespace System.Xml.Linq {
    type XNodeEqualityComparer = import("./XNodeEqualityComparer").XNodeEqualityComparer;
  }
}

export interface XNodeEqualityComparerHostType extends HostType<
  XNodeEqualityComparer,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XNodeEqualityComparer;
}

export {};
