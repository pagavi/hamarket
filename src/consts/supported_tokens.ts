import type { Chain } from "thirdweb";
import {ethereum, bsc, myChain } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: myChain,
    tokens: [
      {
        tokenAddress: "0xE8DD44d0791B73afe9066C3A77721f42d0844bEB",
        symbol: "TN100x",
        icon: "/erc20-icons/TN100x.webp",
      },
      {
        tokenAddress: "0xD54c2f476da8960Fe25Eac65df596b76007131AB",
        symbol: "HAPE",
        icon: "/erc20-icons/HAPE.jpeg",
      },
      // Add more ERC20 here...
    ],
  },

];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/eth.png",
  
  [myChain.id]: "/native-token-icons/eth.png",
  
};