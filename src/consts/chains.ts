import { defineChain, ethereum, bsc } from "thirdweb/chains";

const myChainId = 5112;
const myChain = defineChain(5112);

export {  ethereum, bsc, myChain }