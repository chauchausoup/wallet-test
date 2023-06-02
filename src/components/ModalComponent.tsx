import React, { useState } from 'react';
import Modal from 'react-modal';
import AlertModal from './AlertModal';


function ModalComponent() {

	const [modalOpen, setModalOpen] = useState(false);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div>
			<button onClick={() => openModal()}>Check Status</button>

			{<Modal
				isOpen={modalOpen}
				onRequestClose={closeModal}
				contentLabel="Modal"
			>
				<AlertModal closeModal={closeModal} />
			</Modal>}

		</div>
	);
}

export default ModalComponent;
