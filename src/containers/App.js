import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
// import Form from './Form';
import NotesContainer from './NotesContainer';
import { Route } from 'react-router-dom';
import CreateNote from '../containers/CreateNote'
import { PageNotFound } from '../components/PageNotFound';

export class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  findNote = (match) => {
    const { notes } = this.props;
    const { id } = match.params;
    console.log('match params: ', id);
    const note = notes.find(note => note.id === id);
    return <CreateNote edit={true} {...note} />
  }

  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Route exact path='/' component={NotesContainer} />
        <Route exact path='/api/notes/:id' render={({ match }) => {
          const note = this.findNote(match)
          return note || <PageNotFound />
        }} />
      </div>
      // <Route exact path='/' render={() => (
      // 	<div className="App">
      // 		<Header />
      // 		<Form />
      // 		<NotesContainer/>
      // 	</div>
      // )}/>
    );
  }
}
App.propTypes = {
  notes: PropTypes.array,
  getNotes: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  getNotes: () => dispatch(getNotes())
});

export const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
