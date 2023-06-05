import React from 'react';
import { UserRejectedRequestError } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import useMetaMaskOnboarding from '../lib/hooks/useMetaMaskOnboarding';
import { injected } from '../lib/connectors';
import WalletData from './WalletData';
import Button from './Button';

interface AlertModalProps {
  closeModal: () => void;
}

export default function AlertModal({
  closeModal,
}: AlertModalProps): JSX.Element {
  const { activate, account, setError } = useWeb3React();

  const activateWallet = async () => {
    await activate(injected, undefined, true).catch((error: Error) => {
      if (error instanceof UserRejectedRequestError) {
      } else {
        setError(error);
      }
    });
  };

  const { isMetaMaskInstalled, isWeb3Available, startOnboarding } =
    useMetaMaskOnboarding();

  if (typeof account !== 'string') {
    return (
      <div>
        <p className="m-5 text-red-500">
          No wallet detected. Please follow below operation to continue.
        </p>
        {isWeb3Available ? (
          <Button
            onClickHandler={activateWallet}
            buttonContent={
              isMetaMaskInstalled ? 'Connect to MetaMask' : 'Connect to Wallet'
            }
          />
        ) : (
          <Button
            onClickHandler={startOnboarding}
            buttonContent={`Install Metamask`}
          />
        )}
        <Button onClickHandler={closeModal} buttonContent={`Close`} />
      </div>
    );
  }

  return <WalletData closeModal={closeModal} />;
}
