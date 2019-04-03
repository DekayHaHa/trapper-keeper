import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { getNotes } from '../thunks/getNotes';
import NotesContainer from './NotesContainer';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Keeper</h1>
        <Form />
        <NotesContainer/>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getNotes: (items) => dispatch(getNotes(items)),
});

export const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
