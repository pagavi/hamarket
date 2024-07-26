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
    address: "0x7f4CB0Ff6bf17918Fe5f32D699Ffdff6Ee818f5c",
    chain: myChain,
  },
  
];
