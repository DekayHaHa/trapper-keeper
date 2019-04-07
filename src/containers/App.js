import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { getNotes } from '../thunks/getNotes';
// import Form from './Form';
import NotesContainer from './NotesContainer';
import { Route, Switch } from 'react-router-dom';
import CreateNote from '../containers/CreateNote'
import { PageNotFound } from '../components/PageNotFound';

export class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  findNote = (match) => {
    const { notes } = this.props;
    const { id } = match.params;
    const note = notes.find(note => note.id === id);
    return note ? <CreateNote edit={true} {...note} /> : <PageNotFound />
  }

  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/' exact component={NotesContainer} />
          <Route path='/api/notes/:id' exact render={({ match }) => {
            return this.findNote(match)
          }} />
          <Route path='/api/new-note' exact component={NotesContainer} />
          <Route component={PageNotFound} />
        </Switch>
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
