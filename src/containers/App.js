import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
import NotesContainer from './NotesContainer';
import { Route, Switch } from 'react-router-dom';
import CreateNote from '../containers/CreateNote';
import { PageNotFound } from '../components/PageNotFound';

export class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  findNote = (match) => {
    const { notes } = this.props;
    const { id } = match.params;
    const note = notes.find(note => note.id === id);
    return note
  }

  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/' exact component={NotesContainer} />
          <Route path='/api/notes/:id' exact render={({ match }) => {
            const note = this.findNote(match)
            return note ? <CreateNote edit={true} {...note} /> : <PageNotFound />
          }} />
          <Route path='/api/new-note' exact component={NotesContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
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
