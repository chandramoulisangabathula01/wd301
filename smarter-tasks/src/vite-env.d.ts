interface ImportMetaEnv {
    [x: string]: unknown;
    readonly VITE_API_ENDPOINT: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}