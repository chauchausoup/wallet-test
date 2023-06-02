import React from 'react'

import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core';

import useMetaMaskOnboarding from '../../hooks/useMetaMaskOnboarding';
import { injected } from '../../connectors'

import WalletData from './WalletData';

export default function AlertModal({ closeModal }) {

	const { activate, account, setError } = useWeb3React();

	const {
		isMetaMaskInstalled,
		isWeb3Available,
		startOnboarding,
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

				<button onClick={closeModal}>Close</button>

			</div>
		);
	}

	return <WalletData closeModal={closeModal} />
}
