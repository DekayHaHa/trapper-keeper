import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import uuid from 'uuid/v4';

export class NotesContainer extends Component {

  render() {
    const { notes } = this.props;
    const renderNotes = notes.map(note => (
      <Grid key={uuid()} item xs={12} sm={6} md={4} lg={2}>
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
NotesContainer.propTypes = {
  notes: PropTypes.array,
  error: PropTypes.string
};

export const mapStateToProps = state => ({
  notes: state.notes,
  error: state.error
})

export default connect(mapStateToProps)(NotesContainer);