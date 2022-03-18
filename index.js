const Web3 = require("web3")
const PancakePairABI = require('./abi/pancake_pair_abi.json')
const BSC_RPC = 'https://bsc-dataseed.binance.org/'
const PAIR_ADDRESS = '0x6d7c7beb2111d3332faEbE815C54E005557F3D61' //HFI-BUSD

const web3 = new Web3( new Web3.providers.HttpProvider(BSC_RPC))

async function get_price(PAIR_ADDRESS) {
    const pair_contract = new web3.eth.Contract(PancakePairABI, PAIR_ADDRESS)
    const reserve = await pair_contract.methods.getReserves().call()
    const raw_amount_0 = reserve._reserve0
    const raw_amount_1 = reserve._reserve1
    const token_amount_0 = raw_amount_0 / Math.pow(10, 18)
    const token_amount_1 = raw_amount_1 / Math.pow(10, 18)
    const price = token_amount_1/ token_amount_0
    return console.log(price)
}

get_price(PAIR_ADDRESS)