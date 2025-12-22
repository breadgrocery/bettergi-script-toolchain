import "../../IEquatable";

declare global {
  namespace System.Threading.Tasks {
    class ValueTask implements IEquatable<ValueTask> {
      equals(other: System.Threading.Tasks.ValueTask | null): boolean;

      // TODO: 待补充（如果有必要）
    }
  }
}

export {};
