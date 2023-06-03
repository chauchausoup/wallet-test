import React from 'react'

import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core';

import useMetaMaskOnboarding from '../../hooks/useMetaMaskOnboarding';
import { injected } from '../../connectors'

import WalletData from './WalletData';
import Button from './Button';

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

					<Button onClickHandler={() => {
						activate(injected, undefined, true).catch((error) => {
							// ignore the error if it's a user rejected request
							if (error instanceof UserRejectedRequestError) {
							} else {
								setError(error);
							}
						});
					}} buttonContent={isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"} />

				) : (
					<Button onClickHandler={startOnboarding} buttonContent={`Install Metamask`} />
				)}

				<Button onClickHandler={closeModal} buttonContent={`Close`} />

			</div>
		);
	}

	return <WalletData closeModal={closeModal} />
}
