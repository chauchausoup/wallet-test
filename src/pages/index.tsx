import React, { useState } from 'react';
import ConverterForm from '../components/ConverterForm';
import ModalComponent from '../components/ModalComponent';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ConverterForm openModal={openModal} />
      <ModalComponent modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HomePage;
