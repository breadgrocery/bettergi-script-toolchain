import { type ScriptConfig } from "../config.js";
export declare const getInstallPath: () => Promise<string | undefined>;
export declare const getVersion: () => Promise<any>;
export declare const installScript: (outDir: string, config: ScriptConfig, manifest: Record<string, any>) => Promise<void>;
