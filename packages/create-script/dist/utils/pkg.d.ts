export interface PkgInfo {
    name: string;
    version: string;
}
export declare const getPkgFromUserAgent: (userAgent: string | undefined) => PkgInfo | undefined;
export declare const getPkgManager: () => string;
export declare const isValidPackageName: (packageName: string) => boolean;
export declare const toValidPackageName: (projectName: string) => string;
