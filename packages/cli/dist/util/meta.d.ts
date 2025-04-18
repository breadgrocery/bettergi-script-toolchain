import { type ScriptConfig } from "../config";
export declare const syncManifestConfig: (outDir: string, config: ScriptConfig) => Promise<Record<string, any>>;
export declare const syncSettingsConfig: (outDir: string, config: ScriptConfig) => Promise<void>;
