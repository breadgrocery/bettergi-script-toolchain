export const terminate = (message?: string, code: number = -1) => {
  if (message) console.error(message);
  process.exit(code);
};
