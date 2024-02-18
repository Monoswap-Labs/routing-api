# Monoswap Routing API

This repository contains Monoswap routing service for several chains that are not supported by Monoswap's official API endpoint.

It deploys an API to AWS that uses @monoswap-labs/smart-order-router to search for the most efficient way to swap token A for token B.

## Development

To develop on the Routing API you must have an AWS account where you can deploy your API for testing and production.

### Deploying the API

The best way to develop and test the API is to deploy your own instance to AWS.

Add access key aws in conf cli [Conf key](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

1. Install and configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and [AWS CDK V1](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).
2. Create .env file in the root directory of the project with :
   ```
   THROTTLE_PER_FIVE_MINS = '' # Optional
   JSON_RPC_PROVIDER_168587773=https://sepolia.blast.io
   ```
3. Install and build the package
   ```
   npm install && npm run build
   ```
4. To deploy the API, run:
   ```
   cdk deploy RoutingAPIStack
   ```
   This will deploy to the default account your AWS CLI is configured for. Once complete it will output something like:
   ```
   RoutingAPIStack.Url = https://...
   ```

### Production Stack
Aperture's production stack is named `RoutingAPIStack`. To deploy/reload the prod stack, run
```shell
cdk deploy RoutingAPIStack
```

We have a deployed stack with url https://z8ce5n64p2.execute-api.ap-southeast-1.amazonaws.com/prod/. Sample queries try it out:
```
# Blast sepolia
https://z8ce5n64p2.execute-api.ap-southeast-1.amazonaws.com/prod/quote?tokenInAddress=0xda9C093a7D9e41d21Dc9A7ff5601A3FD02111d95&tokenInChainId=168587773&tokenOutAddress=ETH&tokenOutChainId=168587773&amount=1000000&type=exactIn

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



