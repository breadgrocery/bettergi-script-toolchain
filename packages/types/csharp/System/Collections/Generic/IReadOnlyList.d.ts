import { IReadOnlyCollection } from "./IReadOnlyCollection";

interface IReadOnlyList<T> extends IReadOnlyCollection<T> {
  [index: number]: T;
}
