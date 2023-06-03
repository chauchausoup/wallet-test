import React, { useState } from 'react';
import Modal from 'react-modal';

import AlertModal from './AlertModal';
import Button from './Button';


function ModalComponent(): JSX.Element {

	const [modalOpen, setModalOpen] = useState(false);

	function openModal() {
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div>
			<Button onClickHandler={() => openModal()} buttonContent={`Check Status`} />
			<div className='bg-slate-50'>
				{<Modal
					isOpen={modalOpen}
					onRequestClose={closeModal}
					contentLabel="Modal"
					shouldCloseOnEsc={true}
					style={{
						overlay: {
							height: "50%",
							width: "50%",
							top: "25%",
							left: "25%",
						}
					}}
				>

					<button className="close-button absolute top-1 right-1 pr-1 bg-transparent border-none cursor-pointer" onClick={closeModal}>
						x
					</button>

					<div className="h-full flex flex-col items-center justify-center m-auto p-10 bg-slate-100">
						<AlertModal closeModal={closeModal} />
					</div>
				</Modal>}
			</div>
		</div >
	);
}

export default ModalComponent;
