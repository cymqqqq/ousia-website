/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;

module.exports = {
  solidity: "0.7.3",
  networks: {
    
  }
};
