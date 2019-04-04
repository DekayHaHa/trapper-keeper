import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
import Form from './Form';
import NotesContainer from './NotesContainer';

export class App extends Component {
	componentDidMount() {
		this.props.getNotes();
	}
  
	render() {
		return (
			<div className="App">
				<Header />
				<Form />
				<NotesContainer/>
			</div>
		);
	}
}

export const mapDispatchToProps = (dispatch) => ({
	getNotes: () => dispatch(getNotes())
});

export const mapStateToProps = state => ({
	notes: state.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
