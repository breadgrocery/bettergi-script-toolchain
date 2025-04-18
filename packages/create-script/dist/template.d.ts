export interface UserInput {
    name: string;
    version: string;
    description: string;
    author: string;
    authorLink?: string;
}
export declare const createTemplate: (targetRoot: string, input: UserInput) => void;
