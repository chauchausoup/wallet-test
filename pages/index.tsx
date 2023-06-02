import React from 'react';
import ConverterForm from '../src/components/ConverterForm'
import ModalComponent from '../src/components/ModalComponent';

const HomePage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<ConverterForm />
			<ModalComponent />
		</div>
	);
};

export default HomePage;
