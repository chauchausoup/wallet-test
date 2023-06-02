"use client"
import { useState } from 'react';

const CONVERSION_RATE = 3; // Conversion rate: 1 NEP = 3 BUSD

const ConverterForm: React.FC = () => {
	const [nepValue, setNepValue] = useState('');
	const [busdValue, setBusdValue] = useState('');

	const handleNepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setNepValue(value);
		setBusdValue(value ? (parseFloat(value) * CONVERSION_RATE).toString() : '');
	};

	const handleBusdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setBusdValue(value);
		setNepValue(value ? (parseFloat(value) / CONVERSION_RATE).toString() : '');
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-3xl mb-4 pb-6">Currency Converter</h1>
			<label className="space-x-10">
				NEP:
				<input
					type="number"
					value={nepValue}
					onChange={handleNepChange}
					className="border border-gray-300 rounded px-6 py-1 text-black"
				/>
			</label>
			<br />
			<label className="space-x-10">
				BUSD:
				<input
					type="number"
					value={busdValue}
					onChange={handleBusdChange}
					className="border border-gray-300 rounded px-6 py-1 text-black"
				/>
			</label>
		</div>
	);
};

export default ConverterForm;
