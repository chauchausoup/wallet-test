import React from 'react'

export default function Button({ buttonContent, onClickHandler }) {
	return (
		<button className='border border-gray-300 rounded px-6 py-3 m-10 text-black' onClick={onClickHandler}>{buttonContent}</button>
	)
}
