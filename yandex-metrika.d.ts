interface YandexMetrika {
  (counterId: number, type: "hit", url: string): void;
  (counterId: number, type: "reachGoal", target: string, params?: Record<string, any>): void;
}

declare global {
  interface Window {
    ym?: YandexMetrika;
  }
}

export {};