require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    sepolia: {
      url:process.env.SEPOLIA_RPC_URL, 
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111, 
    },
    goerli: {
      url:process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
      constructorArgs: [process.env.EmitWinner_Goerli_Address]
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      game1Address: [process.env.GAME1_CONTRACT_ADDRESS],
      game2Address: [process.env.GAME2_CONTRACT_ADDRESS],
      game3Address: [process.env.GAME3_CONTRACT_ADDRESS],
      game4Address: [process.env.GAME4_CONTRACT_ADDRESS],
      game5Address: [process.env.GAME5_CONTRACT_ADDRESS],
    }
  },
  solidity: "0.8.4",
};