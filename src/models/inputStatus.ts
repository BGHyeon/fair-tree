export const InputStatus = {
  default: 0,
  success: 1,
  fail: 2,
} as const;

// 2. 타입 정의 (결과적으로 0 | 1 | 2 타입이 됩니다)
export type InputStatusType = (typeof InputStatus)[keyof typeof InputStatus];
