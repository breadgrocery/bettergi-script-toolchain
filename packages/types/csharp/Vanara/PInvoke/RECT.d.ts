import { POINT } from "./POINT";
import { SIZE } from "./SIZE";

export interface RECT {
  left: number;
  top: number;
  right: number;
  bottom: number;
  x: number;
  y: number;
  width: number;
  height: number;
  isEmpty: boolean;

  location(): POINT;

  size(): SIZE;
}
