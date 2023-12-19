# Uniswap Routing API

This repository contains Uniswap routing service for several chains that are not supported by Uniswap's official API endpoint.

It deploys an API to AWS that uses @aperture_finance/uniswap-smart-order-router to search for the most efficient way to swap token A for token B.

## Development

To develop on the Routing API you must have an AWS account where you can deploy your API for testing and production.

### Deploying the API

The best way to develop and test the API is to deploy your own instance to AWS.

1. Install and configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [AWS CDK V1](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
2. Create .env file in the root directory of the project with :
   ```
   THROTTLE_PER_FIVE_MINS = '' # Optional
   JSON_RPC_PROVIDER_3441005=https://pacific-rpc.testnet.manta.network/http
   JSON_RPC_PROVIDER_169=https://pacific-rpc.manta.network/http
   JSON_RPC_PROVIDER_534352=https://rpc.scroll.io
   ```
3. Install and build the package
   ```
   npm install && npm run build
   ```
4. To deploy the API, run:
   ```
   cdk deploy RoutingAPIStackTest
   ```
   This will deploy to the default account your AWS CLI is configured for. Once complete it will output something like:
   ```
   RoutingAPIStackTest.Url = https://...
   ```

### Production Stack
Aperture's production stack is named `RoutingAPIStack`. To deploy/reload the prod stack, run
```shell
cdk deploy RoutingAPIStack
```

We have a deployed stack with url https://vbcuqwld9d.execute-api.us-west-2.amazonaws.com/prod/. Our custom domain https://uniswap-routing.aperture.finance points to this stack. Sample queries try it out:
```
# Manta Pacific mainnet
curl --request GET 'https://uniswap-routing.aperture.finance/quote?tokenInAddress=0x39471bee1bbe79f3bfa774b6832d6a530eddac6b&tokenInChainId=3441005&tokenOutAddress=0x50508d7cb6bf4e1664ce62e7cceca96ca50b61c6&tokenOutChainId=3441005&amount=1000&type=exactIn'

# Scroll mainnet
curl --request GET 'https://uniswap-routing.aperture.finance/quote?tokenInAddress=0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4&tokenInChainId=534352&tokenOutAddress=ETH&tokenOutChainId=534352&amount=1000000&type=exactIn'
```

### Integration Tests

Note: integration tests have not been updated for Manta Pacific or Scroll yet. Instructions kept below for future references.

The integration tests fetch quotes from your deployed API, then execute the swaps on a Hardhat mainnet fork.

1. First deploy your test API using the intructions above. Then update your `.env` file with the URL of the API, and the RPC URL of an archive node:

   ```
   UNISWAP_ROUTING_API='...'
   ARCHIVE_NODE_RPC='...'
   ```

2. Run the tests with:
   ```
   npm run integ-test
   ```
