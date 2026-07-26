declare global {
  interface Error {
    hostException?: unknown;
  }
}

export {};
