import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { getNotes } from '../thunks/getNotes';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <h1>Keeper</h1>
        <Form />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getNotes: (items) => dispatch(getNotes(items)),
});

export default connect(null, mapDispatchToProps)(App);
