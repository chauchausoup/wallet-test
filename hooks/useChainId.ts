import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

export default function useChainId() {
  const { chainId } = useWeb3React<Web3Provider>();

  return chainId;
}
