/**
 * 创建一个持久化存储对象，用于管理应用状态数据
 * 该函数会创建一个代理对象，对该对象的所有属性的修改都会自动同步到相应的JSON文件（脚本的 `store` 目录下）中。
 * @param name 存储对象的名称，将作为文件名（不包扩展名）
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
