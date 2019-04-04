import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
import Form from './Form';
import NotesContainer from './NotesContainer';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  // findNote = ({ match }) => {
  //   const { notes } = this.props;
  //   const { id } = match.params;
  //   console.log('match params: ', id);
  //   const note = notes.find(note => note.id === id);
  //   return <CreateNote {...note} />
  // }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Route path='/' component={Header} />
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
  notes: state.notes,
  isLoading: state.isLoading
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
