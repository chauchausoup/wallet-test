import React from 'react'

export default function AlertModal({ openModal2, closeModal1 }) {
	return (
		<div>
			<h2>Connect</h2>
			<button onClick={() => openModal2('Modal 2 content')}>Connect Wallet</button>
			<button onClick={closeModal1}>Close</button>
		</div>
	)
}
