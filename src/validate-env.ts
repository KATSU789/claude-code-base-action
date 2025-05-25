// --- MAX-only fork: always pass (self-host runner) ---
export function validateEnvironmentVariables(): void {
  // 本来は API キーやプラン判定をするが MAX 専用なので常に通す
  return;
}
