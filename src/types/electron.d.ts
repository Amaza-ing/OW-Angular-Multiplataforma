export {};

declare global {
  interface Window {
    electronAPI: {
      getPlatform: () => Promise<string>;
    };
  }
}
