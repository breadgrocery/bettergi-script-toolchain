import { ICollection } from "./ICollection";

export interface IList<T> extends ICollection<T> {
  isFixedSize: boolean;

  [index: number]: T;

  indexOf(item: T): number;

  insert(index: number, item: T): void;

  removeAt(index: number): void;
}
