import { IEnumerable } from "./IEnumerable";

export interface ICollection<T> extends IEnumerable<T> {
  count: number;

  isReadOnly: boolean;

  add(item: T): void;

  clear(): void;

  contains(item: T): boolean;

  copyTo(array: T[], arrayIndex: number): void;

  remove(item: T): boolean;
}
