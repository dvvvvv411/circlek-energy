// Currency conversion utilities
// Exchange rate: 1 EUR = 4.2428571429 PLN (derived from 0.70 EUR = 2.97 PLN)

export const EUR_TO_PLN = 4.2428571429;

/**
 * Convert EUR amount to PLN
 */
export function eurToPln(eurAmount: number): number {
  return Math.round(eurAmount * EUR_TO_PLN * 100) / 100;
}

/**
 * Format amount as PLN currency
 */
export function formatPLN(amount: number): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

/**
 * Format price per liter in PLN
 */
export function formatPricePerLiter(amount: number): string {
  return `${formatPLN(amount)}/L`;
}