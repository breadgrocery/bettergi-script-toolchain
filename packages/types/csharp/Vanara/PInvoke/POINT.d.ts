export interface POINT {
  x: number;
  y: number;
  isEmpty: boolean;

  offset(dx: number, dy: number): void;

  offset(p: POINT): void;
}
