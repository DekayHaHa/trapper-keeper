import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { getItems } from '../thunks/getItems';

class App extends Component {
  componentDidMount() {
    this.props.getItems('http://localhost:3001/api/notes');
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
  getItems: (items) => dispatch(getItems(items)),
});

export default connect(null, mapDispatchToProps)(App);
