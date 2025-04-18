import { IEnumerator } from "./IEnumerator";

export interface IEnumerable<T> {
  getEnumerator(): IEnumerator<T>;
}
