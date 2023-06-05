import React, { useCallback } from 'react';
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
  const { account, activate } = useWeb3React();

  const connectMetaMask = useCallback(async () => {
    try {
      await activate(injected, undefined);
    } catch (error) {
      if (error instanceof UserRejectedRequestError) {
        throw new Error('Wallet connection request was rejected.');
      } else {
        throw error;
      }
    }
  }, [activate]);

  const { isMetaMaskInstalled, isWeb3Available, startOnboarding } =
    useMetaMaskOnboarding();

  if (!account) {
    return (
      <div>
        <p className="m-5 text-red-500">
          No wallet detected. Please follow the steps below to continue.
        </p>
        {isWeb3Available ? (
          <Button
            onClickHandler={connectMetaMask}
            buttonContent={
              isMetaMaskInstalled ? 'Connect to MetaMask' : 'Connect to Wallet'
            }
          />
        ) : (
          <Button
            onClickHandler={startOnboarding}
            buttonContent="Install MetaMask"
          />
        )}
        <Button onClickHandler={closeModal} buttonContent="Close" />
      </div>
    );
  }

  return <WalletData closeModal={closeModal} />;
}
