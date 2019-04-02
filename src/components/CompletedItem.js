import React from 'react'

export const CompletedItem = (props) => {
	return (
		<div>
			<p className='uncompleted-item'>{props.text}</p><button onClick={() => props.toggle(props.id)}>Check</button>
		</div>
	)
}