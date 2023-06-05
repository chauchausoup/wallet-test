import React, { useState } from 'react';
import ConverterForm from '@/components/ConverterForm';
import ModalComponent from '@/components/ModalComponent';

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

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended pattern
      // is to put them in JSON files separated by locale (e.g. `en.json`).
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
