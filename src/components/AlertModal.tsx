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
			<div className='flex flex-row items-center justify-center'>
				{isWeb3Available ? (
					<button
						className='border border-gray-300 rounded px-6 py-3 m-10 text-black'
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
					<button className='border border-gray-300 rounded px-6 py-3 m-10 text-black' onClick={startOnboarding}>Install Metamask</button>
				)}

				<button className='border border-gray-300 rounded px-6 py-3 m-10 text-black' onClick={closeModal}>Close</button>

			</div>
		);
	}

	return <WalletData closeModal={closeModal} />
}
