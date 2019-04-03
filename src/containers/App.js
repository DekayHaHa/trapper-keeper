import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
import Form from './Form';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getNotes: (items) => dispatch(getNotes(items)),
});

export default connect(null, mapDispatchToProps)(App);
