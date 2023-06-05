import { Web3ReactProvider } from '@web3-react/core';
import { NextIntlProvider } from 'next-intl';

import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import '../../globals.css';

import getLibrary from '@/lib/getLibrary';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
}

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </NextIntlProvider>
  );
}

export default NextWeb3App;
