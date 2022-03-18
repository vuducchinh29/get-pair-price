const Web3 = require("web3")

const BSC_WS = 'wss://ws-nd-278-732-517.p2pify.com/fb58da21ecf28b36fad6a6528572a6b2'
const BSC_RPC = 'https://nd-278-732-517.p2pify.com/fb58da21ecf28b36fad6a6528572a6b2'

let options = {
  timeout: 30000, // ms

  // Useful for credentialed urls, e.g: ws://username:password@localhost:8546
  headers: {
    authorization: 'Basic username:password'
  },

  clientConfig: {
    // Useful if requests are large
    maxReceivedFrameSize: 100000000,   // bytes - default: 1MiB
    maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

    // Useful to keep a connection alive
    keepalive: true,
    keepaliveInterval: 60000 // ms
  },

  // Enable auto reconnection
  reconnect: {
      auto: true,
      delay: 30000, // ms
      onTimeout: false
  }
}

exports.web3_bsc_ws = new Web3( new Web3.providers.WebsocketProvider(BSC_WS, options))
exports.web3_bsc_rpc = new Web3( new Web3.providers.HttpProvider(BSC_RPC))
