import { format } from "oxfmt";
import { type RolldownPlugin } from "rolldown";

const CodeFormatter = (): RolldownPlugin => {
  return {
    name: "code-formatter",
    async renderChunk(sourceText, { fileName }) {
      const { code, errors } = await format(fileName, sourceText);
      if (errors.length === 0) return code;
    }
  };
};

export default CodeFormatter;
