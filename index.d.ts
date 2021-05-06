// Type definitions for @makerdao/currency
// Project: https://github.com/makerdao/currency
// Definitions by: ChouAndy <https://github.com/chouandy>

declare module "@makerdao/currency" {
  import type BN from "bignumber.js";

  type Amount =
    | Currency
    | number
    | string
    | number[]
    | Uint8Array
    | Buffer
    | BN;

  interface Currency {
    (amount: Amount, shift?: number): Currency;

    type: Currency;

    isEqual(other: Currency): boolean;

    toString(decimals: number): string;

    toBigNumber(): BN;

    toNumber(): number;

    toFixed(shift: number): string;

    isSameType(other: Currency): boolean;

    wei(amount: Amount): Currency;

    ray(amount: Amount): Currency;

    rad(amount: Amount): Currency;

    times(other: CurrencyRatio | BN): Currency;

    div(other: Currency): CurrencyRatio;
    div(other: CurrencyRatio | BN): Currency;

    plus(other: Currency | BN): Currency;

    minus(other: Currency | BN): Currency;

    shiftedBy(n: number): Currency;

    lt(other: Currency | BN | number): boolean;

    lte(other: Currency | BN | number): boolean;

    gt(other: Currency | BN | number): boolean;

    gte(other: Currency | BN | number): boolean;

    eq(other: Currency | BN | number): boolean;
  }

  interface CurrencyRatio {
    (amount: Amount, shift?: number): CurrencyRatio;

    isEqual(other: CurrencyRatio): boolean;

    toString(decimals: number): string;

    toBigNumber(): BN;

    toNumber(): number;

    toFixed(shift: number): string;

    isSameType(other: CurrencyRatio): boolean;

    wei(amount: Amount): CurrencyRatio;

    ray(amount: Amount): CurrencyRatio;

    rad(amount: Amount): CurrencyRatio;

    times(other: Currency): Currency;
    times(other: BN): CurrencyRatio;

    plus(other: CurrencyRatio | BN): CurrencyRatio;

    minus(other: CurrencyRatio | BN): CurrencyRatio;

    lt(other: CurrencyRatio | BN | number): boolean;

    lte(other: CurrencyRatio | BN | number): boolean;

    gt(other: CurrencyRatio | BN | number): boolean;

    gte(other: CurrencyRatio | BN | number): boolean;

    eq(other: CurrencyRatio | BN | number): boolean;
  }

  function createCurrency(symbol: string): Currency;

  function createCurrencyRatio(
    wrappedNumerator: Currency,
    wrappedDenominator: Currency
  ): CurrencyRatio;
}
