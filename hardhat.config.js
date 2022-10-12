require("dotenv").config();
require('@nomiclabs/hardhat-waffle');

//const {API_URL, PRIVATE_KEY} = process.env


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey : 'VII5VU2A2MMQNW52VC6DATE94N2N6PMGJZ'
  }
  
};
