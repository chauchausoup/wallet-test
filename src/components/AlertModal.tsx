import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react'
import useMetaMaskOnboarding from '../../hooks/useMetaMaskOnboarding';
import { injected } from '../../connectors'
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { formatEtherscanLink, shortenHex } from '../../util';
import useENSName from '../../hooks/useENSName';
import ETHBalance from './ETHBalance';
import ChainId from './ChainId';

export default function AlertModal({ openModal2, closeModal1 }) {



	const { active, error, activate, deactivate, chainId, account, setError } =
		useWeb3React();

	const ENSName = useENSName(account);


	const {
		isMetaMaskInstalled,
		isWeb3Available,
		startOnboarding,
		stopOnboarding,
	} = useMetaMaskOnboarding();

	if (typeof account !== "string") {
		return (
			<div>
				{isWeb3Available ? (
					<button
						onClick={() => {

							activate(injected, undefined, true).catch((error) => {
								// ignore the error if it's a user rejected request
								if (error instanceof UserRejectedRequestError) {
								} else {
									setError(error);
								}
							});



						}}
					>
						{isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
					</button>
				) : (
					<button onClick={startOnboarding}>Install Metamask</button>
				)}
			</div>
		);
	}

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
				disconnectHandler()
			}}>
				disconnect
			</button>

			<button onClick={closeModal1}>Close</button>

		</div >
	)
}
