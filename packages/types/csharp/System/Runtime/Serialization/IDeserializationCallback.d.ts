declare global {
  namespace System.Runtime.Serialization {
    interface IDeserializationCallback {
      onDeserialization(sender: any): void;
    }
  }
}

export {};
