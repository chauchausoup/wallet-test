import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "../../hooks/useETHBalance";
import { parseBalance } from "../../util";

const ETHBalance: React.FC = () => {
	const { account } = useWeb3React<Web3Provider>();
	const { data } = useETHBalance(account);

	return (
		<p>
			<span className="text-slate-500">Balance:</span> Ξ {parseBalance(data ?? 0)}
		</p>
	);
};

export default ETHBalance;
