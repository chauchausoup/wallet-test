import React, { useState, ChangeEvent } from 'react';

const CONVERSION_RATE = 3; // Conversion rate: 1 NEP = 3 BUSD

const ConverterForm: React.FC = () => {
	const [nepValue, setNepValue] = useState<string>('');
	const [busdValue, setBusdValue] = useState<string>('');

	const handleNepChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setNepValue(value);
		setBusdValue(value ? (parseFloat(value) * CONVERSION_RATE).toFixed(2).toString() : '');
	};

	const handleBusdChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setBusdValue(value);
		setNepValue(value ? (parseFloat(value) / CONVERSION_RATE).toFixed(2).toString() : '');
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-3xl mb-4 pb-6">Currency Converter</h1>
			<div className="flex flex-row">
				<label className="px-5">NEP:</label>
				<input
					type="number"
					value={nepValue}
					onChange={handleNepChange}
					className="border border-gray-300 rounded px-6 py-1 text-black"
				/>
			</div>
			<div>
				<br />
				<label className="px-4">BUSD:</label>
				<input
					type="number"
					value={busdValue}
					onChange={handleBusdChange}
					className="border border-gray-300 rounded px-6 py-1 text-black"
				/>
			</div>
		</div>
	);
};

export default ConverterForm;
