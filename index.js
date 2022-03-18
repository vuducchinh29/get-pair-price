const PancakePairABI = require('./abi/pancake_pair_abi.json')
const {web3_bsc_rpc} = require('./web3')
const PAIR_ADDRESS = '0x6d7c7beb2111d3332faEbE815C54E005557F3D61' //HFI-BUSD
const BUSD_ADDRESS = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'

async function get_price(PAIR_ADDRESS) {
    const pair_contract = new web3_bsc_rpc.eth.Contract(PancakePairABI, PAIR_ADDRESS)
    const reserve = await pair_contract.methods.getReserves().call()
    const raw_amount_0 = reserve._reserve0
    const raw_amount_1 = reserve._reserve1
    const token_amount_0 = raw_amount_0 / Math.pow(10, 18)
    const token_amount_1 = raw_amount_1 / Math.pow(10, 18)
    const price = token_amount_1/ token_amount_0
    return console.log(price)
}

get_price(PAIR_ADDRESS)