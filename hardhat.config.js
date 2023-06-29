require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const urls = {
  ipc: process.env.IPC_RPC_URL,
  calibration: process.env.CALIBRATION_RPC_URL,
  sepolia: process.env.ETH_SEPOLIA_RPC_URL,
  optimism_test: process.env.OPTIMISM_TEST_RPC_URL,
  arbitrum_test: process.env.ARBITRUM_TEST_RPC_URL,
  mantle_test: process.env.MANTLE_TEST_RPC_URL,
  polygon_mumbai: process.env.POLYGON_MUMBAI_RPC_URL,
  polygon_zkevm: process.env.POLYGON_ZKEVM_RPC_URL,
  klaytn_testnet: process.env.KLAYTN_TEST_RPC_URL,
  bsc_testnet: process.env.BSC_TEST_RPC_URL,
  avax_testnet: process.env.AVAX_TEST_RPC_URL,
  celo_testnet: process.env.CELO_TEST_RPC_URL,
  fantom_testnet: process.env.FANTOM_TEST_RPC_URL,
  near_testnet: process.env.NEAR_TEST_RPC_URL,
};

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
if (!walletPrivateKey) {
  throw new Error('Please set your Wallet private key in a .env file');
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: urls['sepolia'],
      accounts: [walletPrivateKey],
    },
    // ipc: {
    //   url: urls['ipc'],
    //   accounts: [walletPrivateKey],
    // },
    calibration: {
      url: urls['calibration'],
      accounts: [walletPrivateKey],
    },
    optimism_testnet: {
      url: urls['optimism_test'],
      accounts: [walletPrivateKey],
    },
    arbitrum_testnet: {
      url: urls['arbitrum_test'],
      accounts: [walletPrivateKey],
    },
    mantle_testnet: {
      url: urls['mantle_test'],
      accounts: [walletPrivateKey],
    },
    polygon_mumbai: {
      url: urls['polygon_mumbai'],
      accounts: [walletPrivateKey],
    },
    polygon_zkevm: {
      url: urls['polygon_zkevm'],
      accounts: [walletPrivateKey],
    },
    klaytn_testnet: {
      url: urls['klaytn_testnet'],
      accounts: [walletPrivateKey],
    },
    bsc_testnet: {
      url: urls['bsc_testnet'],
      accounts: [walletPrivateKey],
    },
    celo_testnet: {
      url: urls['celo_testnet'],
      accounts: [walletPrivateKey],
    },
    avax_testnet: {
      url: urls['avax_testnet'],
      accounts: [walletPrivateKey],
    },
    fantom_testnet: {
      url: urls['fantom_testnet'],
      accounts: [walletPrivateKey],
    },
    near_testnet: {
      url: urls['near_testnet'],
      accounts: [walletPrivateKey],
    },
  },
};
