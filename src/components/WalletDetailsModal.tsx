import React from 'react'
import Account from './Account'
import useEagerConnect from '../../hooks/useEagerConnect';
import { useWeb3React } from '@web3-react/core';
import { formatEtherscanLink, shortenHex } from '../../util';
import useENSName from '../../hooks/useENSName';
import ETHBalance from './ETHBalance';
import ChainId from './ChainId';

export default function WalletDetailsModal({ closeModal2 }) {

	const { active, error, activate, deactivate, chainId, account, setError } =
		useWeb3React();

	const ENSName = useENSName(account);




	const disconnectHandler = () => {
		console.log("disconnect")
		deactivate()
	}

	return (
		<div>
			{account && <a
				{...{
					href: formatEtherscanLink("Account", [chainId, account]),
					target: "_blank",
					rel: "noopener noreferrer",
				}}
			>
				{ENSName || `${shortenHex(account, 4)}`}
			</a>}

			<ETHBalance />

			<ChainId />



			<button onClick={() => {
				closeModal2()
				disconnectHandler()
			}}>

				disconnect
			</button>

			<button onClick={closeModal2}>Close</button>

		</div >
	)
}
