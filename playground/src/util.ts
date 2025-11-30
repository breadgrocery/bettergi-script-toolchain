export const ces = (func: () => any, start: number = 40, end: number = 90) => {
  const rank = new Map<number, number>();
  for (let size = start; size <= end; size += 1) {
    const ir = captureGameRegion();
    const mat = func({ width: size, height: size });
    const ro = RecognitionObject.templateMatch(mat);
    ro.useMask = false;
    ro.threshold = 0.6;
    ro.initTemplate();

    const sim = ir.FindSim(ro);
    log.info(`Size: ${size}, Similarity: ${sim}`);
    rank.set(size, sim);
  }
  const sorted = Array.from(rank.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 5).filter(item => item[1] >= 0);
};
