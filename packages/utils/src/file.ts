/**
 * 读取指定文件夹内所有文件的路径
 * @param folderPath 文件夹路径（相对于脚本根目录）
 * @param recursive 是否递归子文件夹（默认：false）
 * @returns 文件路径数组
 */
export const listFiles = (folderPath: string, recursive?: boolean): string[] => {
  return [...file.readPathSync(folderPath)].flatMap(path =>
    recursive && file.isFolder(path) ? listFiles(path, recursive) : file.isFolder(path) ? [] : path
  );
};

export type ReadLinesOptions = {
  /** 是否过滤仅含空白的行 */
  notBlank?: boolean;
  /** 是否过滤空行 */
  notEmpty?: boolean;
  /** 是否去除每行首尾空白 */
  trim?: boolean;
  /** 是否去重 */
  distinct?: boolean;
};

/**
 * 同步读取文件文本行
 * @param path 文件路径（相对于脚本根目录）
 * @param options 读取选项
 */
export const readLinesSync = (path: string, options: ReadLinesOptions) => {
  const { notBlank = false, notEmpty = false, trim = false, distinct = false } = options || {};
  return file
    .readTextSync(path)
    .replaceAll("\r\n", "\n")
    .split("\n")
    .filter(line => (!notBlank || line.trim().length > 0) && (!notEmpty || line.length > 0))
    .map(line => (trim ? line.trim() : line))
    .reduce<string[]>((acc, line) => {
      return distinct ? (acc.includes(line) ? acc : [...acc, line]) : [...acc, line];
    }, []);
};

/**
 * 读取文件文本行
 * @param path 文件路径（相对于脚本根目录）
 * @param options 读取选项
 */
export const readLines = async (path: string, options: ReadLinesOptions) => {
  const { notBlank = false, notEmpty = false, trim = false, distinct = false } = options || {};
  const text = await file.readText(path);
  return text
    .replaceAll("\r\n", "\n")
    .split("\n")
    .filter(line => (!notBlank || line.trim().length > 0) && (!notEmpty || line.length > 0))
    .map(line => (trim ? line.trim() : line))
    .reduce<string[]>((acc, line) => {
      return distinct ? (acc.includes(line) ? acc : [...acc, line]) : [...acc, line];
    }, []);
};
