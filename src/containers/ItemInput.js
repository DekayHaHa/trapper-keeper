import React, { Component } from 'react';

export class ItemInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			isComplete: false,
			id: 0
		};
	}

	componentWillMount() {
		const { text, isComplete, id } = this.props
		if (this.props.text) {
			console.log(this.props)
			this.setState({ text, isComplete, id })
		}
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	}

	sendListItem = () => {
		const { addListItem, updateItem } = this.props
		if (addListItem) {
			addListItem(this.state.text)
			this.setState({ text: '' })
		} else {
			updateItem(this.state)
		}
	}

	render() {
		return (
			<div>
				<input type='text' name='text' value={this.state.text} onBlur={this.sendListItem} onChange={this.handleChange} placeholder='item...' />
			</div>
		);
	}
}