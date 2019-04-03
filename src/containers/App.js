import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
import Form from './Form';
import NotesContainer from './NotesContainer';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  
  render() {
    console.log(this.props)
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
  getNotes: (items) => dispatch(getNotes(items)),
});

export const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
