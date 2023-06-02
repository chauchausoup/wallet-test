import React, { useState } from 'react';
import Modal from 'react-modal';
import AlertModal from './AlertModal';
import WalletDetailsModal from './WalletDetailsModal';
import { useWeb3React } from '@web3-react/core';

function MyComponent() {

	const { account, library } = useWeb3React();

	const isConnected = typeof account === 'string' && !!library;


	const [modal1Open, setModal1Open] = useState(false);
	const [modal2Open, setModal2Open] = useState(false);

	function openModal1(content) {
		setModal1Open(true);
	}

	function closeModal1() {
		setModal1Open(false);
	}

	function openModal2(content) {
		setModal2Open(true);
	}

	function closeModal2() {
		setModal2Open(false);
	}

	return (
		<div>
			<button onClick={() => openModal1('Modal 1 content')}>Check Status</button>
			{<Modal
				isOpen={modal1Open}
				onRequestClose={closeModal1}
				contentLabel="Modal 1"
			>

				<AlertModal openModal2={openModal2} closeModal1={closeModal1} />
			</Modal>}

			{<Modal
				isOpen={modal2Open}
				onRequestClose={closeModal2}
				contentLabel="Modal 2"
			>
				<WalletDetailsModal closeModal2={closeModal2} />
			</Modal>}
		</div>
	);
}

export default MyComponent;
