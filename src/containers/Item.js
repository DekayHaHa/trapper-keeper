// ignore thus file for now

// import React, { Component } from 'react';

// export class Item extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			text: this.props.item || '',
// 			isComplete: this.props.isComplete || false,
// 			id: this.props.id || null
// 		};
// 	}

// 	handleChange = e => {
// 		const { value, name } = e.target;
// 		const { text } = this.state
// 		this.setState({ [name]: value });
// 		if (text.length === 1) {
// 			this.props.addListItem(this.state)
// 		}

// 	}

// 	// sendListItem = () => {
// 	// 	this.props.addListItem(this.state.item)
// 	// 	this.setState({ item: '' })
// 	// }

// 	render() {
// 		const itemInput = <input type='text' name='item' value={this.state.text} onChange={this.handleChange} placeholder='item...' />
// 		return (
// 			<div>
// 				{itemInput}
// 				{/* <input type='text' name='item' value={this.state.item} onChange={this.handleChange} placeholder='item...' /> */}
// 			</div>
// 		);
// 	}
// }