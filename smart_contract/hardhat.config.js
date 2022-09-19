require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OZzEVoTgx344HjELFerS43IaMUBABVa6',
      accounts: ['e6d8f40783f6af5d934d9898c14a58127a03d060d481bd5d46fa94d14768d264']
    }
  }
};
