import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteCard from '../components/NoteCard';
import { Grid } from '@material-ui/core';


export class NotesContainer extends Component {

  render() {
    const { notes } = this.props;
    console.log('notes container: ', notes)
    const renderNotes = notes.map(note => (
      <Grid key={Date.now()} item xs={12} sm={6} md={4} lg={2}>
        <NoteCard key={note.id} note={note} title={this.props.title} deleteNote={this.deleteNote} />
      </Grid>
    ));
    return (
      <Grid container justify='flex-start' alignItems='center'>
        {renderNotes}
      </Grid>
    )
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
  error: state.error
})

export default connect(mapStateToProps)(NotesContainer);