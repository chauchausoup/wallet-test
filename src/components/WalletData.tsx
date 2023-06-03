import React from 'react'
import { useWeb3React } from '@web3-react/core';

import ETHBalance from './ETHBalance';
import ChainId from './ChainId';

import useENSName from '../../hooks/useENSName';
import { formatEtherscanLink, shortenHex } from '../../util';
import Button from './Button';

export default function WalletData({ closeModal }) {

	const { chainId, account, deactivate } = useWeb3React();
	const ENSName = useENSName(account);

	const disconnectHandler = () => {
		console.log("======DISCONNECT=====")
		deactivate()
	}

	return (
		<div>
			<div className="flex flex-col items-center justify-center p-10">
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
			</div >

			<div className='flex flex-row items-center justify-center '>
				<Button onClickHandler={() => { disconnectHandler() }} buttonContent={`Disconnect`} />
				<Button onClickHandler={closeModal} buttonContent={`Close`} />
			</div>
		</div>
	)
}
