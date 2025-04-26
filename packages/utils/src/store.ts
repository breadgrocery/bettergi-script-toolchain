/**
 * 创建一个存储对象，存储在 store 目录下
 * @param name 存储对象的文件名称
 * @returns 返回一个代理对象，对该对象的属性修改会自动存储到文件中
 */
export const useStore = <T extends Record<string, any>>(name: string): T => {
  const path = `store/${name}.json`;
  const obj = (() => {
    try {
      const text = file.readTextSync(path);
      return JSON.parse(text);
    } catch {
      return {};
    }
  })();
  return new Proxy(obj, {
    set: (target, key, value) =>
      Reflect.set(target, key, value) && file.writeTextSync(path, JSON.stringify(target, null, 2))
  });
};
