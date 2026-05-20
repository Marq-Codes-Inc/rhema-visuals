/* lib/utils.ts */
export function formatUGX(amount: number): string {
  return `Shs. ${amount.toLocaleString('en-US')}`;
}
