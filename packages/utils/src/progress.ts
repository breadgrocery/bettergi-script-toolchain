import { formatDurationAsClock, formatDurationAsReadable } from "./time";

/** 进度信息 */
export type Progress = {
  /** 当前进度 */
  current: number;
  /** 总进度 */
  total: number;
  /** 完成百分比 */
  percentage: number;
  /** 已用时间（毫秒） */
  elapsed: number;
  /** 平均每单位时间（毫秒） */
  average: number;
  /** 预计剩余时间（毫秒） */
  remaining: number;
  /** 格式化后的进度信息 */
  formatted: {
    percentage: string;
    elapsed: string;
    average: string;
    remaining: string;
  };
};

/** 进度日志记录器 */
export type ProgressLogger = (message: string, progress: Progress) => void;

export type ProgressTrackerConfig = {
  /** 日志记录器 */
  logger?: ProgressLogger;
  /** 节流间隔（毫秒），默认3000 */
  interval?: number;
};

/** 进度递进选项 */
export type ProgressTickOptions = {
  /** 递进后打印消息 */
  message?: string;
  /** 递进的幅度 */
  increment?: number;
};

/** 进度追踪器 */
export class ProgressTracker {
  private total = 0;
  private current = 0;
  private startTime = Date.now();
  private readonly logger: ProgressLogger;
  private readonly interval: number;
  private lastPrintTime = 0;

  constructor(total: number, config?: ProgressTrackerConfig) {
    const { logger, interval: throttleInterval = 3000 } = config || {};
    this.total = total;
    this.logger = logger || this.defaultLogger;
    this.interval = throttleInterval;
  }

  private readonly defaultLogger: ProgressLogger = (message, progress) => {
    log.info(
      "[🚧 {pct} ⏳ {eta}]: {msg}",
      progress.formatted.percentage.padStart(6),
      progress.current > 0 && progress.elapsed > 0 ? progress.formatted.remaining : "--:--:--",
      message
    );
  };

  tick(options?: ProgressTickOptions): void {
    const { message, increment = 1 } = options || {};
    this.current = Math.min(this.current + increment, this.total);
    if (message) this.print(message);
  }

  track(
    callback: (progress: Progress, shouldPrint: () => boolean, printed: () => void) => void
  ): void {
    const progress = this.getProgress();
    const shouldPrint = this.shouldPrint.bind(this);
    const printed = this.printed.bind(this);
    callback(progress, shouldPrint, printed);
  }

  complete(message: string): void {
    this.current = this.total;
    if (message) this.print(message, true);
  }

  reset(): void {
    this.current = 0;
    this.startTime = Date.now();
    this.lastPrintTime = 0;
  }

  private print(message: string, force: boolean = false): void {
    if (force || this.shouldPrint()) {
      this.logger(message, this.getProgress());
      this.printed();
    }
  }

  private shouldPrint(): boolean {
    return Date.now() - this.lastPrintTime >= this.interval;
  }

  private printed() {
    this.lastPrintTime = Date.now();
  }

  getProgress(): Progress {
    const percentage = this.current / this.total;
    const elapsed = Date.now() - this.startTime;
    const average = this.current > 0 ? elapsed / this.current : 0;
    const remaining = (this.total - this.current) * average;
    return {
      current: this.current,
      total: this.total,
      percentage,
      elapsed,
      average,
      remaining,
      formatted: {
        percentage: `${(percentage * 100).toFixed(1)}%`,
        elapsed: formatDurationAsReadable(elapsed),
        average: formatDurationAsReadable(average),
        remaining: formatDurationAsClock(remaining)
      }
    };
  }
}
