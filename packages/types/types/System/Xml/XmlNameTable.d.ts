import type {
  CharHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";

declare const xmlNameTableBrand: unique symbol;
export interface XmlNameTable extends ClrHostValue {
  readonly [xmlNameTableBrand]: true;
  add(
    array: HostArray<number | StrongNumeric<CharHost>>,
    offset: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): string;
  add(array: string): string;
  get(
    array: HostArray<number | StrongNumeric<CharHost>>,
    offset: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): string;
  get(array: string): string;
}

declare global {
  namespace System.Xml {
    type XmlNameTable = import("./XmlNameTable").XmlNameTable;
  }
}

export interface XmlNameTableHostType extends HostType<XmlNameTable, ReferenceTypeTrait> {}

export {};
