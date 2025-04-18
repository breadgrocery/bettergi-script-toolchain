export const terminate = (message, code = -1) => {
    if (message)
        console.error(message);
    process.exit(code);
};
