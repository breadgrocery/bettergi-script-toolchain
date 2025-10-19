import "../../IEquatable";

declare global {
  namespace System.Threading.Tasks {
    class ValueTask implements IEquatable<ValueTask> {
      // TODO: 缺少其他属性未定义
      equals(other: System.Threading.Tasks.ValueTask | null): boolean;
    }
  }
}
export {};
