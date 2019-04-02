import React from 'react'

export const IncompleteItem = (props) => {
	return (
		<div>
			<p className='completed-item'>{props.text}</p><button onClick={() => props.toggle(props.id)}>Uncheck</button>
		</div>
	)
}