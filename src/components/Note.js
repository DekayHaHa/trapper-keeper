import React, { Component } from 'react';
import { deleteNote } from '../thunks/deleteNote';
import { connect } from 'react-redux';

export class Note extends Component {
	renderNoteItems = () => {
		return this.props.itemsList.map(item => <li key={item.id} >{item.text}</li>);
	};

	removeNote = () => {
		this.props.deleteNote(this.props.id)
	}

	render() {
		return (
			<div>
				<p>{this.props.title}</p>
				<ul>
					{this.renderNoteItems()}
				</ul>
				<button onClick={this.removeNote}>Delete Note</button>
			</div>
		);
	}
};

export const mapDispatchToProps = (dispatch) => ({
	deleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(null, mapDispatchToProps)(Note);