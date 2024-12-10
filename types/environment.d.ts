export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY: string;
    }
  }
}
