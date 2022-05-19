require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/eRFAVWLanAkx5nZirUtQMtjvhy0yRbgO",
      accounts: [
        "cfdbc121cf0e704d06c73c12343e9c4f08cb5f02e319d5fb97024d4eede1069b",
      ],
    },
  },
};
