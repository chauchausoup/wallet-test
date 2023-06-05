import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  buttonContent: ReactNode;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  buttonContent,
  onClickHandler,
}: ButtonProps): JSX.Element {
  return (
    <button
      className="border border-gray-300 rounded px-6 py-3 m-10 text-black"
      onClick={onClickHandler}
    >
      {buttonContent}
    </button>
  );
}
