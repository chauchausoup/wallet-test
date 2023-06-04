import type { BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

const NEP_BUSD_CONVERSION_RATE = 3;

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length,
  )}`;
}

const CHAIN_ID_PREFIXES = {
  97: 'testnet.bscscan',
};

export function formatBSCLink(
  type: 'Account' | 'Transaction',
  data: [number, string],
) {
  switch (type) {
    case 'Account': {
      const [chainId, address] = data;
      return `https://${CHAIN_ID_PREFIXES[chainId]}.com/address/${address}`;
    }
  }
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 2,
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

export const busdToNepConversion = (value) =>
  (parseFloat(value) / NEP_BUSD_CONVERSION_RATE).toFixed(2).toString();

export const nepToBusdConversion = (value) =>
  (parseFloat(value) * NEP_BUSD_CONVERSION_RATE).toFixed(2).toString();
