import type { Chain } from "thirdweb";
import { ethereum, bsc, myChain } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    
    address: "0x68f343bC08D1C093754a74F2b45a69A2f1A42872",
    chain: myChain,
    title: "The Ham LP",
    thumbnailUrl:
      "https://hot-nft.infura-ipfs.io/ipfs/QmdgVptZDEJRmM7JZVvqpNAoRnidBGT8WKumcWQjR3kK4D/download.svg",
    type: "ERC721",
  },
  {
    
    address: "0x9a047d14e28c27864ADd495681Edc20D1C577F83",
    chain: myChain,
    title: "The Ham LP",
    thumbnailUrl:
      "https://hot-nft.infura-ipfs.io/ipfs/QmdgVptZDEJRmM7JZVvqpNAoRnidBGT8WKumcWQjR3kK4D/download.svg",
    type: "ERC721",
  },
 
];
