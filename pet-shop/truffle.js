var Web3HttpProvider = require('web3-providers-http');

var PrefixProvider = function() {
  var url = "http://127.0.0.1:8545"
  this.httpProvider = new Web3HttpProvider(url);
};

PrefixProvider.prototype._prepareRequest = function() {
  return this.httpProvider._prepareRequest()
};

PrefixProvider.prototype.send = function(payload, callback) {
  if (process.env.ETH_PREFIX && payload.method === 'eth_sendTransaction') {
    for(var i = 0; i < payload.params.length; i++) {
      if (!payload.params[i].to) {
        payload.params[i].data = process.env.ETH_PREFIX + payload.params[i].data.substring(2);
      }
    }

  }
  console.log(payload)
  return this.httpProvider.send(payload, callback);
};

PrefixProvider.prototype.disconnect = function() {
  return this.httpProvider.disconnect();
};

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    http: {
      provider: function() {
        return new Web3HttpProvider("http://127.0.0.1:8545")
      },
      network_id: "*"
    },
    prefix: {
      provider: function() {
        return new PrefixProvider();
      },
      network_id: "*"
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
