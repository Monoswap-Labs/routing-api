import { Protocol } from '@monoswap-labs/router-sdk'
import { ChainId } from '@monoswap-labs/smart-order-router'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
