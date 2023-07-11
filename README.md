# Basic Performance Testing of EVM-Compatible Networks 

This code simply times how long a network takes to make a function call to a contract and return the results. ```PerformanceTest.sol```

The function call is made 10 times and the average time is taken from there and results written to a file. ```performance-results-$NETWORK_NAME.json```


Full write up: https://blog.lilypadnetwork.org/lilypad-project-report-july-3 


Just run the following code for the network defined in hardhat.config

```npx hardhat run scripts/performanceTest.js --network $NETWORK_NAME```


Network RPC's (throw this in a .env file with your private key)

```
CALIBRATION_RPC_URL=https://api.calibration.node.glif.io/rpc/v0
IPC_RPC_URL=https://api.spacenet.node.glif.io/rpc/v1
ETH_SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/TX-9thgU9y4jl469VwB1kF6nskgd1qwr
OPTIMISM_TEST_RPC_URL=https://opt-goerli.g.alchemy.com/v2/8HgWHFikFlCVr6ALrwJVHByIB_9k9XNl
ARBITRUM_TEST_RPC_URL=https://arb-goerli.g.alchemy.com/v2/7-8pJRrHkYPa8whOiKYKY2LVzuUxaUq2
POLYGON_MUMBAI_RPC_URL=https://polygon-mumbai.g.alchemy.com/v2/rU4ws-oI70mxXOWecJM4Vh5z7K_NxVde
POLYGON_ZKEVM_RPC_URL=https://polygonzkevm-testnet.g.alchemy.com/v2/a76UQWUglufQAEp6gt3JsbIUKY99UbR7
MANTLE_TEST_RPC_URL=https://rpc.testnet.mantle.xyz/
# MANTLE_TEST_RPC_URL=https://rpc.ankr.com/mantle_testnet
# https://rpc.testnet.mantle.xyz
BSC_TEST_RPC_URL=https://data-seed-prebsc-1-s1.binance.org:8545/
KLAYTN_TEST_RPC_URL=https://public-en-baobab.klaytn.net/
CELO_TEST_RPC_URL=https://alfajores-forno.celo-testnet.org
AVAX_TEST_RPC_URL=https://api.avax-test.network/ext/bc/C/rpc
FANTOM_TEST_RPC_URL=https://rpc.testnet.fantom.network
NEAR_TEST_RPC_URL=https://aurora-testnet.infura.io/v3/a603fe2e1857496bab77eb6807219139
# NEAR_TEST_RPC_URL=https://rpc.testnet.near.org
```


# Initial Results

![image](https://github.com/DeveloperAlly/PerformanceTesting/assets/12529822/16652583-fa0d-4abb-bed3-3e24704e4554)

(check the testResults folder for full outputs)


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
