var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  if (process.env.ETH_PREFIX) {
    Adoption['bytecode'] = process.env.ETH_PREFIX + Adoption['bytecode'].substring(2)
  }
  deployer.deploy(Adoption);
};
