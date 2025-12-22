import "./Collections/IStructuralComparable";
import "./Collections/IStructuralEquatable";
import "./IComparable";
import "./Runtime/CompilerServices/ITuple";

declare global {
  // TODO: 未实现ITupleInternal接口，待补充（如果有必要）
  namespace System {
    class Tuple1<T1>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;

      constructor(item1: T1);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple2<T1, T2>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;

      constructor(item1: T1, item2: T2);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple3<T1, T2, T3>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;

      constructor(item1: T1, item2: T2, item3: T3);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple4<T1, T2, T3, T4>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;
      item4: T4;

      constructor(item1: T1, item2: T2, item3: T3, item4: T4);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple5<T1, T2, T3, T4, T5>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;
      item4: T4;
      item5: T5;

      constructor(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple6<T1, T2, T3, T4, T5, T6>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;
      item4: T4;
      item5: T5;
      item6: T6;

      constructor(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple7<T1, T2, T3, T4, T5, T6, T7>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;
      item4: T4;
      item5: T5;
      item6: T6;
      item7: T7;

      constructor(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7);

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }

    class Tuple8<T1, T2, T3, T4, T5, T6, T7, T8>
      implements
        System.Collections.IStructuralEquatable,
        System.Collections.IStructuralComparable,
        System.IComparable
    {
      item1: T1;
      item2: T2;
      item3: T3;
      item4: T4;
      item5: T5;
      item6: T6;
      item7: T7;
      item8: T8;

      constructor(
        item1: T1,
        item2: T2,
        item3: T3,
        item4: T4,
        item5: T5,
        item6: T6,
        item7: T7,
        item8: T8
      );

      equals(other: any): boolean;

      compareTo(other: any): number;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }
  }
}

export {};
