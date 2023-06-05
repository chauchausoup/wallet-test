import React, { useState } from 'react';
import Modal from 'react-modal';

import AlertModal from './AlertModal';

function ModalComponent({ modalOpen, closeModal }): JSX.Element {
  return (
    <div>
      <div className="bg-slate-50">
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          shouldCloseOnEsc={true}
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
        >
          <button
            className="close-button"
            onClick={closeModal}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-content">
            <AlertModal closeModal={closeModal} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default ModalComponent;
