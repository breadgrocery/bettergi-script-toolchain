import { deepMerge } from "./misc";

/**
 * 创建一个持久化存储对象，用于管理应用状态数据
 * 该函数会创建一个代理对象，对该对象的所有属性的修改都会自动同步到相应的JSON文件（脚本的 `store` 目录下）中。
 * 支持深层嵌套对象的代理。
 * @param name 存储对象的名称，将作为文件名（不包扩展名）
 */
export const useStore = <T extends Record<string, any>>(name: string): T => {
  const filePath = `store/${name}.json`;

  // 读取文件数据
  const obj = (() => {
    try {
      const storeFiles = [...file.readPathSync("store")].map(path => path.replace(/\\/g, "/"));
      if (!storeFiles.includes(filePath)) throw new Error("File does not exist");

      const text = file.readTextSync(filePath);
      return JSON.parse(text);
    } catch {
      return {}; // 创建空对象
    }
  })();

  // 创建代理函数
  const createProxy = (target: any, parentPath: string[] = []) => {
    if (typeof target !== "object" || target === null) {
      return target;
    }
    return new Proxy(target, {
      get: (target, key) => {
        const value = Reflect.get(target, key);
        return typeof value === "object" && value !== null
          ? createProxy(value, [...parentPath, key as string]) // 递归创建代理
          : value;
      },
      set: (target, key, value) => {
        const success = Reflect.set(target, key, value);
        if (success) {
          Promise.resolve().then(() => {
            file.writeTextSync(filePath, JSON.stringify(obj, null, 2));
          });
        }
        return success;
      },
      deleteProperty: (target, key) => {
        const success = Reflect.deleteProperty(target, key);
        if (success) {
          Promise.resolve().then(() => {
            file.writeTextSync(filePath, JSON.stringify(obj, null, 2));
          });
        }
        return success;
      }
    });
  };

  return createProxy(obj);
};

/**
 * 创建一个带有默认值的持久化存储对象，用于管理应用状态数据
 * @param name 存储对象的名称，将作为文件名（不包扩展名）
 * @param defaults 默认值数据对象
 */
export const useStoreWithDefaults = <T extends Record<string, any>>(
  name: string,
  defaults: Partial<T>
): T => {
  const newStore = useStore<T>(name);
  Object.assign(newStore, deepMerge(defaults, newStore));
  return newStore;
};
