export function createResizable(path: string) {
  return (width: number, height: number, interpolation?: number) =>
    file.readImageMatWithResizeSync(path, width, height, interpolation || 1);
}

export function createDefaultResizable(path: string, dw: number, dh: number, di?: number) {
  return (resize?: { width: number; height: number; interpolation?: number }) => {
    const { width = dw, height = dh, interpolation = di || 1 } = resize || {};
    return file.readImageMatWithResizeSync(path, width, height, interpolation);
  };
}
