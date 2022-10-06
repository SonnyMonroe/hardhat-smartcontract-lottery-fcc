require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY



module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY], 
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "MATIC",
    },
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: { 
            goerli: ETHERSCAN_API_KEY,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        player: {
            default: 1,
        },
    },
    solidity: "0.8.7", // I may need to change this was previously "0.8.17"
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 500000, // fivehunderedthousand miliseconds == 500 seconds max
    },
}
