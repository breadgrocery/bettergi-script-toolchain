import mat from "./assets/关闭.png";
import mat2 from "./assets/关闭.png" with { width: "100", height: "100" };
import mat3 from "./assets/关闭.png?lazy";
import mat4 from "./assets/关闭.png?path";

(async function () {
  // const ro = RecognitionObject.templateMatch(mat);
  // const ro2 = RecognitionObject.templateMatch(mat2);
  // const ro3 = RecognitionObject.templateMatch(mat3());
  log.info("{mat4}", mat4);
})();
