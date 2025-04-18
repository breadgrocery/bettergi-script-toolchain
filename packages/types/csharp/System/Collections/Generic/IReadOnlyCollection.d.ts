import { IEnumerable } from "./IEnumerable";

interface IReadOnlyCollection<T> extends IEnumerable<T> {
  count: number;
}
