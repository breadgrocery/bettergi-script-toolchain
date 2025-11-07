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

declare module "*.png?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.png?path" {
  const path: string;
  export default path;
}

declare module "*.jpg" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.jpg?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.jpg?path" {
  const path: string;
  export default path;
}

declare module "*.jpeg" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.jpeg?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.jpeg?path" {
  const path: string;
  export default path;
}

declare module "*.bmp" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.bmp?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.bmp?path" {
  const path: string;
  export default path;
}

declare module "*.tiff" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.tiff?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.tiff?path" {
  const path: string;
  export default path;
}

declare module "*.webp" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}

declare module "*.webp?lazy" {
  const func: () => ReturnType<typeof file.readImageMatSync>;
  export default func;
}

declare module "*.webp?path" {
  const mat: ReturnType<typeof file.readImageMatSync>;
  export default mat;
}
