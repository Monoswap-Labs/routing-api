import { ChainId } from '@monoswap-labs/smart-order-router'
import { TradeType } from '@monoswap-labs/sdk-core'

export const PAIRS_TO_TRACK: Map<ChainId, Map<TradeType, string[]>> = new Map([
  [
    ChainId.MAINNET,
    new Map([
      [
        TradeType.EXACT_INPUT,
        ['WETH/USDC', 'USDC/WETH', 'USDT/WETH', 'WETH/USDT', 'WETH/*', 'USDC/*', 'USDT/*', 'DAI/*', 'WBTC/*'],
      ],
      [TradeType.EXACT_OUTPUT, ['USDC/WETH', '*/WETH', '*/USDC', '*/USDT', '*/DAI']],
    ]),
  ],
  [ChainId.BLAST_SEPOLIA, new Map([[TradeType.EXACT_OUTPUT, ['*/WETH']]])],
])
