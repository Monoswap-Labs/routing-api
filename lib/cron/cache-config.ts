import { Protocol } from '@uniswap/router-sdk'
import { ChainId, V3SubgraphProvider } from '@monoswap-labs/smart-order-router'

export const chainProtocols = [
  // V3.
  /*
  {
    protocol: Protocol.V3,
    chainId: ChainId.MAINNET,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.MAINNET, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.ARBITRUM_ONE,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.ARBITRUM_ONE, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.POLYGON,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.POLYGON, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.CELO,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.CELO, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.BNB,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.BNB, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.AVALANCHE,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.AVALANCHE, 3, 90000),
  },
  {
    protocol: Protocol.V3,
    chainId: ChainId.BASE,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.BASE, 3, 90000),
  },
  */
  // {
  //   protocol: Protocol.V3,
  //   chainId: ChainId.MANTA_PACIFIC_TESTNET,
  //   timeout: 90000,
  //   provider: new V3SubgraphProvider(ChainId.MANTA_PACIFIC_TESTNET, 3, 90000),
  // },
  // {
  //   protocol: Protocol.V3,
  //   chainId: ChainId.MANTA_PACIFIC,
  //   timeout: 90000,
  //   provider: new V3SubgraphProvider(ChainId.MANTA_PACIFIC, 3, 90000),
  // },
  // {
  //   protocol: Protocol.V3,
  //   chainId: ChainId.SCROLL,
  //   timeout: 90000,
  //   provider: new V3SubgraphProvider(ChainId.SCROLL, 3, 90000),
  // },
  {
    protocol: Protocol.V3,
    chainId: ChainId.BLAST_SEPOLIA,
    timeout: 90000,
    provider: new V3SubgraphProvider(ChainId.BLAST_SEPOLIA, 3, 90000),
  }
  // Currently there is no working V3 subgraph for Optimism so we use a static provider.

  // V2.
  /*
  {
    protocol: Protocol.V2,
    chainId: ChainId.MAINNET,
    timeout: 840000,
    provider: new V2SubgraphProvider(ChainId.MAINNET, 3, 900000, true, 1000), // 1000 is the largest page size supported by thegraph
  },
  */
]
