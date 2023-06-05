import React, { useState } from 'react';
import ConverterForm from '@/components/ConverterForm';
import ModalComponent from '@/components/ModalComponent';

interface HomePageProps {
  messages: any;
}

const HomePage: React.FC<HomePageProps> = ({ messages }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ConverterForm openModal={openModal} />
      <ModalComponent modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps(context: any) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
