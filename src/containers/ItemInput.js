import React, { Component } from 'react';

export class ItemInput extends Component {
	constructor() {
		super();
		this.state = {
			item: ''
		};
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	}

	sendListItem = () => {
		this.props.addListItem(this.state.item)
		this.setState({ item: '' })
	}

	render() {
		return (
			<div>
				<button onClick={this.sendListItem}>+</button>
				<input type='text' name='item' value={this.state.item} onChange={this.handleChange} placeholder='item...' />
			</div>
		);
	}
}