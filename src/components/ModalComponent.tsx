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
			<button className='border border-gray-300 rounded px-6 py-3 m-10 text-black' onClick={() => openModal()}>Check Status</button>
			<div className=''>
				{<Modal
					isOpen={modalOpen}
					onRequestClose={closeModal}
					contentLabel="Modal"
					style={{
						overlay: {
							height: "50%",
							width: "50%",
							top: "25%",
							left: "25%"
						}
					}}
				>
					<div className="h-full flex flex-col items-center justify-center m-auto p-10">
						<AlertModal closeModal={closeModal} />
					</div>
				</Modal>}
			</div>
		</div>
	);
}

export default ModalComponent;
