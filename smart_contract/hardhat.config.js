require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url : 'https://polygon-mumbai.g.alchemy.com/v2/gswJjAIbXwW8-zoLWPlHQzwmJfdGArkw',
      accounts: ['d4f48d29b15d509c82c72756c2efe3afdd99e4557d6658fb673aa4a8bddd23fd'],
    },
  },
};
