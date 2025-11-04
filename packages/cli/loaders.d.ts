declare module "*.txt" {
  const text: string;
  export default text;
}

declare module "*.json" {
  const json: any;
  export default json;
}

declare module "*.png" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.jpg" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.jpeg" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.bmp" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.tiff" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.webp" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}
