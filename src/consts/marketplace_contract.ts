import type { Chain } from "thirdweb";
import { myChain } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0xd9Ba013322d683ff438eF8ae4a5660915e22319c",
    chain: myChain,
  },
  
];
