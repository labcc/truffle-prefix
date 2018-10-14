module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
  // ,
  // compilers: {
  //   external: {
  //     command: "echo 'Adding 0x00707269 to contracts'",
  //     targets: [{
  //       command: "./bin/solc-prefix",
  //       path: "build/**/*.json",
  //       stdin: false
  //       // see https://github.com/labcc/truffle-prefix-truffle/blob/beta/packages/truffle-external-compile/index.js#L161 for details
  //     }]
  //   }
  // }
};
