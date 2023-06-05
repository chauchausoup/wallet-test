import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

import { busdToNepConversion, nepToBusdConversion } from '@/lib/util';

import Button from './Button';

const ConverterForm = ({ openModal }) => {
  const [nepValue, setNepValue] = useState('');
  const [busdValue, setBusdValue] = useState('');

  const handleNepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNepValue(value);
    setBusdValue(value ? nepToBusdConversion(value) : '');
  };

  const handleBusdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setBusdValue(value);
    setNepValue(value ? busdToNepConversion(value) : '');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/assets/hero.jpg"
        width={250}
        height={250}
        alt="Picture of the author"
        className="m-10"
      />

      <div className="flex flex-col ">
        <div className="">
          <label id="nepLabel">NEP:</label>
        </div>
        <div className="flex flex-row">
          <input
            type="number"
            aria-labelledby="nepLabel"
            value={nepValue}
            onChange={handleNepChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className=" mt-4">
          <label id="busdLabel">BUSD:</label>
        </div>
        <div className="flex flex-row">
          <input
            type="number"
            aria-labelledby="busdLabel"
            value={busdValue}
            onChange={handleBusdChange}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <Button onClickHandler={openModal} buttonContent="Check Status" />
    </div>
  );
};

export default ConverterForm;
